/* (c) 2017 Messagewall inc. */
/**
 * experiencer情報をコントローラ間で受け渡すDataFactroy 
 * 
 * app.jsと依存関係にあるため、index.htmlへの定義は必ずapp.jsの後に実施すること
 * 
 * @author ryo-imayoshi
 */
module.factory('ExperiencerData', function(){
  var experiencerData = {};
  experiencerData.experiencerId = '';

  // experiencerId setter
  experiencerData.set = function(id){
    experiencerData.experiencerId = id;
  };
  
  // experiencerId getter
  experiencerData.get = function(){
    return experiencerData.experiencerId;
  };
  
  return experiencerData;
});