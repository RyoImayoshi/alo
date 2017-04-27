/* (c) 2017 Messagewall inc. */
/**
 * TopIntro画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){

	module.controller("TopIntroCtrl", function() {
		this.popTopIntro = function() {
			var navi = activeNavi();
			if (navi != '') {
				navi.popPage({animation: 'lift'});
			}
		};
	});
	
})();

function popoverTargetRegister() {
	var popoverPromise = Promise.resolve();
	popoverPromise
	.then(function() {
		document.getElementById('dial').showItems();
		setTimeout(function() {
			return showTargetRegisterPopover();
		}, 500);
	})
	.then(function() {
		setTimeout(function() {
			return hideTargetRegisterPopover();
		}, 2000);
	})
	.then(function() {
		setTimeout(function() {
			return hideSpeedDialItems();
		}, 2000);
	})
}

function showTargetRegisterPopover() {
	showPopover('popover', 'targetRegisterIdea', 'left', false);
}
function hideTargetRegisterPopover() {
	hidePopover('popover');
}
function hideSpeedDialItems() {
	document.getElementById('dial').hideItems();
}
