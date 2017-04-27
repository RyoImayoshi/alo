/* (c) 2017 Messagewall inc. */
/**
 * navi関連のutility 
 * 
 * @author ryo-imayoshi
 */
 
var activeNavi = function() {
	var activeTabIndex = document.getElementById('tab').getActiveTabIndex();
	var navi = '';
	if (activeTabIndex === 1) {
		navi = wallNavi;
	} else if (activeTabIndex === 2) {
		navi = channelNavi;
	} else if (activeTabIndex === 3) {
		navi = profileNavi;
	}
	return navi;
};