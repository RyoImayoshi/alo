/* (c) 2017 Messagewall Inc. */
/**
 * IdeaRegisterIntro画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("IdeaRegisterCtrl", [
		"ExperiencerData", function(ExperiencerData) {

		this.pushIdeaRegisterChannel = function() {
			indexNavi.bringPageTop(viewIdea + 'idea_register_channel.html', {animation: 'slide'});
		};
		this.pushIdeaRegisterText = function() {
			indexNavi.bringPageTop(viewIdea + 'idea_register_text.html', {animation: 'slide'});
		};
		this.registerIdea = function() {
			createDialog(messageMap.get('IDEA_REGISTER_COMPLETE'), true);
			$(document).one('posthide', function(event) {
				indexNavi.popPage({animation: 'lift'});
			});
		};
		this.popIdeaRegister = function() {
			indexNavi.popPage({animation: 'lift'});
		};
	}]);
	
})();
