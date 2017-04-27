/* (c) 2017 Messagewall Inc. */
/**
 * IdeaRegisterText画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
 var ta;
(function(){
	
	module.controller("IdeaRegisterTextCtrl", [
		"ExperiencerData", function(ExperiencerData) {

		this.popIdeaRegisterText = function() {
			indexNavi.popPage({animation: 'slide'});
		};
	}]);
	
})();