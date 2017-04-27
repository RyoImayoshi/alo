/* (c) 2017 Messagewall inc. */
/**
 * ダイアログ関連のutility 
 * 
 * @author ryo-imayoshi
 */
 
/** popoverのhideSec */
var popoverHideSec = 1.5;

var showPopover = function(popoverId, targetId, d, isHide) {
  document
    .getElementById(popoverId)
    .show(document.getElementById(targetId), {direction:d});
    if (!isHide) {return;}
	setTimeout(function() {
		hidePopover(popoverId);
	}, popoverHideSec*1000);
};

var hidePopover = function(popoverId) {
  document
    .getElementById(popoverId)
    .hide();
};
