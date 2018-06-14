define(["core/grapher/BTCore"],function(BodyTrack) {

    var connectors;

    function show(){
        $.ajax("/api/v1/connectors/list",{
            success: function(data){
                dataLoaded(data,false);
            }
        });
    }

    //NOTE: updateContents is rather hacky, to prevent images being reloaded dozens of times a version of the row without
    //an image is loaded and used and only the version with an image is used if there is no row for a certain connector
    //also each cell is updated upon the html being different so unless the single row template matches up perfectly
    //with the original full dialog template, the first time through all the cells will be forced to update. However,
    //after that it should in theory properly only update when a change happens in each cell
    function updateContents(){
        $.ajax("/api/v1/connectors/list",{
            success: function(data){
                if (hidden)
                    return;
                App.loadMustacheTemplate("connectorMgmtTemplates.html","connectorSingleRow",function(noImageTemplate){
                        for (var i = 0; i < data.length; i++){
                            if (data[i].manageable){
                                var row = $("#connector-" + data[i].connectorName);
                                var params = getConnectorParams(data[i]);
                                var html = $(noImageTemplate.render(params));
                                if (row.length == 0){
                                    $("#connectorInfoTable").append(imageTemplate.render(params));
                                }
                                else{
                                    var rowChildren = row.children();
                                    var htmlChildren = html.children();
                                    for (var j = 0; j < rowChildren.length; j++){
                                        if ($(htmlChildren[j]).attr("nocompare") != "true" && $(rowChildren[j]).html() != $(htmlChildren[j]).html()){
                                            $(rowChildren[j]).html($(htmlChildren[j]).html());
                                        }
                                    }
                                    if (row.attr("class") != html.attr("class")){
                                        row.attr("class",html.attr("class") == null ? "" : html.attr("class"));
                                    }
                                }
                            }
                        }
                        var rows = $("#connectorInfoTable tr");
                        for (var i = 0; i < rows.length; i++){
                            var found = false;
                            for (var j = 0; !found && j < data.length; j++){
                                found = rows[i].id == "connector-" + data[j].connectorName;
                            }
                            if (!found){
                                $(rows[i]).remove();
                            }
                        }
                        bindDialog();
                });
            }
        })
    }

    function getConnectorParams(data){
        var params = {};
        for (var member in data){
            switch (member){
                default:
                    params[member] = data[member];
                    break;
                case "latestData":
                case "lastSync":
                    var formatted = App.formatDate(data[member],true);
                    if (formatted == "Present")
                        formatted = member == "lastSync" ? "Never" : "No Data";
                    params[member] = formatted;
                    break;
            }
        }
        return params;
    }

    function dataLoaded(data,update){
        connectors = data;
        App.loadMustacheTemplate("connectorMgmtTemplates.html","manageConnectors",function(template){
            var params = [];
            for (var i = 0; i < data.length; i++){
                if (!data[i].manageable)
                    continue;
                params[i] = getConnectorParams(data[i])
            }
            var html = template.render({connectors:params});
            if (update){
                var scrollTop = $("#modal .modal-body").scrollTop();
                $("#modal").html($(html).html());
                $("#modal .modal-body").scrollTop(scrollTop);
            }
            else{
                App.makeModal(html);
            }
            bindDialog();
        });
    }

    var hidden;

    function bindDialog(){
        hidden = false;
         for (var i = 0; i < connectors.length; i++){
             bindConnector(connectors[i], i);
         }
        var syncAllBtn = $("#sync-all");
        syncAllBtn.click(function(){
            setAllToSyncing();
            event.preventDefault();
            $.ajax("/api/sync/all",{
                type:"POST"
            });
        });
        $.doTimeout("manageConnectorsUpdater", 10000, function(){
            updateContents();
            return true;
        });
        $("#modal").unbind("hide");
        $("#modal").on("hide",function(){
            hidden = true;
            $.doTimeout("manageConnectorsUpdater");
            App.activeApp.renderState(App.state.getState(App.activeApp.name),true);
        });
    }

    function bindConnector(connector, i){
        var deleteBtn = $("#remove-" + connector.connectorName);
        deleteBtn.click({index:i}, function(event){
            event.preventDefault();
            confirmDelete(event.data.index);
        });
        var syncNowBtn = $("#syncNow-" + connector.connectorName);
        syncNowBtn.click(function(event){
            event.preventDefault();
            setToSyncing(connector.connectorName)
            $.ajax("/api/sync/" + connector.connectorName,{
                type:"POST"
            });
        });
        var viewDataBtn = $("#viewUpdates-" + connector.connectorName);
        viewDataBtn.click(function(event){
            event.preventDefault();
            App.loadMustacheTemplate("connectorMgmtTemplates.html","viewUpdates",function(template){
                viewUpdates(template, connector);
            });
        });
        var settingsBtn = $("#settings-" + connector.connectorName);
        settingsBtn.click(function(event){
            event.preventDefault();
            App.loadMustacheTemplate("connectorMgmtTemplates.html","settings",function(template){
            	connectorSettings(template, connector);
            });
        });
               
    }

    function connectorSettings(template, connector){
    	
		 var html = template.render(getConnectorParams(connector));
		 App.makeModal(html);
		 
		 $("#saveChanges-"+connector.connectorName).click(function(){
	        	$.ajax({
	        		url:"/api_key/update",
	                type:"POST",
	                data: { 
	                	"connector": connector.connectorName,
	                    'enabled': $("#enabled-"+connector.connectorName).is(':checked'),
	                    'hourly_update_interval': $("#hourlyUpdateInterval-"+connector.connectorName).val(),
	                    'username': $("#username-"+connector.connectorName).val(),
	                    'password': $("#password-"+connector.connectorName).val()
	                },
	                success: function() {
    	        		$('#'+connector.connectorName+'SettingsDialog').modal('hide');
    	        		 $.ajax("/api/v1/connectors/list",{
	        	            success: function(data){
	        	                dataLoaded(data,true);
	        	            }
	        	        });
    	        	}
	        	});
	        });
	        var updateIntervalInput=$("#hourlyUpdateInterval-" + connector.connectorName);
	        updateIntervalInput.jStepper({minValue:1, maxValue:24});
}

    function viewUpdates(template, connector) {
        var connectorName = connector.connectorName.charAt(0).toUpperCase() + connector.connectorName.slice(1);
        $.ajax({
            url:"/api/updates/" + connector.connectorName + "?page=0&pageSize=50",
            success: function(updates) {
                for (var i=0; i<updates.length; i++)
                    updates[i].time = App.formatDate(updates[i].ts, true);
                var html = template.render({connectorName : connectorName,
                                            updates : updates});

                App.makeModal(html);
            }
        });
    }

    function setToSyncing(connectorName){
        var row = $("#connector-" + connectorName);
        if (row.hasClass("nowSynchro")){
            return;
        }
        row.addClass("nowSynchro");
        
        var syncLED = $("#syncLED-" + connectorName);
        $(syncLED).hide();
        var syncNow = $("#syncNow-" + connectorName);
        $(syncNow).hide();
        
        var syncLEDWaiting = $("#syncLED-waiting-" + connectorName);
        syncLEDWaiting.show();
        var lastSync = $("#lastSync-" + connectorName);
        lastSync.html("Now synchronizing");
    }

    function setAllToSyncing(){
        for (var i = 0; i < connectors.length; i++)
            setToSyncing(connectors[i].connectorName);
    }

    function confirmDelete(index){
        App.loadMustacheTemplate("connectorMgmtTemplates.html","deleteConnectorConfirm",function(template){
            var html = template.render(connectors[index]);

            $("body").append(html);
            $("#deleteConnectorConfirm").modal();

            $("#deleteConnectorConfirm").css("zIndex","1052");

            $("#deleteConnectorConfirm").on("hidden",function(){
                $("#deleteConnectorConfirm").remove();
            });

            var backdrops = $(".modal-backdrop");
            $(backdrops[backdrops.length - 1]).css("zIndex","1051");

            var confirmDelete = $("#confirmRemoveConnectorBtn");
            var cancelDelete = $("#cancelRemoveConnectorBtn");

            cancelDelete.click(function() {
                $("#deleteConnectorConfirm").modal("hide");
            });

            confirmDelete.click(function(){
                $.ajax({
                    url: "/api/connectors/" + connectors[index].connectorName,
                    type:"DELETE",
                    success: function() {
                        updateContents();
                        $("#deleteConnectorConfirm").modal("hide");
                    },
                    error: function() {
                        $("#deleteConnectorConfirm").modal("hide");
                    }
                });
            });
        });

    }
    
   
    var ManageConnectors = {};
    ManageConnectors.show = show;
    return ManageConnectors;
});
