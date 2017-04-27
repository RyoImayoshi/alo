/* (c) 2017 Messagewall inc. */
/**
 * Top画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){

	module.controller("TopCtrl", function() {
		indexNavi = document.getElementById('mwNavi');
		this.pushTopMain = function() {
			indexNavi.bringPageTop(viewRoot + 'top_main.html', {animation: 'fade'});
		};
	});
	
})();