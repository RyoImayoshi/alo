/* (c) 2017 Messagewall inc. */
/**
 * SettingName画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	module.controller("SettingNameCtrl", function() {	
		this.modifyNameLabel = 'Ryo Imayoshi';
		this.modifyName = function() {
			createDialog(messageMap.get('SETTING_MODIFY_COMPLETE'), true);
			$(document).one('posthide', function(event) {
				indexNavi.popPage({animation: 'slide'});
			});
		};
		this.popSettingName = function() {
			indexNavi.popPage({animation: 'slide'});
		};
	});
})();

var onClickHandler = function(){
    document.getElementById('modifyNameInput').focus();
}
$(document).on('click', onClickHandler);
