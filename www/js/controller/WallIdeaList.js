/* (c) 2017 Messagewall Inc. */
/**
 * IdeaList画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
module.controller("WallIdeaListCtrl", [
	"ExperiencerData", function(ExperiencerData) {
	wallNavi = document.getElementById('mwWallNavi');
	
	$(document).one('init', ideaListPullHook);

	/* tabbarのpageを変更するケースでstockされたpageをunloadし、初期画面を表示する */
	ons.ready(function() {
		tabbar = document.querySelector("#tab");
		tabbar.addEventListener('reactive', tabInit, false);
	});

	this.pushWallIdeaDeatil = function() {
		wallNavi.bringPageTop(viewWall + 'wall_idea_detail.html', {animation: 'lift'})
	};
	this.pushChannelDetail = function() {
		wallNavi.bringPageTop(viewChannel + 'channel_detail.html', {animation: 'slide'})
	};
	this.pushProfileStarter = function() {
		wallNavi.bringPageTop(viewProfile + 'profile_starter.html', {animation: 'slide'})
	};
	this.pushProfileMentor = function(experiencerId) {
		ExperiencerData.set(experiencerId);
		wallNavi.bringPageTop(viewProfile + 'profile_mentor.html', {animation: 'lift'});
	};
	this.popWallIdeaDetail = function() {
		wallNavi.resetToPage({animation: 'lift'});
	};
}]);

/**
 * tabItem押下時初期ページ遷移処理
 */
function tabInit(event) {
	var navi = activeNavi();
	if (navi != '') {
		if (navi.pages.length != 1) {
			for (var i = 0; i < navi.pages.length; i++) {
				navi.pageLoader.unload(navi.pages[i]);
			}
			navi.resetToPage(event.tabItem.page, {animation: 'fade'});
		}
	}
}

/**
 * pullHook処理
 */
var logoPath = 'images/';
var logoName = 'company_logo_g.png';
var logoSize = '40px';
function ideaListPullHook() {
	try {
	var pullHook = document.querySelector('#ideaListPullHook');
	
	if(pullHook !== null) {
		pullHook.addEventListener('changestate', function(event) {
			var message = '';
			switch (event.state) {
				case 'initial':
					message += '<div>'
					message += '<img src="' + logoPath + logoName + '" width=' + logoSize + '" height="' + logoSize + '"/>';
					message += '</div>'
					break;
				case 'preaction':
					message += '<div>'
					message += '<img src="' + logoPath + logoName + '" width=' + logoSize + '" height="' + logoSize + '"/>';
					message += '</div>'
					break;
				case 'action':
					message += '<div><ons-icon size="55px" spin="true" icon="">'
					message += '<img src="' + logoPath + logoName + '" width=' + logoSize + '" height="' + logoSize + '"/>';
					message += '<ons-icon></div>'
					break;
			}
			pullHook.innerHTML = message;
		});
	}
	pullHook.onAction = function(done) {
		setTimeout(done, 2000);
	};
	}catch(e){alert(e)}
}
