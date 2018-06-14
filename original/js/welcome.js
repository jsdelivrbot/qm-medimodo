// ==== JSTZ time zone code ====

var jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return a!==null?a:0},d=function(){return b(new Date(2010,0,1,0,0,0,0))},e=function(){return b(new Date(2010,5,1,0,0,0,0))},c=function(){var a=d(),b=e(),f=d()-e();if(f<0)return a+",1";else if(f>0)return b+",1,s";return a+",0"};return{determine_timezone:function(){var a=c();return new jstz.TimeZone(jstz.olson.timezones[a])},date_is_dst:function(a){var c=a.getMonth()>5?e():d(),a=b(a);return c-a!==0}}}();jstz.TimeZone=function(){var b=null,d=null,e=null,c=function(a){e=a[0];b=a[1];d=a[2];if(typeof jstz.olson.ambiguity_list[b]!=="undefined")for(var a=jstz.olson.ambiguity_list[b],c=a.length,f=0,g=a[0];f<c;f+=1)if(g=a[f],jstz.date_is_dst(jstz.olson.dst_start_dates[g])){b=g;break}};c.prototype={constructor:jstz.TimeZone,name:function(){return b},dst:function(){return d},offset:function(){return e}};return c}();jstz.olson={};
jstz.olson.timezones=function(){return{"-720,0":["-12:00","Etc/GMT+12",!1],"-660,0":["-11:00","Pacific/Pago_Pago",!1],"-600,1":["-11:00","America/Adak",!0],"-660,1,s":["-11:00","Pacific/Apia",!0],"-600,0":["-10:00","Pacific/Honolulu",!1],"-570,0":["-09:30","Pacific/Marquesas",!1],"-540,0":["-09:00","Pacific/Gambier",!1],"-540,1":["-09:00","America/Anchorage",!0],"-480,1":["-08:00","America/Los_Angeles",!0],"-480,0":["-08:00","Pacific/Pitcairn",!1],"-420,0":["-07:00","America/Phoenix",!1],"-420,1":["-07:00","America/Denver",!0],"-360,0":["-06:00","America/Guatemala",!1],"-360,1":["-06:00","America/Chicago",!0],"-360,1,s":["-06:00","Pacific/Easter",!0],"-300,0":["-05:00","America/Bogota",!1],"-300,1":["-05:00","America/New_York",!0],"-270,0":["-04:30","America/Caracas",!1],"-240,1":["-04:00","America/Halifax",!0],"-240,0":["-04:00","America/Santo_Domingo",!1],"-240,1,s":["-04:00","America/Asuncion",!0],"-210,1":["-03:30","America/St_Johns",!0],"-180,1":["-03:00","America/Godthab",!0],"-180,0":["-03:00","America/Argentina/Buenos_Aires",!1],"-180,1,s":["-03:00","America/Montevideo",!0],"-120,0":["-02:00","America/Noronha",!1],"-120,1":["-02:00","Etc/GMT+2",!0],"-60,1":["-01:00","Atlantic/Azores",!0],"-60,0":["-01:00","Atlantic/Cape_Verde",!1],"0,0":["00:00","Etc/UTC",!1],"0,1":["00:00","Europe/London",!0],"60,1":["+01:00","Europe/Berlin",!0],"60,0":["+01:00","Africa/Lagos",!1],"60,1,s":["+01:00","Africa/Windhoek",!0],"120,1":["+02:00","Asia/Beirut",!0],"120,0":["+02:00","Africa/Johannesburg",!1],"180,1":["+03:00","Europe/Moscow",!0],"180,0":["+03:00","Asia/Baghdad",!1],"210,1":["+03:30","Asia/Tehran",!0],"240,0":["+04:00","Asia/Dubai",!1],"240,1":["+04:00","Asia/Yerevan",!0],"270,0":["+04:30","Asia/Kabul",!1],"300,1":["+05:00","Asia/Yekaterinburg",!0],"300,0":["+05:00","Asia/Karachi",!1],"330,0":["+05:30","Asia/Kolkata",!1],"345,0":["+05:45","Asia/Kathmandu",!1],"360,0":["+06:00","Asia/Dhaka",!1],"360,1":["+06:00","Asia/Omsk",!0],"390,0":["+06:30","Asia/Rangoon",!1],"420,1":["+07:00","Asia/Krasnoyarsk", !0],"420,0":["+07:00","Asia/Jakarta",!1],"480,0":["+08:00","Asia/Shanghai",!1],"480,1":["+08:00","Asia/Irkutsk",!0],"525,0":["+08:45","Australia/Eucla",!0],"525,1,s":["+08:45","Australia/Eucla",!0],"540,1":["+09:00","Asia/Yakutsk",!0],"540,0":["+09:00","Asia/Tokyo",!1],"570,0":["+09:30","Australia/Darwin",!1],"570,1,s":["+09:30","Australia/Adelaide",!0],"600,0":["+10:00","Australia/Brisbane",!1],"600,1":["+10:00","Asia/Vladivostok",!0],"600,1,s":["+10:00","Australia/Sydney",!0],"630,1,s":["+10:30",  "Australia/Lord_Howe",!0],"660,1":["+11:00","Asia/Kamchatka",!0],"660,0":["+11:00","Pacific/Noumea",!1],"690,0":["+11:30","Pacific/Norfolk",!1],"720,1,s":["+12:00","Pacific/Auckland",!0],"720,0":["+12:00","Pacific/Tarawa",!1],"765,1,s":["+12:45","Pacific/Chatham",!0],"780,0":["+13:00","Pacific/Tongatapu",!1],"840,0":["+14:00","Pacific/Kiritimati",!1]}}();
jstz.olson.dst_start_dates=function(){return{"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)}}();
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza,Asia/Beirut,Europe/Minsk,Europe/Helsinki,Europe/Istanbul,Asia/Damascus,Asia/Jerusalem,Africa/Cairo".split(","),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};


// ==== Suicide counter ====

var secondsBetweenSuicides = 45;

var suicideCountLabel = $("label[for='suicide-counter']");
var suicideCount = Math.floor(((new Date()).getTime() - 1343779200000) / (secondsBetweenSuicides*1000)); // 1343779200000 is August 1st.

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function startSuicideCounter() {
    updateSuicideCounter(suicideCount);
    setInterval(function () { updateSuicideCounter(++suicideCount); }, secondsBetweenSuicides*1000);
}

function updateSuicideCounter(suicideCount) {
    suicideCountLabel.text(numberWithCommas(suicideCount));
}




// ==== Blinking "Perfect Your Life" animation ====

var blinkTime = 130;

var blinkButton = $('.optimize-button');
var blinkFrameNames = ['first', 'second', 'third', 'fourth', 'fifth'];

var blinkFrame = 0;
var blinkTimer;

function startBlinking() {
    blinkTimer = setInterval(function() {
            blinkButton.removeClass(blinkFrameNames[blinkFrame]);
            blinkFrame = (blinkFrame + 1) % blinkFrameNames.length;
            blinkButton.addClass(blinkFrameNames[blinkFrame]);
        }, blinkTime);
}

function stopBlinking() {
    clearInterval(blinkTimer);
}

blinkButton.hover(stopBlinking, startBlinking);



var centerModel = {
    'margin-left': function () {
        return -($(this).width() / 2);
    }
}




var params = {};

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

$(document).ready(function() {
    // Start the suicide counter
    startSuicideCounter();
    
    // Start the "Perfect Your Life" blinking animation
    startBlinking();
    
    // Turn on the mouse-hovering thought bubbles for the Giant Heads
    $('.bubble-text').each(function() {
        $(this).qtip({
            content: $(this).attr('data-content'),
            position: {
                my: 'bottom center',
                at: 'top center'
                //target: 'mouse',
                //target: 'bottomRight',
                /*adjust: { y: -150 }*//*,
                container: $("#main-info")*/
            },
            style:'bigbooble'
        });
    });
    
    // Set up the login and register buttons
    $("#loginShow").click(showLogin);
    $("#registerShow").click(createAccount);
    
    var timezone = jstz.determine_timezone(),
        d = new Date(),
        currentDay = d.getDate(),
        currentMonth = d.getMonth() + 1,
        currentYear = d.getFullYear();
    setCookie("timeZone", timezone.name(), 1);
    setCookie("date", currentYear + "-" + currentMonth + "-" + currentDay, 1);
    
    if (typeof params["username"] != "undefined") {
        $("#loginFailedModal").modal().css(centerModel);
    }
    else if (typeof params["subscribed"] != "undefined") {
        $("#subscribedModal").modal().css(centerModel);
    }
});

function submitCreateAccountForm() {
    $.ajax({
        url:"/createAccount",
        type: "POST",
        data: {
            email: $("input#email").val(),
            password1: $("input#password").val(),
            password2: $("input#password2").val(),
            username: $("input#username").val(),
            firstname: $("input#firstname").val(),
            lastname: $("input#lastname").val()
        }, 
        success: function(html) {
            $(".modal-backdrop").remove();
            $("#registerModal").replaceWith(html);
            $("#registerModal").modal("show").css(centerModel);
            $("#submitCreateAccountForm").click(submitCreateAccountForm);
        }
    });
}

function submitVerifyCredentialsForm() {
    $.ajax({
        url:"/oauth/accountVerified",
        type: "POST",
        data: {
            email: $("input#email").val(),
            username: $("input#username").val(),
            firstname: $("input#firstname").val(),
            lastname: $("input#lastname").val(),
            providerId: $("input#providerId").val(),
            validatedId: $("input#validatedId").val()
        },
        success: function(html) {
            $(".modal-backdrop").remove();
            $("#verifyModal").replaceWith(html);
            $("#verifyModal").modal("show").css(centerModel);
            $("#submitVerifyCredentialsForm").click(submitVerifyCredentialsForm);
        }
    });
}

function createAccount() {
    $.ajax({
        url: "/createAccountForm",
        success: function(html) {
            $("#registerModalWrapper").empty();
            $("#registerModalWrapper").append(html);
            $("#registerModalWrapper").css("display", "block");
            $("#registerModal").modal("show").css(centerModel);
            $("#submitCreateAccountForm").click(submitCreateAccountForm);
        }
    });
}

function showLogin() {
    $.ajax({
        url: "/login",
        success: function(html) {
            $("#loginModalWrapper").empty();
            $("#loginModalWrapper").append(html);
            $("#loginModalWrapper").css("display", "block");
            $("#loginModal").modal("show").css(centerModel);
	    $('#f_username').focus();
            $('#registerAccount').click(function() {
                $("#loginModal").hide()
                $(".modal-backdrop").remove();
                createAccount();
                return false;
            });
            $('#lostPasswdLink').click(function() {
                $('#loginForm').hide();
                $('#recoverForm').show();//.css(centerModel);
                $('#recoverForm').submit(function() { $(this).ajaxSubmit({success: handleRecoverCallback }); return false; });
                $('#recover_email').focus();
                return false;
            });
        }
    });
}

function showVerification() {
    $.ajax({
        url: "/oauth/verifyOauthAccount",
        success: function(html) {
            $("#verifyModalWrapper").empty();
            $("#verifyModalWrapper").append(html);
            $("#verifyModalWrapper").css("display", "block");
            $("#verifyModal").modal("show").css(centerModel);
            $("#submitVerifyCredentialsForm").click(submitVerifyCredentialsForm);
        }
    });
}
`
