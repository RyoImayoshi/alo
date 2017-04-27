/* (c) 2017 Messagewall Inc. */
/**
 * IdeaDetailComment画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	module.controller("WallIdeaDetailCommentCtrl", [
		"ExperiencerData", function(ExperiencerData) {
			
		this.popWallIdeaDetailComment = function() {
			wallNavi.popPage({animation: 'lift'});
		};
	}]);
	
})();