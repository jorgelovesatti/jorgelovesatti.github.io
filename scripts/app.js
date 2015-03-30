var app = angular.module("app",[]);

app.controller("appController", function(){
	var ctrl = this;

	ctrl.panels = data;

	ctrl.goTo = function( id ){
		var newPanelId 	= (id+1),
			newPanel 	= jQuery("#panel-"+newPanelId); 

		if( !(newPanel.length) ){
			newPanel 	= jQuery("#panel-"+0); 
		}

		jQuery('html, body').animate({
		        scrollTop: newPanel.offset().top
		}, 1000 );
	}

	ctrl.goBack = function( id ){
		var newPanelId 	= (id-1),
			newPanel 	= jQuery("#panel-"+newPanelId); 

		if( !(newPanel.length) ){
			newPanel 	= jQuery("#panel-"+0); 
		}

		jQuery('html, body').animate({
		        scrollTop: newPanel.offset().top
		}, 1000 );
	}


});