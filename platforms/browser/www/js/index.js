var app = {

	data: {
		"volunteer-stats-age-bar": {
			"fhood": [[30, 26], [40, 32]],
			"hadallat": [[20, 13], [30, 22]],
			"rukban": [[12, 16], [8, 14]],
			"zaatari": [[40, 36], [30, 28]]
		},
		"volunteer-stats-attendance": {
			"fhood": [[30, 26, 12, 56, 20, 36, 80], [40, 32, 12, 47, 78, 46, 80]],
			"hadallat": [[12, 32, 44, 56, 47, 68, 64], [30, 26, 12, 56, 20, 36, 40]],
			"rukban": [[30, 26, 12, 56, 20, 36, 80], [23, 32, 34, 25, 40, 47, 33]],
			"zaatari": [[40, 32, 12, 47, 78, 46, 80], [18, 26, 28, 33, 27, 33, 27]]
		},
		"volunteer-stats-aspirations": {
			"fhood": [30, 26, 12, 56, 20],
			"hadallat": [12, 32, 44, 56, 47],
			"rukban": [30, 16, 48, 23, 36],
			"zaatari": [40, 32, 12, 47, 78]
		}
	},

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
    	var _this = this;
    	$('#splash').on('click', function() { _this.hideSplash(); });
    	$('.fa-bars').on('click', function() { $('.page').fadeOut(); _this.showMenu(); });
    	$('.fa-arrow-left').on('click', function() { _this.showSubpage(_this.previous); });

    	$('#micon-student').on('click', function() { $('.page').hide(); _this.showStudent(); _this.hideMenu(); });
    	$('#micon-volunteer').on('click', function() { $('.page').hide(); _this.showVolunteer(); _this.hideMenu(); });
    	$('#micon-support').on('click', function() { $('.page').hide(); _this.showSupport(); _this.hideMenu(); });
    	$('#micon-emergency').on('click', function() { $('.page').hide(); _this.showEmergency(); _this.hideMenu(); });

    	$('#micon-volunteer-stats').on('click', function() { _this.previous = 'volunteer'; _this.showVolunteerStats(); _this.updateVolunteerStats('fhood'); _this.hideSubpage('volunteer'); });
    	$('#volunteer-stats select').on('change', function() { var loc = $('#volunteer-stats select').val(); _this.updateVolunteerStats(loc); });

    	$('#emergency-send').on('click', function() { _this.sendEmergencyMessage(); });
    },

    hideSplash: function() {
        $('#splash').hide('slide', { direction: 'left' }, 600);
    },

    showMenu: function() {
    	this.showSubpage('menu');
    },

    showSubpage: function(id) {
    	$('#' + id).animate({
    		marginTop: '0'
    	}, 400);
    },

    hideMenu: function() {
    	this.hideSubpage('menu');
    },

    hideSubpage: function(id) {
    	$('#' + id).animate({
    		marginTop: '-736px'
    	}, 600);
    },

    showEmergency: function() {
    	$('#emergency').show();
    	$('#emergency-text').focus();
    },

    showVolunteer: function() {
    	$('#volunteer').show();
    },

    showVolunteerStats: function() {
    	$('#volunteer-stats').show();
    },

    updateVolunteerStats: function(loc) {
    	var d1 = this.data["volunteer-stats-age-bar"][loc];
    	var c1 = document.getElementById("volunteer-stats-age-bar");
    	new Chart(c1, {
			type: 'bar',
			data: {
				labels: ["5-10", "10-15"],
				datasets: [{
					label: "Female",
					backgroundColor: "rgb(255, 99, 132)",
					data: d1[0]
				}, {
					label: "Male",
					backgroundColor: "rgb(54, 162, 235)",
					data: d1[1]
				}]
			},
			options: {
				legend: {
					display: true
				},
				title: {
					display: true,
					text: 'Age Groups'
				},
			    scales: {
			        yAxes: [{
			            ticks: {
			                beginAtZero: true
			            }
			        }]
			    }
			}
		});

    	var d2 = this.data["volunteer-stats-attendance"][loc];
    	var c2 = document.getElementById("volunteer-stats-attendance");
    	new Chart(c2, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Female",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: d2[0],
                    fill: false,
                }, {
                    label: "Male",
                    fill: false,
                    backgroundColor: "rgb(54, 162, 235)",
                    borderColor: "rgb(54, 162, 235)",
                    data: d2[1],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Monthly Attendance'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage'
                        }
                    }]
                }
            }
        });

    	var d3 = this.data["volunteer-stats-aspirations"][loc];
    	var c3 = document.getElementById("volunteer-stats-aspirations");
    	new Chart(c3, {
    	    type: 'doughnut',
    	    data: {
    	      labels: ["Arts", "Engineering", "Law", "Mathematics", "Medicine"],
    	      datasets: [{
    	          label: "Population",
    	          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#e67e22"],
    	          data: d3
    	      }]
    	    },
    	    options: {
    	      title: {
    	        display: true,
    	        text: 'Student Aspirations'
    	      }
    	    }
    	});
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
