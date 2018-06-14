define(["applications/calendar/tabs/clock/ClockConfig"],function(ClockConfig){
    ClockConfig = ClockConfig.getConfig();


    //TODO: configure default channels for each connector
    return {
        default:{
            color: "",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {}
        },
        fitbit:{
            color: "#21b5cf",
            mapicon: "/imgs/mapicons/aed-2.png",
            mapshadow: null,
            facets:{
                activity_summary:{
                    list: true,
                    photos: false,
                    map: false,
                    gps: false,
                    clock: null
                },
                logged_activity:{
                    list: true,
                    photos: false,
                    map: false,
                    gps: false,
                    clock: null
                },
                weight:{
                    list: true,
                    photos: false,
                    map: false,
                    gps: false,
                    clock: ClockConfig.BODY_CATEGORY
                },
                sleep:{
                    list: true,
                    photos: false,
                    map: false,
                    gps: false,
                    clock: ClockConfig.BODY_CATEGORY
                }
            }
        },
        bodyTrack:{
            color: "#c79409",
            mapicon: null,
            mapshadow: null,
            facets:{}
        },
        lastfm:{
            color: "rgb(253, 73, 56)",
            mapicon: "/imgs/mapicons/music.png",
            mapshadow: null,
            facets:{
                recent_track:{
                    list:true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.MEDIA_CATEGORY
                },
                loved_track:{
                    list:true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.MEDIA_CATEGORY
                }
            }
        },
        withings:{
            color: "#16924e",
            mapicon: "/imgs/mapicons/medicalstore.png",
            mapshadow: null,
            facets:{
                blood_pressure:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: null,
                    clock: ClockConfig.BODY_CATEGORY
                },
                weight:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.BODY_CATEGORY
                }
            }
        },
        picasa:{
            color: "#8c2ebb",
            mapicon: "/imgs/mapicons/photo.png",
            mapshadow: null,
            facets:{
                photo:{
                    list:true,
                    photos: true ,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                }
            }
        },
        runkeeper:{
            color: "#8c2ebb",
            mapicon: "/imgs/mapicons/cup.png",
            mapshadow: null,
            facets:{
                "fitnessActivity":{
                    list:true,
                    map: true,
                    clock: ClockConfig.BODY_CATEGORY
                }
            }
        },
        twitter:{
            color: "rgb(146, 51, 239)",
            mapicon: "/imgs/mapicons/tweet.png",
            mapshadow: null,
            facets:{
                tweet:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                },
                dm:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                },
                mention:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                }
            }
        },
        google_calendar:{
            color: "rgb(146, 218, 70)",
            mapicon: "/imgs/mapicons/calendar-3.png",
            mapshadow: null,
            facets:{
                entry:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.MIND_CATEGORY
                }
            }
        },
        google_latitude:{
            color: "rgb(92, 174, 92)",
            mapicon : new google.maps.MarkerImage("https://www.google.com/latitude/apps/static/red_measle.png",null,null,new google.maps.Point(5,5),null),
            mapshadow: null,
            facets:{
                location:{
                    list: false,
                    photos: false,
                    map: true,
                    gps: true,
                    clock: true //just has to be nonnull, gps data has special treatment
                }
            }
        },
        bodymedia:{
            color: "rgb(160, 67, 175)",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {
                burn:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: null
                },
                sleep:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: null
                },
                steps:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: null
                }
            }
        },
        flickr:{
            color: "rgb(255, 0, 132)",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {
                photo:{
                    list:true,
                    photos: true,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                }
            }
        },
        sms_backup:{
            color: "",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {
                call_log:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                },
                sms:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.SOCIAL_CATEGORY
                }
            }
        },
        zeo:{
            color: "rgb(255, 178, 0)",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {
                sleep:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.BODY_CATEGORY
                }
            }
        },
        toodledo:{
            color: "",
            mapicon: "http://maps.google.com/mapfiles/marker.png",
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets: {
                task:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: ClockConfig.MIND_CATEGORY
                },
                goal:{
                    list: true,
                    photos: false,
                    map: true,
                    gps: false,
                    clock: null
                }
            }
        },
        openpath:{
            color: "",
            mapicon : new google.maps.MarkerImage("https://www.google.com/latitude/apps/static/red_measle.png",null,null,new google.maps.Point(5,5),null),
            mapshadow: null,
            facets: {
                location:{
                    list: false,
                    photos: false,
                    map: true,
                    gps: true,
                    clock: true //just has to be nonnull, gps data has special treatment
                }
            }
        },
        quantifiedmind: {
            filterLabel: "QuantMind",
            color : "rgb(20,20,20)",
            mapicon :new google.maps.MarkerImage("https://www.google.com/latitude/apps/static/red_measle.png",null,null,new google.maps.Point(5,5),null),
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets : {
                test : {
                    list : true,
                    photos : false,
                    map : true,
                    gps : false,
                    clock : ClockConfig.BODY_CATEGORY
                }
            }
        },
        github: {
            color : "rgb(5,5,5)",
            mapicon :new google.maps.MarkerImage("https://www.google.com/latitude/apps/static/red_measle.png",null,null,new google.maps.Point(5,5),null),
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets : {
                push : {
                    list : true,
                    photos : false,
                    map : true,
                    gps : false,
                    clock : ClockConfig.SOCIAL_CATEGORY
                }
            }
        },
        mymee: {
            filterLabel: "Mymee",
            color : "rgb(5,5,5)",
            mapicon :new google.maps.MarkerImage("https://www.google.com/latitude/apps/static/red_measle.png",null,null,new google.maps.Point(5,5),null),
            mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
            facets : {
                observation : {
                    list : true,
                    photos : false,
                    map : true,
                    gps : false,
                    clock : ClockConfig.BODY_CATEGORY
                }
            }
        },
        fluxtream_capture:{
                    filterLabel: "FluxtreamCap",
                    color: "rgb(204, 204, 204)",
                    mapicon: "http://maps.google.com/mapfiles/marker.png",
                    mapshadow: new google.maps.MarkerImage("http://maps.google.com/mapfiles/shadow50.png",null,null,new google.maps.Point(11,34),null),
                    facets: {
                        photo:{
                            list:true,
                            photos: true,
                            map: true,
                            gps: false,
                            clock: ClockConfig.SOCIAL_CATEGORY
                        }
                    }
                }
    }

});