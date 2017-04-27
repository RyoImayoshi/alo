/* (c) 2017 Messagewall inc. */
/**
 * ProfileStarter画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("ProfileStarterCtrl", function() {
		this.popYou = function() {
			activeNavi().popPage({animation: 'slide'})
		};
	});
	
})();
