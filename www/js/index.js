var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
    	var _this = this;
    	$('#splash').on('click', function() { _this.hideSplash(); });
    	$('.fa-bars').on('click', function() { $('.page').fadeOut(); _this.showMenu(); });

    	$('#micon-student').on('click', function() { $('.page').hide(); _this.showStudent(); _this.hideMenu(); });
    	$('#micon-volunteer').on('click', function() { $('.page').hide(); _this.showVolunteer(); _this.hideMenu(); });
    	$('#micon-support').on('click', function() { $('.page').hide(); _this.showSupport(); _this.hideMenu(); });
    	$('#micon-emergency').on('click', function() { $('.page').hide(); _this.showEmergency(); _this.hideMenu(); });

    	$('#emergency-send').on('click', function() { _this.sendEmergencyMessage(); });
    },

    hideSplash: function() {
        $('#splash').hide('slide', { direction: 'left' }, 600);
    },

    showMenu: function() {
    	$('#menu').animate({
    		marginTop: '0'
    	}, 400);
    },

    hideMenu: function() {
    	$('#menu').animate({
    		marginTop: '-736px'
    	}, 600);
    },

    showEmergency: function() {
    	$('#emergency').show();
    	$('#emergency-text').focus();
    },

    sendEmergencyMessage: function() {
    	var text = $('#emergency-text').val();
    	$('#emergency-text').val('').focus();
    	var d = $('<div style="clear: both;margin-top: 10px;float: left;"></div>')[0];
    	d.innerHTML = '<div style="float: left;margin-right: 10px;font-size: 16pt;width: 260px;background-color: #ecf0f1;color: black;border-radius: 10px;padding: 3px 10px;">' + text + '</div><div style="float: left;"><img src="img/lehman.jpg" style="border-radius: 30px; width: 60px; height: 60px;" /></div>';
    	$('#emergency-messages').append(d);
    	setTimeout(function(){
    		var d = $('<div style="clear: both;margin-top: 10px;float: left;"></div>')[0];
    		d.innerHTML = '<div style="float: left;"><img src="img/operator.jpg" style="border-radius: 30px; width: 60px; height: 60px;" /></div><div style="float: left;margin-left: 10px;font-size: 16pt;width: 260px;background-color: #ecf0f1;color: black;border-radius: 10px;padding: 3px 10px;">Oh, I\'m sorry. Don\'t worry, help is on your way.</div>';
    		$('#emergency-messages').append(d);
    	}, 1000);
    }

};
