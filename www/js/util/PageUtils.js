/* (c) 2017 Messagewall inc. */
/**
 * ページ関連のutility 
 * 
 * @author ryo-imayoshi
 */
var dialog;

/** dialogのhideSec */
var dialogHideSec = 1.5;

function setDialogMessage(id, message) {
	var elem = document.querySelector('#' + id);
	elem.innerText = message;
}

var createDialog = function(message, isHide) {
	dialog = document.getElementById('messageDialog');
	setDialogMessage('dialogMessage', message);
	dialog.show();
	setTimeout(function() {
		dialog.hide();
	}, dialogHideSec*1000);
};
