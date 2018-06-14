define(["core/TabInterface", "core/DateUtils"], function(TabInterface, DateUtils) {
	
	var Builder = {};

    var tabsPath = "applications/calendar/tabs/";
    var tabPaths = [tabsPath + "clock/ClockTab", tabsPath + "dashboards/DashboardsTab",
                    tabsPath + "diary/DiaryTab", tabsPath + "list/ListTab",
                    tabsPath + "map/MapTab", tabsPath + "photos/PhotosTab",
                    tabsPath + "timeline/TimelineTab"];

    var tabInterface = new TabInterface(tabPaths);
	
	var tabs = {
        "fullList":["clock","dashboards","map","photos","list","timeline"],
        "date":["clock", "dashboards", "map", "photos", "list", "timeline"],
        "week":["dashboards", "map", "photos", "list", "timeline"],
        "month":["dashboards", "map", "photos", "list", "timeline"],
        "year":["dashboards", "photos", "list", "timeline"]
	};
    tabInterface.setTabVisibility(tabs.fullList,true);

    var timeUnits = ['date', 'week', 'month', 'year'];

    var connectorNames = [];

    Builder.init = function(App, Calendar){
        bindDatepicker(App, Calendar);
        bindTabInterface(Calendar);
        bindConnectorButtons(App, Calendar);
        bindTimeUnitsMenu(Calendar);
        bindTimeNavButtons(Calendar);
    }

    function bindDatepicker(App, Calendar) {
        $("#datepicker").datepicker().on("changeDate", function(event) {
            if (Calendar.timeUnit == "date"){
                var formatted = App._formatDateAsDatePicker(event.date.getUTCFullYear(),
                    event.date.getUTCMonth(),
                    event.date.getUTCDate());
                Calendar.fetchState("/api/calendar/nav/getDate",
                    {date: formatted, state: Calendar.tabState});
            }
            else if (Calendar.timeUnit == "week"){
                var weekNumber = DateUtils.getWeekNumber(event.date.getUTCFullYear(),
                    event.date.getUTCMonth(),
                    event.date.getUTCDate());
                var range = DateUtils.getDateRangeForWeek(weekNumber[0],weekNumber[1]);
                Calendar.fetchState("/api/calendar/nav/getWeek",
                    {week: weekNumber[1], year: weekNumber[0], state: Calendar.tabState});
            }
            $(".datepicker").hide();
        });
        $("#datepicker").click(function(){
            if (Calendar.timeUnit == "month" || Calendar.timeUnit == "year"){
                $(".datepicker-days .switch").click();
            }
            if (Calendar.timeUnit == "year"){
                $(".datepicker-months .switch").click();
            }
        });
        $(".datepicker-years td").click(function(event){
            if (Calendar.timeUnit == "year" && $(event.target).hasClass("year")){
                Calendar.fetchState("/api/calendar/nav/getYear",
                    {year: $(event.target).text(), state: Calendar.tabState});
                $(".datepicker").hide();
            }
        });
        $(".datepicker-months td").click(function(event){
            if (Calendar.timeUnit == "month" && $(event.target).hasClass("month")){
                var month = DateUtils.getMonthFromName($(event.target).text()) + 1;
                Calendar.fetchState(
                    "/api/calendar/nav/getMonth",
                    {
                        year: $(".datepicker-months .switch").text(),
                        month: month,
                        state: Calendar.tabState
                    }
                );
                $(".datepicker").hide();
            }
        });
    }

    function bindTabInterface(Calendar) {
        $("#calendarTabs").replaceWith(tabInterface.getNav());
        tabInterface.getNav().addClickListener(function(tabName){
            Calendar.navigateState(tabName + "/" + Calendar.tabState);
        });
    }

    Builder.getConnectorButton = function(connectorName) {
        return $("#flx-connector-btn-" + connectorName);
    };

    Builder.getConnectorNames = function() {
        return connectorNames;
    };

    function connectorClicked(Calendar, connector) {
        var connectorName = connector.connectorName,
            button = Builder.getConnectorButton(connectorName);
        if (button.is(".flx-disconnected")) {
            return;
        }
        var enabled = !Calendar.connectorEnabled[Calendar.currentTabName][connectorName];
        Calendar.connectorEnabled[Calendar.currentTabName][connectorName] = enabled;
        button.toggleClass("flx-active", enabled);
        button.toggleClass("flx-inactive", !enabled);
        Calendar.currentTab.connectorToggled(connectorName, connector.facetTypes, enabled);
    }

    function createConnectorButton(App, Calendar, connector) {
        var configFilterLabel = App.getConnectorConfig(connector.connectorName).filterLabel,
            filterLabel = configFilterLabel || connector.name;
        var button = $('<li/>');
        var buttonLink = $('<a/>', {
            href: "#",
            id: "flx-connector-btn-" + connector.connectorName,
            class: "flx-active"
        }).click(function(event){
            event.preventDefault();
            $(document).click(); //needed for click away to work on tooltips in clock tab
            connectorClicked(Calendar, connector);
            var uploadData = {};
            for (var member in Calendar.connectorEnabled){
                if (member != "default")
                    uploadData[member] = Calendar.connectorEnabled[member];
            }
            $.ajax("/api/connectors/filters",{
                type:"POST",
                data:{filterState:JSON.stringify(uploadData)}
            });
            for (var member in uploadData){
                Calendar.connectorEnabled[member] = uploadData[member];
            }
        }).appendTo(button);
        button.hide();
        $("#selectedConnectors").append(button);
    }

    function bindConnectorButtons(App, Calendar) {
        $.ajax({
            url: "/api/v1/connectors/list",
            async: false,
            success: function(response) {
                $.each(response, function(i, connector) {
                    createConnectorButton(App, Calendar, connector);
                    connectorNames.push(connector.connectorName);
                });
            }
        });
    }
	
	function timeUnitToURL(timeUnit) {
        if (timeUnit.toLowerCase() === 'date') {
            timeUnit = 'day';
        }
        return "/api/calendar/nav/set" + timeUnit.upperCaseFirst() + "TimeUnit";
	}
	
	function createTabs(Calendar) {
		tabInterface.setTabVisibility(tabs.fullList,false);
        tabInterface.setTabVisibility(tabs[Calendar.timeUnit],true);
	}
	
	function bindTimeUnitsMenu(Calendar) {
		var timeUnitIDs = ["#dayViewBtn", "#weekViewBtn", "#monthViewBtn", "#yearViewBtn"];
        $.each(timeUnitIDs, function(i, timeUnitID) {
            var btn = $(timeUnitID);
            btn.toggleClass("active", btn.attr("unit") == Calendar.timeUnit)
                .unbind("click")
                .click(function(event){
                    var timeUnit = $(event.target).attr("unit");
                    var url = timeUnitToURL(timeUnit),
                        params = {state: Calendar.tabState};
                    Calendar.fetchState(url, params);
                });
        });
	}
	
	function bindTimeNavButtons(Calendar) {
        $(".menuNextButton").click(function() {
            Calendar.fetchState("/api/calendar/nav/incrementTimespan",
                                {state: Calendar.tabState});
        });
        $(".menuPrevButton").click(function() {
            Calendar.fetchState("/api/calendar/nav/decrementTimespan",
                                {state: Calendar.tabState});
        });
        $(".menuTodayButton").click(function() {
            Calendar.fetchState("/api/calendar/nav/setToToday",
                                {timeUnit: "DAY"});
        });
		switch(Calendar.timeUnit) {
		case "date":
			nextPrevEnable();
			break;
		case "week":
			nextPrevEnable();
			break;
        // TODO: why is this disabled?
//		case "month":
//			nextPrevEnable();
//			break;
		case "year":
			nextPrevEnable();
			break;
		}
	};
	
	function nextPrevEnable() {
        $(".menuNextButton").removeClass("disabled");
        $(".menuPrevButton").removeClass("disabled");
    };

	function handleNotifications(digestInfo) {
		$(".alert").remove();
        $("#notifications").empty();
		if (typeof(digestInfo.notifications)!="undefined") {
			for (var n=0; n<digestInfo.notifications.length; n++) {
                console.log("showing a notification " + n)
                showNotification(digestInfo.notifications[n]);
			}
            $("#notifications").show();
		}
	}

    function showNotification(notification) {
        App.loadMustacheTemplate("notificationTemplates.html",
            notification.type+"Notification",
            function(template) {
                if ($("#notification-" + notification.id).length==0) {
                    var html = template.render(notification), message = notification.message;
                    $("#notifications").append(html);
                    if (notification.repeated>1) message += " (" + notification.repeated + "x)";
                    $("#notification-" + notification.id).append(message);
                }
            });
    }
	
	function updateTab(digest, Calendar) {
        tabInterface.setRenderParamsFunction(function(){
            return {digest:digest,timeUnit:Calendar.timeUnit,calendarState:Calendar.tabState,connectorEnabled:Calendar.connectorEnabled[Calendar.currentTabName],tabParam:Calendar.tabParam,setTabParam:Calendar.setTabParam};
        });
        tabInterface.setActiveTab(Calendar.currentTabName);
        updateCurrentTab(digest, Calendar);
	}

    function updateCurrentTab(digest, Calendar){
        Calendar.currentTab = tabInterface.getActiveTab();
        if (Calendar.currentTab == null){
            $.doTimeout(50,function(){updateCurrentTab(digest, Calendar)});
            return;
        }
        for (var i = 0; i < digest.selectedConnectors.length; i++){
            var button = $("#flx-connector-btn-" + digest.selectedConnectors[i].connectorName);
            if (Calendar.currentTab.connectorDisplayable(digest.selectedConnectors[i])){
                button.show();
                if (Calendar.currentTab.connectorsAlwaysEnabled()){
                    button.removeClass("flx-disconnected");
                    button.css("border-bottom-color",App.getConnectorConfig(digest.selectedConnectors[i].connectorName).color);
                }
            }
            else
                button.hide();
        }

    }
	
	function tabExistsForTimeUnit(tabName, timeUnit) {
        return _.include(tabs[timeUnit], tabName);
	}

    function isValidTabName(tabName) {
        return _.include(tabs.fullList, tabName);
    }

    function isValidTimeUnit(timeUnit) {
        return _.include(timeUnits, timeUnit);
    }
	
	Builder.tabExistsForTimeUnit = tabExistsForTimeUnit;
	Builder.tabs = tabs;
	Builder.createTabs = createTabs;
	Builder.updateTab = updateTab;
    Builder.isValidTabName = isValidTabName;
    Builder.isValidTimeUnit = isValidTimeUnit;
    Builder.handleNotifications = handleNotifications;

    return Builder;
	
});
