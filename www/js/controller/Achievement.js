/* (c) 2017 Messagewall inc. */
/**
 * Achievement画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
		
	module.controller("AchievementCtrl", function() {

		this.achievementList =
		[
			{
				achievementId:'1',
				achievementCd:'0001',
				medalIcon:'zmdi-account-add',
				achievementTitle:'スタートライン',
				achievementDetail:'初めてログインする',
			},
			{
				achievementId:'2',
				achievementCd:'0002',
				medalIcon:'zmdi-comment-edit',
				achievementTitle:'アイデアマン',
				achievementDetail:'初めてアイデアを投稿する',
			},
			{
				achievementId:'3',
				achievementCd:'0003',
				medalIcon:'zmdi-comment-edit',
				achievementTitle:'アイデアマン',
				achievementDetail:'アイデアを3回投稿する',
			}			
		];
		this.popAchievement = function() {
			profileNavi.popPage({animation: 'lift'});
		};
	});

})();