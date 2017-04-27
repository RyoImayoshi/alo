/* (c) 2017 Messagewall inc. */
/**
 * app.js
 * 
 * 直接onsenui系ファイルに手を入れている箇所
 * Hammer.gestures.Swipe.defaults.swipeVelocityX = 0.6 → 0.01
 * 
 * @author ryo-imayoshi
 */

var module, indexNavi, wallNavi, channelNavi, profileNavi, tabbar;

/** Path */
var viewRoot = 'view/mw/';
var viewIdea = viewRoot + 'idea/';
var viewChannel = viewRoot + 'channel/';
var viewProfile = viewRoot + 'profile/';
var viewSetting = viewRoot + 'setting/';
var viewWall = viewRoot + 'wall/';
var viewNavi = viewRoot + 'navi/';

(function(){
	
	"use strict";
	module = ons.bootstrap('mwOnsApp', ['onsen']);

	/* risize-textarea directive */
	module.directive("resizeTextarea", function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				if(elem[0].nodeName === 'TEXTAREA') {
					var HEIGHT = attrs['resizeTextarea'] ? attrs['resizeTextarea'] : 20;
					var resize = function(e) {
						var textHeight = e.target.scrollHeight;
						var height = Math.floor(textHeight / HEIGHT) * HEIGHT;
						elem.css('height', height + 'px');
					};
					elem.css({
						'lineHeight': HEIGHT + 'px',
						'height': HEIGHT + 'px',
						'min-height': HEIGHT * 2 + 'px'
					});
					elem.on('input', resize);
					scope.$watch(attrs.ngModel, function() {
						var textHeight = elem[0].scrollHeight;
						var height = Math.floor(textHeight / HEIGHT) * HEIGHT;
						if(height > HEIGHT) {
							height = height - HEIGHT;
						}
						elem.css('height', height + 'px');
					});
				}
			}
		};
	});
	
})();
