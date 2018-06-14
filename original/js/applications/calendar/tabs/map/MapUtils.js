define(["applications/calendar/tabs/map/MapConfig"], function(Config) {
    var config = Config.getConfig();

    function addGPSData(map,gpsData, clickable){
        map.gpsPositions = [];
        map.gpsTimestamps = [];
        if (gpsData.length == 0)
            return;
        map.markers[gpsData[0].type] = [];
        var minLat = 90; //initialized to the largest valid latitude
        var maxLat = 0; //initialized to the smallest valid latitude
        var minLng = 180; //initialized to the largest valid longitude
        var maxLng = -180; //initialized to the smallest valid longitude
        var filtered = 0;
        var avg = 0;
        for (var i = 0; i < gpsData.length; i++){
            if (gpsData[i].accuracy > config.flatAccuracyCutoff || gpsData[i].accuracy == 0){
                filtered++
                continue;
            }
            avg += gpsData[i].accuracy;
        }
        var cutoff = 1000000000;
        if (filtered != gpsData.length){
            avg /= gpsData.length - filtered;
            var std = 0;
            for (var i = 0; i < gpsData.length; i++){
                if (gpsData[i].accuracy > config.flatAccuracyCutoff || gpsData[i].accuracy == 0)
                    continue;
                std += Math.pow(gpsData[i].accuracy - avg,2);
            }
            std /= gpsData.length - filtered;
            std = Math.sqrt(std);
            cutoff = avg + std * config.stdAccuracyCutoff;
        }
        for (var i = 0; i < gpsData.length; i++){
            if (gpsData[i].accuracy > cutoff  || (filtered != gpsData.length && gpsData[i].accuracy == 0)){
                continue;
            }
            var lat = gpsData[i].position[0];
            var lng = gpsData[i].position[1];
            map.gpsPositions[map.gpsPositions.length] = new google.maps.LatLng(lat,lng);
            try {
            map.markers[gpsData[i].type][map.markers[gpsData[i].type].length] = new google.maps.Marker({map:map,
                                                                            position:map.gpsPositions[map.gpsPositions.length-1],
                                                                           icon:App.getConnectorConfig(App.getFacetConnector(gpsData[i].type)).mapicon,
                                                                           shadow:App.getConnectorConfig(App.getFacetConnector(gpsData[i].type)).mapshadow,
                                                                           clickable:clickable});
            map.gpsTimestamps[map.gpsTimestamps.length] = gpsData[i].start;
            map.gpsAccuracies[map.gpsAccuracies.length] = gpsData[i].accuracy;
            map.enhanceMarkerWithItem(map.markers[gpsData[i].type][map.markers[gpsData[i].type].length-1],gpsData[i]);
            var bounds = map.markers[gpsData[i].type][map.markers[gpsData[i].type].length-1].getBounds();
            if (bounds.getSouthWest().lat() < minLat)
                minLat = bounds.getSouthWest().lat();
            if (bounds.getNorthEast().lat() > maxLat)
                maxLat = bounds.getNorthEast().lat();
            if (bounds.getSouthWest().lng() < minLng)
                minLng = bounds.getSouthWest().lng();
            if (bounds.getNorthEast().lng() > maxLng)
                maxLng = bounds.getNorthEast().lng();
            } catch (e) {}
        }
        map.gpsLine = new google.maps.Polyline({map:map, path:map.gpsPositions,clickable:false});
        map.gpsBounds = new google.maps.LatLngBounds(new google.maps.LatLng(minLat,minLng), new google.maps.LatLng(maxLat,maxLng));
        map.noGPSDiv.css("display","none");
    }

    function addData(map,connectorData, connectorInfoId, clickable){
        if (!isDisplayable(connectorInfoId))
            return false;
        map.markers[connectorInfoId] = addItemsToMap(map,connectorData,clickable);
        return map.markers[connectorInfoId] != null;
    }

    function addAddresses(map,addressesData,clickable){
        for (var type in addressesData){
            for (var i = 0; i < addressesData[type].length; i++)
                addAddress(map,addressesData[type][i],clickable);
        }
    }

    function addAddress(map,address,clickable){
        var icon = "/imgs/mapicons/";
        switch (address.type){
            default:
            case "ADDRESS_HOME":
                icon += "home.png";
                break;
            case "ADDRESS_WORK":
                icon += "workoffice.png"
                break;
        }
        var marker = new google.maps.Marker({map:map, position:new google.maps.LatLng(address.latitude,address.longitude), icon:icon});
        marker.showCircle = function(){
            if (marker.circle != null)
                return;
            marker.circle = new google.maps.Circle({center:marker.getPosition(),
                                                       map:map,
                                                       radius:address.radius,
                                                       fillColor:"green",
                                                       fillOpacity:0.5,
                                                       strokeOpacity:0,
                                                       clickable:false});
        }
        marker.hideCircle = function(){
            if (marker.circle == null)
                return;
            marker.circle.setMap(null);
            marker.circle = null;
        }
        if (!clickable)
            return marker;
        google.maps.event.addListener(marker, "click", function(){
            map.connectorSelected = null;
            if (map.selectedMarker != null)
                map.selectedMarker.hideCircle();
            map.selectedMarker = marker;
            map.infoWindow.setContent(address.getDetails());
            map.infoWindow.open(map,marker);
            marker.showCircle();
        });
    }

    function isDisplayable(itemType){
        var config = App.getFacetConfig(itemType);
        return config.map && !config.gps;
    }

    function addItemsToMap(map,items,clickable){
        var markerArray = new Array();
        for (var i = 0; i < items.length; i++){
            var marker = addItemToMap(map,items[i],clickable);
            if (marker != null)
                markerArray[markerArray.length] = marker;
        }
        if (markerArray.length == 0)
            markerArray = null;
        return markerArray;
    }

    //creates a marker with extended functionality
    function addItemToMap(map,item,clickable){
        var itemConfig = App.getConnectorConfig(App.getFacetConnector(item.type));
        var start = item.start;
        var end = item.end;
        if (start > map.gpsTimestamps[map.gpsTimestamps.length - 1] || (end == null && start < map.gpsTimestamps[0]))
            return;
        var marker = new google.maps.Marker({map:map, position:map.getLatLngOnGPSLine(start), icon:itemConfig.mapicon, shadow:itemConfig.mapshadow,clickable:clickable});
        map.enhanceMarkerWithItem(marker,item);
        return marker;
    }

    function addClickListenerForMarker(map,marker,item){
        google.maps.event.addListener(marker, "click", function(){
            map.connectorSelected = item.type;
            if (map.selectedMarker != null)
                map.selectedMarker.hideCircle();
            map.selectedMarker = marker;
            map.infoWindow.setContent(item.getDetails());
            map.infoWindow.open(map,marker);
            marker.doHighlighting();
            marker.showCircle();
        });

    }

    function enhanceMarkerWithItem(map,marker,item){
        if (marker._oldSetMap != null)
            return;
        marker.item = item;
        map.enhanceMarker(marker);
    }

    function enhanceMarker(map, marker, start, end){
        if (marker._oldSetMap != null)
            return;
        marker._oldSetMap = marker.setMap;
        marker.targetMap = null;
        marker.circle = null;
        var accuracy = getGPSAccuracy(map,marker.item != null ? marker.item.start : start);
        marker.showCircle = function(){
            if (marker.circle != null)
                return;
            marker.circle = new google.maps.Circle({center:marker.getPosition(),
                                                   map:map,
                                                   radius:accuracy,
                                                   fillColor:"red",
                                                   fillOpacity:0.5,
                                                   strokeOpacity:0,
                                                   clickable:false});
        }
        marker.getBounds = function(){
            return new google.maps.Circle({center:marker.getPosition(),radius:accuracy}).getBounds();
        }
        marker.hideCircle = function(){
            if (marker.circle == null)
                return;
            marker.circle.setMap(null);
            marker.circle = null;
        }
        marker.setMap = function(newMap){
            if (marker.circle != null)
                marker.circle.setMap(newMap);
            if (marker.line != null && marker.line === map.currentHighlightedLine){
                if (newMap == null){
                    map.currentHighlightedLine.setMap(null);
                }
                else if(map == newMap){
                    map.currentHighlightedLine.setMap(map);
                }
            }
            else{
                marker.line = null;
            }
            marker.targetMap = newMap;
            if (!marker.hidden)
                marker._oldSetMap(newMap);
        }
        marker.hidden = false;
        marker.hideMarker = function(){
            if (!marker.hidden){
                marker.hidden = true;
                marker._oldSetMap(null);
            }
        }
        marker.showMarker = function(){
            if (marker.hidden){
                marker.hidden = false;
                marker._oldSetMap(marker.targetMap);
            }
        }
        marker.doHighlighting = function(){
            if (map.gpsLine == null)
                return;
            if (map.currentHighlightedLine != null){
                map.currentHighlightedLine.setMap(null);
                map.currentHighlightedLine = null
            }
            if ((marker.item != null && marker.item.end != null) || end != null){
                map.currentHighlightedLine = map.createPolyLineSegment(marker.item != null ? marker.item.start : start, marker.item != null ? marker.item.end : end, {strokeColor:"orange", zIndex: 100});
                marker.line = map.currentHighlightedLine;
                if (map.gpsLine.getMap() == null)
                    map.currentHighlightedLine.setMap(null);
            }
        }
        if (marker.clickable && marker.item != null){
            addClickListenerForMarker(map,marker,marker.item);
        }
    }

    function highlightTimespan(map, start,end){
        if (map.gpsTimestamps.length == 0)
            return;
        if (map.highlightSection != null){
            map.highlightSection.setMap(null);
            map.highlightSection = null;
        }
        if (start <= map.gpsTimestamps[0] && end >= map.gpsTimestamps[map.gpsTimestamps.length - 1]){
            map.gpsLine.setOptions({strokeColor: "black"});
            return;
        }
        map.gpsLine.setOptions({strokeColor: "grey"});
        map.highlightSection = map.createPolyLineSegment(start, end, {strokeColor:"black", zIndex: 99});
    }

    function getFirstIndexAfter(map, time){
        var endIndex;
        for (endIndex = 0; endIndex < map.gpsTimestamps.length && map.gpsTimestamps[endIndex] < time; endIndex++);
        return endIndex;
    }

    function getFirstIndexBefore(map, time){
        if (time <= map.gpsTimestamps[0])
            return -1;
        var endIndex;
        for (endIndex = 1; endIndex < map.gpsTimestamps.length && map.gpsTimestamps[endIndex] < time; endIndex++);
        return endIndex - 1;
    }

    function createPolyLineSegment(map, start, end, options){
        options.map = map;
        var newPoints = new Array();
        newPoints[0] = map.getLatLngOnGPSLine(start);
        if (newPoints[0] == null)
            return null;
        var startIndex = map.getFirstIndexAfter(start);
        var endIndex = map.getFirstIndexBefore(end);
        for (var i = 0; i + startIndex <= endIndex; i++){
            newPoints[i+1] = map.gpsPositions[i+startIndex];
        }
        newPoints[newPoints.length] = map.getLatLngOnGPSLine(end);
        options.path = newPoints;
        options.clickable = false;
        return new google.maps.Polyline(options);
    }

    function getGPSAccuracy(map,time){
        if (map.gpsTimestamps.length == 0)
            return -1;
        if (time <= map.gpsTimestamps[0])
            return map.gpsAccuracies[0];
        if (map >= map.gpsTimestamps[map.gpsTimestamps.length - 1])
            return map.gpsAccuracies[map.gpsAccuracies.length - 1];

        var endIndex;
        for (endIndex = 1; endIndex < map.gpsTimestamps.length && map.gpsTimestamps[endIndex] < time; endIndex++);
        var startIndex = endIndex - 1;
        var percentThrough = (time - map.gpsTimestamps[startIndex]) / (map.gpsTimestamps[endIndex] - map.gpsTimestamps[startIndex]);
        if (isNaN(percentThrough))
            return map.gpsAccuracies[startIndex];
        return (map.gpsAccuracies[endIndex] - map.gpsAccuracies[startIndex]) * percentThrough + map.gpsAccuracies[startIndex];
    }

    function getLatLngOnGPSLine(map,time){
        if (map.gpsTimestamps.length == 0)
            return null;
        if (time <= map.gpsTimestamps[0])
            return map.gpsPositions[0];
        if (time >= map.gpsTimestamps[map.gpsTimestamps.length - 1])
            return map.gpsPositions[map.gpsPositions.length-1];
        var endIndex;
        for (endIndex = 1; endIndex < map.gpsTimestamps.length && map.gpsTimestamps[endIndex] < time; endIndex++);
        var startIndex = endIndex - 1;
        var percentThrough = (time - map.gpsTimestamps[startIndex]) / (map.gpsTimestamps[endIndex] - map.gpsTimestamps[startIndex]);

        var projection = map.getProjection();
        var startPoint = projection.fromLatLngToPoint(map.gpsPositions[startIndex]);
        var endPoint = projection.fromLatLngToPoint(map.gpsPositions[endIndex]);

        var x = (endPoint.x - startPoint.x) * percentThrough + startPoint.x;
        var y = (endPoint.y - startPoint.y) * percentThrough + startPoint.y;
        var latlng = projection.fromPointToLatLng(new google.maps.Point(x,y));
        return new google.maps.LatLng(latlng.lat(),latlng.lng());
    }

    function zoomOnTimespan(map, start,end){
        var minLat, maxLat, minLng, maxLng;
        var startPoint = map.getLatLngOnGPSLine(start);
        var endPoint = map.getLatLngOnGPSLine(end);
        if (startPoint == null || endPoint == null)
            return;
        if (startPoint.lat() < endPoint.lat()){
            minLat = startPoint.lat();
            maxLat = endPoint.lat();
        }
        else{
            minLat = endPoint.lat();
            maxLat = startPoint.lat();
        }
        if (startPoint.lng() < endPoint.lng()){
            minLng = startPoint.lng();
            maxLng = endPoint.lng();
        }
        else{
            minLng = endPoint.lng();
            maxLng = startPoint.lng();
        }

        var startIndex = map.getFirstIndexAfter(start);
        var endIndex = map.getFirstIndexBefore(end);

        for (var i = startIndex; i < endIndex; i++){
            if (map.gpsPositions[i].lat() < minLat)
                minLat = map.gpsPositions[i].lat();
            else if (map.gpsPositions[i].lat() > maxLat)
                maxLat = map.gpsPositions[i].lat();
            if (map.gpsPositions[i].lng() < minLng)
                minLng = map.gpsPositions[i].lng();
            else if (map.gpsPositions[i].lng() > maxLng)
                maxLng = map.gpsPositions[i].lng();
        }
        map.fitBounds(new google.maps.LatLngBounds(new google.maps.LatLng(minLat,minLng), new google.maps.LatLng(maxLat,maxLng)));
    }

    function zoomOnPoint(map, point){
        map.setCenter(point);
        map.setZoom(15);
    }

    function zoomOnMarker(map,marker){
        if (marker.circle == null)
            zoomOnPoint(map,marker.getPosition());
        else
            map.fitBounds(marker.circle.getBounds());
    }

    function hideData(map,connectorId){
        if (connectorId == "google_latitude"){
            map.hideGPSData();
        }
        if (!map.hasData(connectorId))
            return;
        if (map.connectorSelected == connectorId){
            map.infoWindow.close();
            map.connectorSelected = null;
        }
        for (var i = 0; i < map.markers[connectorId].length; i++){
            map.markers[connectorId][i].setMap(null);
        }
    }

    function showData(map,connectorId){
        if (connectorId == "google_latitude"){
            map.showGPSData();
        }
        if (!map.hasData(connectorId))
            return;
        for (var i = 0; i < map.markers[connectorId].length; i++){
            map.markers[connectorId][i].setMap(map);
            if (map.selectedMarker == map.markers[connectorId][i])
                map.selectedMarker.showCircle();
        }
    }

    function hasData(map,connectorId){
        return map.markers[connectorId] != null;
    }

    function isFullyInitialized(map){
        return map.getProjection() != null;
    }

    function hideGPSData(map){
        map.gpsLine.setMap(null);
        if (map.currentHighlightedLine != null)
            map.currentHighlightedLine.setMap(null);
        if (map.highlightSection != null)
            map.highlightSection.setMap(null);
    }

    function showGPSData(map){
        map.gpsLine.setMap(map);
        if (map.currentHighlightedLine != null)
            map.currentHighlightedLine.setMap(map);
        if (map.highlightSection != null)
            map.highlightSection.setMap(map);
    }

    function createMapPositionControls(map){
        var control = $("<div></div>");
        control.css("background","white");
        control.css("margin","0px 5px");
        control.css("border","1px solid rgb(113, 123, 135)");
        control.css("padding","5px");
        control.css("box-shadow","rgba(0, 0, 0, 0.398438) 0px 2px 4px");
        control.css("-webkit-box-shadow","rgba(0, 0, 0, 0.398438) 0px 2px 4px");
        control.css("width","84px");
        var fitButton = $('<button class="btnList btn btnListChecked enabled">Fit to View</button>');
        fitButton.css("margin-bottom","0.5em");
        var container = $("<div></div>")
        var preserveView = $('<input type="checkbox">');
        preserveView.css("margin-right","0.5em");
        preserveView.css("float","left");

        control.append(fitButton);
        container.append(preserveView);
        container.append("Preserve View");
        control.append(container);
        fitButton.click(function(){
            map.fitBounds(map.gpsBounds);
        });
        map.preserveViewCheckbox = preserveView;
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(control[0]);
        map._preserveViewBtn = preserveView[0];

        preserveView.click(function(){
            if (map.preserveViewCheckboxChanged != null)
                map.preserveViewCheckboxChanged();
        });

        map.isPreserveViewChecked = function(){
            return map._preserveViewBtn.checked;
        }

        map.setPreserveView = function(isSet){
            map._preserveViewBtn.checked = isSet;
        }
    }

    function showNoGPSDisplay(map){
        map.noGPSDiv = $("<div id='nogeolocation' style='background:white;'>No Geolocation Data Available</div>");
        map.controls[google.maps.ControlPosition.TOP].push(map.noGPSDiv[0]);
    }

    function fixZooming(map,zoomLevel,isPreserved){
        if (!map.isFullyInitialized()){
            $.doTimeout(100,function(){
                fixZooming(map,zoomLevel,isPreserved);
            });
            return;
        }
        if (map.getZoom() > 16 && !isPreserved)
            map.setZoom(16);
        if (isPreserved)
            map.setZoom(map.getZoom()+1);
    }

    return {
        isDisplayable: isDisplayable,
        newMap: function(center,zoom,divId,hideControls){ //creates and returns a google map with extended functionality
            var options = {
                zoom : zoom,
                center: center,
                scrollwheel : true,
                streetViewControl : false,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };
            if (hideControls){
                options.disableDefaultUI = true;
            }
            var map = new google.maps.Map(document.getElementById(divId),options);
            map.infoWindow = new google.maps.InfoWindow();
            map.currentHighlightedLine = null;
            map.highlightSection = null;
            map.connectorSelected = null;
            map.selectedMarker = null;
            map.gpsPosiitons = [];
            map.gpsTimestamps = [];
            map.gpsAccuracies = [];
            map.gpsBounds = null;
            map.markers = {};
            map.addGPSData = function(gpsData,clickable){addGPSData(map,gpsData,clickable)};
            map.addData = function(connectorData, connectorInfoId,clickable){return addData(map,connectorData, connectorInfoId,clickable)};
            map.addAddresses = function(addresses,clickable){addAddresses(map,addresses,clickable)}
            map.getLatLngOnGPSLine = function(time){return getLatLngOnGPSLine(map,time)};
            map.createPolyLineSegment = function(start,end,options){return createPolyLineSegment(map,start,end,options)};
            map.getFirstIndexAfter = function(time){return getFirstIndexAfter(map,time)};
            map.getFirstIndexBefore = function(time){return getFirstIndexBefore(map,time)};
            map.zoomOnTimespan = function(start,end){zoomOnTimespan(map,start,end)};
            map.highlightTimespan = function(start,end){highlightTimespan(map,start,end)};
            map.showData = function(connectorId){showData(map,connectorId)};
            map.hideData = function(connectorId){hideData(map,connectorId)};
            map.hasData = function(connectorId){return hasData(map,connectorId)};
            map.showGPSData = function(){showGPSData(map)};
            map.hideGPSData = function(){hideGPSData(map)};
            map.addItem = function(item,clickable){return addItemToMap(map,item,clickable)};
            map.zoomOnPoint = function(point){zoomOnPoint(map,point)};
            map.zoomOnMarker = function(marker){zoomOnMarker(map,marker)};
            map.enhanceMarker = function(marker,start,end){enhanceMarker(map,marker,start,end)};
            map.enhanceMarkerWithItem = function(marker,item){enhanceMarkerWithItem(map,marker,item)};
            map.isFullyInitialized = function(){return isFullyInitialized(map)};
            map.isPreserveViewChecked = function(){return false;}
            map._oldFitBounds = map.fitBounds;
            map.fitBounds = function(bounds,isPreservedView){
                if (bounds == null)
                    return;
                map._oldFitBounds(bounds);
                var zoomLevel = map.getZoom();
                fixZooming(map,zoomLevel,isPreservedView);
            }
            if (!hideControls){
                createMapPositionControls(map);
            }
            showNoGPSDisplay(map);
            return map;
        }
    }
});