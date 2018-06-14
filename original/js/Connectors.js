define(function() {
	
	var Connectors = {};
	
	function submitMymeeFetchURL() {
		var fetchURL = $("input#mymee-fetchURL").val();
		$.ajax({
			url:"/mymee/setFetchURL",
			type: "POST",
			data: {url: fetchURL},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}

    function submitNikePlusCredentials() {
        var username = $("input#nikeplus-username").val();
        $.ajax({
            url:"/nikeplus/setUsername",
            type: "POST",
            data: {username: username},
            success: function(html) {
                $(".addConnectorsMain").html(html);
                $(".focushere").focus();
            }
        });
    }

    function getQuantifiedMindToken() {
        $.ajax({
            url: "http://quantifiedmind.com/authenticate/get_token",
            success: function(data) {
                try {
                    var jsonToken = JSON.parse(data);
                    setQuantifiedMindToken(jsonToken.token);
                } catch (err) {
                    quantifiedMindLogin();
                }
            }
        });
    }

    function setQuantifiedMindToken(token) {
        $.ajax({
            url:"/quantifiedmind/setToken",
            data: { token: token },
            type: "POST",
            success: function(html) {
                $(".addConnectorsMain").html(html);
            },
            error: function() {
                alert("There was an error");
            }
        });
    }

    function quantifiedMindLogin() {
        $.ajax({
            url:"/quantifiedmind/login",
            success: function(html) {
                $(".addConnectorsMain").html(html);
            },
            error: function() {
                alert("There was an error");
            }
        });
    }

	function submitToodledoCredentials() {
		var username = $("input#toodledo-username").val(),
			password = $("input#toodledo-password").val();
		$.ajax({
			url:"/toodledo/submitCredentials",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}
	function submitMyFitnessPalCredentials() {
		var username = $("input#myfitnesspal-username").val(),
			password = $("input#myfitnesspal-password").val();
		$.ajax({
			url:"/myfitnesspal/submitCredentials",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}
	function submitLumosityCredentials() {
		var username = $("input#lumosity-username").val(),
			password = $("input#lumosity-password").val();
		$.ajax({
			url:"/lumosity/submitCredentials",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}
	function submitMoodscopeCredentials() {
		var username = $("input#moodscope-username").val(),
			password = $("input#moodscope-password").val();
		$.ajax({
			url:"/moodscope/submitCredentials",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}
	
	function submitZeoCredentials() {
		var username = $("input#zeo-username").val(),
			password = $("input#zeo-password").val();
		$.ajax({
			url:"/zeo/submitCredentials",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}

	function submitWithingsUsernameAndPassword() {
		var username = $("input#withings-username").val(),
			password = $("input#withings-password").val();
		$.ajax({
			url:"/withings/setupWithings",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}

	function submitSmsBackupFolderNames() {
		var smsFolderName = $("input#smsBackup-smsFolderName").val(),
		callLogFolderName = $("input#smsBackup-callLogFolderName").val();
		$.ajax({
			url:"/smsBackup/setFolderNames",
			type: "POST",
			data: {smsFolderName: smsFolderName, callLogFolderName: callLogFolderName},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}

	function submitSmsBackupUsernameAndPassword() {
		var username = $("input#smsBackup-username").val(),
			password = $("input#smsBackup-password").val();
		$.ajax({
			url:"/smsBackup/check",
			type: "POST",
			data: {username: username, password: password},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}

	function chooseWithingsUser() {
        var chosenUser = $("input#withings-chosenUser:checked").val();
		$.ajax({
			url:"/withings/chooseWithingsUser",
			type: "POST",
			data: {chosenUser: chosenUser},
			success: function(html) {
				$(".addConnectorsMain").html(html);
			}
		});
	}
	
	function submitOpenPathKeypair() {
		var accessKey = $("input#openpath-accessKey").val(),
			secretKey = $("input#openpath-secretKey").val();
		$.ajax({
			url:"/openPath/check",
			type: "POST",
			data: {accessKey: accessKey, secretKey: secretKey},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	}
	
	Connectors.chooseWithingsUser = chooseWithingsUser;
	Connectors.submitSmsBackupUsernameAndPassword = submitSmsBackupUsernameAndPassword;
	Connectors.submitSmsBackupFolderNames = submitSmsBackupFolderNames;
	Connectors.submitWithingsUsernameAndPassword = submitWithingsUsernameAndPassword;
	Connectors.submitZeoCredentials = submitZeoCredentials;
	Connectors.submitToodledoCredentials = submitToodledoCredentials;
	Connectors.submitNikePlusCredentials = submitNikePlusCredentials;
    Connectors.submitMymeeFetchURL = submitMymeeFetchURL;
	Connectors.submitOpenPathKeypair = submitOpenPathKeypair;
    Connectors.getQuantifiedMindToken = getQuantifiedMindToken;
    
    Connectors.submitMoodscopeCredentials=submitMoodscopeCredentials;
    Connectors.submitLumosityCredentials=submitLumosityCredentials;
    Connectors.submitMyFitnessPalCredentials=submitMyFitnessPalCredentials;

	Connectors.submitBodytrackCredentials = function() {
		var username = $("input#bodytrack-username").val(),
		password = $("input#bodytrack-password").val(),
		host = $("input#bodytrack-host").val();
		$.ajax({
			url:"/bodytrack/submitCredentials",
			type: "POST",
			data: {username: username, password: password, host: host},
			success: function(html) {
				$(".addConnectorsMain").html(html);
				$(".focushere").focus();
			}
		});
	};
	
	window.Connectors = Connectors;
	
	return Connectors;
});