/* (c) 2017 Messagewall inc. */
/**
 * TopMain画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){

	module.controller("TopMainCtrl", function() {
		this.pushIdeaRegister = function() {
			indexNavi.bringPageTop(viewIdea + 'idea_register.html', {animation: 'lift'});
		};
		this.pushTopIntro = function() {
			var navi = activeNavi();
			if (navi != '') {
				navi.bringPageTop(viewRoot + 'top_intro.html', {animation: 'lift'});
				document.getElementById('dial').hideItems();
			}
		};
	});
	
})();

/* <resize-textarea>
module.directive('resizeTextarea', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    template: "<textarea></textarea>",
    link: function(scope, element, attrs) {
      var HEIGHT = 30;
      var el = angular.element(element[0])
      el.css('lineHeight', HEIGHT + "px");
      el.css('height', HEIGHT + "px");

      var resize = function(e) {
        var textHeight = e.target.scrollHeight;
        var height = ~~(textHeight / HEIGHT) * HEIGHT
        el.css('height', height + "px");
      };
      el.on('input', resize);
    }
  }
});
*/