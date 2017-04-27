/* (c) 2017 Messagewall Inc. */
/**
 * WallIdeaDetail画面コントローラ
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
(function(){
	
	var co, sc;
	module.controller("WallIdeaDetailCtrl", [
		"$compile", "$scope", "ExperiencerData", function($compile, $scope, ExperiencerData) {
			
		co = $compile;
		sc = $scope;
		
		// lazyRepeat experiencer's ideaList 
		document.addEventListener('init', lazyRepeatExIdeaList, false);
/*
		this.meToo = function() {
			var currentCnt = document.getElementById("meTooCnt").textContent;
			if (document.getElementById('trustIcon').className != 'ion-android-favorite') {
				document.getElementById("trustCnt").textContent = parseInt(currentCnt) + 1;
				document.getElementById('trustCnt').style.color ='#EE6557';
				document.getElementById('trustIcon').style.color ='#EE6557';
				document.getElementById('trustIcon').className ='ion-android-favorite';
				document.getElementById('trustText').style.color ='#4d4d4d';
			} else { 
				document.getElementById("trustCnt").textContent = parseInt(currentCnt) - 1;
				document.getElementById('trustCnt').style.color ='#999';
				document.getElementById('trustIcon').style.color ='#999';
				document.getElementById('trustIcon').className ='ion-android-favorite-outline';
				document.getElementById('trustText').style.color ='#ddd';
			}
		};
*/
		this.judgeBadIdea = function(experiencerId) {
			judgementBadIdea(experiencerId);
		};
		this.judgeGoodIdea = function(experiencerId) {
			judgementGoodIdea(experiencerId);
		};
		this.pushWallIdeaDetailComment = function(experiencerId) {
			wallNavi.bringPageTop(viewWall + 'wall_idea_detail_comment.html', {animation: 'lift'})
		};
		this.pushChannelDetail = function() {
			wallNavi.bringPageTop(viewChannel + 'channel_detail.html', {animation: 'slide'})
		};
		this.pushProfileMentor = function(experiencerId) {
			ExperiencerData.set(experiencerId);
			wallNavi.bringPageTop(viewProfile + 'profile_mentor.html', {animation: 'lift'});
		};
		this.popWallIdeaDetail = function() {
			wallNavi.popPage({animation: 'lift'});
		};
	}]);	

	/**
	 * lazy-repeat処理
	 */ 
	// lazy-repeatは1ループを1ブロックとして考える。IDなどは最終的に形成されるHTMLでは重複するが、ループ時は重複しない。
	function lazyRepeatExIdeaList() {
		try {
			var loopCnt = 6;
			var lazyRepeat = document.querySelector('#exIdeaList');
			if (lazyRepeat !== null) {
				lazyRepeat.delegate = {
					createItemContent: function(index, template) {					
						var dom = template.cloneNode(true);
						
						// TODO : 最終的に何をキーにするかは考慮するので今は仮
						var experiencerId = ((index+1)%7);
						
						// experiencerのprofile-image
						var imgElem = dom.querySelector('#exProfileImage');
						imgElem.setAttribute('src', 'images/delete' + experiencerId + '.jpg');
	
						// experiencerのprofile-imageをclick
						imgElem.setAttribute('ng-click', 'wallIdeaDetail.pushProfileMentor(' + experiencerId + ')');

						// experiencerの評価
						var badElem = dom.querySelector('#judgement #judgeBad')
						badElem.setAttribute('id', 'judgeBad_' + experiencerId);
						badElem.setAttribute('class', 'judgeNoTap');
						badElem.setAttribute('ng-click', 'wallIdeaDetail.judgeBadIdea(' + experiencerId + ')');
						var cntElem = dom.querySelector('#judgement #judgeCnt')
						cntElem.setAttribute('id', 'judgeCnt_' + experiencerId);
						cntElem.setAttribute('class', 'judgeNoTap');
						var goodElem = dom.querySelector('#judgement #judgeGood')
						goodElem.setAttribute('id', 'judgeGood_' + experiencerId);
						goodElem.setAttribute('class', 'judgeNoTap');
						goodElem.setAttribute('ng-click', 'wallIdeaDetail.judgeGoodIdea(' + experiencerId + ')');

						// comment
						var commentElem = dom.querySelector('#ideaComment');
						commentElem.setAttribute('ng-click', 'wallIdeaDetail.pushWallIdeaDetailComment(' + experiencerId + ')');

						// experiencerのidea
						var exIdeaElem = dom.querySelector('#exIdea');
						for(var j=0; j<index+1; j++) {
							var textNode = 
								document.createTextNode('本文 本文 本文 本文 本文 本文 本文 本文 本文 本文 本文 本文 本文');
							exIdeaElem.appendChild(textNode);
						}
						co(dom)(sc);
						return dom;
					},
					configureItemScope: function(index, itemScope) {
						 itemScope.item = index;
					},
					countItems: function() {
						return loopCnt;
					},
					destroyItem: function(index, item) {
						console.log('Destroyed item with index: ' + index);
					}
				};
				lazyRepeat.refresh();
			}
		} finally {
			// Listenerの開放
			document.removeEventListener('init',lazyRepeatExIdeaList, false);
		}
	}

	/**
	 * BAD評価処理
	 */ 
	function judgementBadIdea(experiencerId) {
		var judgeBadE = document.getElementById('judgeBad_' + experiencerId);
		var judgeCntE = document.getElementById('judgeCnt_' + experiencerId);
		var judgeGoodE = document.getElementById('judgeGood_' + experiencerId);
		
		var currentCnt = judgeCntE.textContent;
		if (judgeBadE.className == 'judgeNoTap') {
			// Badが押されてない状態でBadが押されたためカウントダウン
			judgeBadE.className = 'judgeBadTap';
			judgeCntE.className = 'judgeBadTap';
			if (judgeGoodE.className == 'judgeNoTap') {
				// Goodも押されていないのでカウントを1下げる
				judgeCntE.textContent = parseInt(currentCnt) - 1;
			} else {
				// Goodが押されているのでカウントを2下げる
				judgeGoodE.className = 'judgeNoTap';
				judgeCntE.textContent = parseInt(currentCnt) - 2;
			}
		} else { 
			// Badが既に押されている状態でBadが押されたためリセット
			judgeBadE.className = 'judgeNoTap';
			judgeCntE.className = 'judgeNoTap';
			judgeCntE.textContent = parseInt(currentCnt) + 1;
		}
	}

	/**
	 * GOOD評価処理
	 */ 
	function judgementGoodIdea(experiencerId) {
		var judgeBadE = document.getElementById('judgeBad_' + experiencerId);
		var judgeCntE = document.getElementById('judgeCnt_' + experiencerId);
		var judgeGoodE = document.getElementById('judgeGood_' + experiencerId);
		
		var currentCnt = judgeCntE.textContent;
		if (judgeGoodE.className == 'judgeNoTap') {
			// Goodが押されてない状態でGoodが押されたためカウントアップ
			judgeGoodE.className = 'judgeGoodTap';
			judgeCntE.className = 'judgeGoodTap';
			if (judgeBadE.className == 'judgeNoTap') {
				// Badも押されていないのでカウントを1上げる
				judgeCntE.textContent = parseInt(currentCnt) + 1;
			} else {
				// Badが押されているのでカウントを2上げる
				judgeBadE.className = 'judgeNoTap';
				judgeCntE.textContent = parseInt(currentCnt) + 2;
			}
		} else { 
			// Goodが既に押されている状態でGoodが押されたためリセット
			judgeGoodE.className = 'judgeNoTap';
			judgeCntE.className = 'judgeNoTap';
			judgeCntE.textContent = parseInt(currentCnt) - 1;
		}
	}

/*
	window.fn = {};
	window.fn.open = function() {
	  var menu = document.getElementById('comment');
	  menu.open();
	};
	window.fn.load = function(page) {
	  var content = document.getElementById('content');
	  var menu = document.getElementById('comment');
	  content.load(page)
	    .then(menu.close.bind(menu));
	};
*/	
})();