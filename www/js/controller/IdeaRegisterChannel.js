/* (c) 2017 Messagewall Inc. */
/**
 * IdeaRegisterChannel画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("IdeaRegisterChannelCtrl", [
		"ExperiencerData", function(ExperiencerData) {
			
		this.popIdeaRegisterChannel = function() {
			indexNavi.popPage({animation: 'slide'});
		};
	}]);
	
})();