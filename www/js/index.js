var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
    	var _this = this;
    	$('#splash').on('click', function() {
    		_this.showMenu();
    	});
    },

    showMenu: function() {
        $('#splash').hide("slide", { direction: "left" }, 600);
    }

};
