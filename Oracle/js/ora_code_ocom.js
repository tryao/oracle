/*
######################################################
# ORA_CODE_OCOM.JS - v3.27
# BUILD DATE: 23-February-2015
# COPYRIGHT ORACLE CORP 2015 [UNLESS STATED OTHERWISE]
######################################################
*/
/* Report suite set up */
function s_setAccount(){var sa=["oracledevall","ocom",s_setOraLangCountryGLOBAL("oracle.com")];if(location.href.indexOf("www.oracle.com/mn/index.html")!=-1){sa[1]="global";sa[2]="en-mn";}if(location.href.indexOf("www.oracle.com/ee/index.html")!=-1){sa[1]="global";sa[2]="en-ee";}if(location.href.indexOf("www.oracle.com/sk/index.html")!=-1){sa[1]="global";sa[2]="en-sk";}if(location.href.indexOf("www.oracle.com/lv/index.html")!=-1){sa[1]="global";sa[2]="en-lv";}if(location.href.indexOf("www.oracle.com/lt/index.html")!=-1){sa[1]="global";sa[2]="en-lt";}if(location.href.indexOf("www.oracle.com/lt/index.html")!=-1){sa[1]="global";sa[2]="en-ua";}if(location.href.indexOf("www.oracle.com/ae/")!=-1){sa[1]="global";sa[2]="en-ae";}if(location.href.indexOf("www.oracle.com/africa/")!=-1){sa[1]="global";sa[2]="en-africa";}if(location.href.indexOf("www.oracle.com/apac/")!=-1){sa[1]="global";sa[2]="en-apac";}if(location.href.indexOf("www.oracle.com/asiasouth/")!=-1){sa[1]="global";sa[2]="en-asiasouth";}if(location.href.indexOf("www.oracle.com/bd/")!=-1){sa[1]="global";sa[2]="en-bd";}if(location.href.indexOf("www.oracle.com/be-fr/")!=-1){sa[1]="global";sa[2]="fr-be";}if(location.href.indexOf("www.oracle.com/be-nl/")!=-1){sa[1]="global";sa[2]="nl-be";}if(location.href.indexOf("www.oracle.com/emea/")!=-1){sa[1]="global";sa[2]="en-emea";}if(location.href.indexOf("www.oracle.com/id/")!=-1){sa[1]="global";sa[2]="en-id";}if(location.href.indexOf("www.oracle.com/ke/")!=-1){sa[1]="global";sa[2]="en-ke";}if(location.href.indexOf("www.oracle.com/kh/")!=-1){sa[1]="global";sa[2]="en-kh";}if(location.href.indexOf("www.oracle.com/lk/")!=-1){sa[1]="global";sa[2]="en-lk";}if(location.href.indexOf("www.oracle.com/my/")!=-1){sa[1]="global";sa[2]="en-my";}if(location.href.indexOf("www.oracle.com/middleeast/")!=-1){sa[1]="global";sa[2]="en-middleeast";}if(location.href.indexOf("www.oracle.com/ph/")!=-1){sa[1]="global";sa[2]="en-ph";}if(location.href.indexOf("www.oracle.com/pk/")!=-1){sa[1]="global";sa[2]="en-pk";}if(location.href.indexOf("www.oracle.com/sg/")!=-1){sa[1]="global";sa[2]="en-sg";}if(location.href.indexOf("www.oracle.com/th/")!=-1){sa[1]="global";sa[2]="en-th";}if(location.href.indexOf("www.oracle.com/vn/")!=-1){sa[1]="global";sa[2]="en-vn";}if(sa[2]!="en-us"||location.host.indexOf("oracle.co.jp")!=-1){sa[1]="global";}sa[1]=(location.host.indexOf("m.oracle.com")!=-1||location.host.indexOf("m-stage.oracle.com")!=-1)?"ocom:mobile":sa[1];sa[2]=(location.host.indexOf("oracle.co.jp")!=-1)?"ja-jp":sa[2];if(s_checkdev()){sa[0]=(sa[2]!="en-us")?"oracledevworldwide1,oracledevall":"devoraclecom,oracledevall";}else{sa[0]=(sa[2]!="en-us")?"oracleworldwide,oracleglobal":"oraclecom,oracleglobal";}return sa;}
/* PrePlugins */
function s_prePlugins(s){s_oraVer(":ocom",":3.27");}
/* postPlugins plus site functions */
function s_postPlugins(s){if(typeof(s_meta)!="undefined"){if(s_meta.access=="gated"){s.events="event19";s.eVar27=s.pageName;}}if(s.pageName.indexOf("ocom:mobile")!=-1&&location.href.indexOf("m.oracle.com/partners")!=-1){s.pageName=s.pageName.replace("/","/partners/");}if(s.pageName.indexOf("ocom:mobile")!=-1&&location.href.indexOf("m.oracle.com/technetwork")!=-1){s.pageName=s.pageName.replace("/","/technetwork/");}}function s_checkdev(){var isDev=false;var devSites=new Array();devSites=["-stage","-dev","-content","localhost","127.0.0.1"];var al=devSites.length;for(i=0;i<al;i++){if(location.host.indexOf(devSites[i])!=-1){isDev=true;i=al+1;}}return(isDev);}function s_oraVer(_s,_v){_v=_s+_v;oraVersion=(oraVersion.indexOf(_s)==-1)?oraVersion+_v:oraVersion.substr(0,oraVersion.indexOf(_s))+_v;}function oraSetInternalFilters(){s.linkInternalFilters="javascript:,.oracle.";if(location.href.indexOf(":8888")||location.href.indexOf("webstandards-us")){s.linkInternalFilters="javascript:,localhost,webstandards-us.oracle.com,.oracle.";}}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}
/* JQUERY FUNCTIONS */
if(gotjQ()){jQuery(document).ready(function($){
/* TRACKAS MOSAIC */
$("li.cn02menu").each(function(){if(!$(this).find(".cn02w1").attr("data-lbl")&&$(this).find(".cn02w1").get(0)){$(this).find(".cn02w1").attr("data-lbl",$(this).find(".cn02w1").attr("id").toLowerCase().split("cn02-")[1]);}$(this).find("h3 a").attr("data-lbl",$(this).find(".cn02w1").attr("data-lbl"));});$("div.c25w3").each(function(){if(!$(this).parent().attr("data-lbl")){if($(this).find("h3 a").get(0)&&!$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));$(this).find("h3 a").attr("data-trackas","c25w2");}else{if($(this).find("h3 a").get(0)&&$(this).find("h3 a").attr("data-lbl")){$(this).parent().attr("data-lbl",$(this).find("h3 a").attr("data-lbl"));$(this).find("h3 a").attr("data-trackas","c25w2");}else{$(this).parent().attr("data-lbl",$(this).find("h3").text().toLowerCase().replace(/ /g,"-").replace(/'/g,""));}}}$(this).children("a").each(function(){if($(this).attr("data-lbl")){$(this).attr("data-trackas","c25w2");}});});$("form.u01searchform").bind("submit",function(e){if(s_setAccount()[1]){navTrack(s_setAccount()[1],s_setAccount()[2],"header","search");}});
/* TRACKAS OBJECTS */
var trackas=[["div.c01w4","c01"],["div.c04","c04"],["div.c19w1","social"],["div.c22","c22"],["div.c25w1","c25w1"],["div.c25w2","c25w2"],["div.c26w5","c26w5"],["div.c31","c31"],["div.c37","c37"],["div.c37w2","BillBoard-CTA"],["div.c37w3","c37w3"],["div.c38","c38"],["div.c40","c40"],["div.c48","c48"],["div.c49","c49"],[".c51v0","assets"],[".c51v1","rhs-assets"],[".c51v2","full-width-carousel"],[".c51v3","dual-carousel"],["div.c52w1","c52w1"],["div.c52w2","subfeature"],[".c52v0","subfeature"],["div.c54v1","c54v1"],["div.c54w1","c54w1"],["div.c54w4","c54w4"],[".c54plan","c54plan"],[".c54support","c54support"],[".c54people","c54people"],[".c54sales","c54sales"],[".c54social","c54social"],[".c54apps","c54apps"],[".c54gears","c54gears"],["a.c26link",false,"notrack"],["li.cn02menu","cn02menu"],["li.cn02more","cn02moremenu"],["div.ct02","ct02"],["div.ct05c1","ct05tab"],["div.ct05w2","ct05asset"],["div.ct05c1","ct05c1"],["div.cw01","cw01"],["div.cw01 a.cw01steplink","cw01","resetpage"],["div.cw02","cw02"],["div.cw03","cw03"],["a.cw19prev","cw19prev"],["a.cw19next","cw19next"],["li.cw19thumb","cw19thumb"],["div.w06","w06"],[".s09","live-chat"],[".s11","rhs-assets"],["#atgchat-body","atg-chat"],[".fblike","facebooklike"],[".fbicon","facebook"],[".inicon","linkin"],[".twicon","twitter"],[".yticon","youtube"],[".blicon","oracle-blogs"],["div.f02w2","f02w2"],["div.f02w3","f02w3"]];trackas.push(["div.cw22cta","herocw22cta"],["div.cw22w3","herocw22w3-button"],["div.cw24w2","cw24w2"],["div.cw24img","cw24img-withpopups"],["div.c74w3","c74w3-selectYourRole"],["div.ct06","ct06-carouselMenu"],["div#cw25shuffle","cw25shuffle"],["div.cn11","cn11-getStarted"],["a.cw23facebook","cw23","facebook"],["a.cw23twitter","cw23","twitter"],["a.cw23youtube","cw23","youtube"],["a.cw23linkedin","cw23","linkedin"],["a.cw23blog","cw23","blog"],["a.cw23newsletter","cw23","newsletter"],["ul.cw21navigation","cw21navigation"],["div.ct06w3","ct06-carouselSubMenu"],["div.cn10","cn10"],["div.u01mmenu","header","menu"],["div.u01mlogo","header","logo"],["div.u01msearch","header","search"],["a.cw26open","cw26-spotlight","open"],["a.cw26close","cw26-spotlight","close"],["div.ct07w3","ct07w3"],["div.cn07","cn07anchor"],["div.cn12","cn12-anchor-list"],["ul.cw29items","cw29items"],["li.cw30-face","cw30-face"],["a.cw30open","cw30open","+"],["img.cw30-close","cw30-close","x"],["a.cw27close","cw27close","x"],["a.cw27-scroll-up","cw27-scroll","up"],["a.cw27-scroll-down","cw27-scroll","down"],["div.cw27w3","cw27w3"],["div.c75w1","c75w1"],["div.c75w2","c75w2"],["div.cw31w1","cw31w1"],["div.cw31w4","cw31w4"],["ul.cw32nav","cw32nav"],["div.cw32viewport","cw32viewport"],["div.cw32seeall","cw32seeall"],["div#cw21-socialtab","cw21-socialtab"],["div#cw21-trytab","cw21-trytab"],["a.cw32next","cw32","next"],["a.cw32prev","cw32","prev"],["div.cw20w3","cw20w3","imagethumbs"],["div.cw33w3","cw33w3"],["div.c85","c85"]);trackas.push(["div.c92","c92-topiclinks"],["div.c91w2","c91w2-social"],["div.c93","c93-pressreleases"],["div.cw05","cw05"],["div.cw26w4","cw26w4"],["div.cw34w4","cw34w4"]);trackas.push(["div.cw37w2","cw37w2"],["div.cw38w1","cw38w1"],["ul.cw38icons","cw38icons"],["div.cw38slides","cw38slides"],["div.cw39w1","cw39w1"],["div.c86w1","c86w1"],["div.c75v2hr","c75v2hr"],["div.c78w1","c78w1-carrousel"],["div.c98w1","c98w1"],["div.c81","c81"]);
/* TRACKAS LIGHTBOX & OPOP */
$('a[rel*="lightbox"],a[rel*="opop"]').each(function(){if(!$(".f11v1")[0]){var type=($(this).attr("rel")=="opop")?"popup":"lightbox";if(!$(this).attr("data-lbl")&&$(this).attr("title")){$(this).attr("data-lbl",type+"-open-"+$(this).attr("title").toLowerCase().replace(/ /g,"-"));}else{if(!$(this).attr("data-lbl")&&$(this).text()){$(this).attr("data-lbl",type+"-open-"+$(this).text().toLowerCase().replace(/ /g,"-"));}else{if($(this).attr("data-lbl")){$(this).attr("data-lbl",$(this).attr("data-lbl")+"-"+type+"-open");}else{$(this).attr("data-lbl",type+"-open");}}}if(!$(this).attr("data-trackas")){$(this).attr("data-trackas",type);}}});
/* TRACKAS CODE */
var sn=s_setAccount()[1];var ln=s_setAccount()[2];$(document).on("click","div.cw22snav a,div.cw22bnav a, div.cw22nnav a",function(e){var btxt=$(this).text().replace(/[*,\r\n\t ]+/gi,"");var topORmid=$(this).closest("div.cw22v0").attr("data-trackas");topORmid=(typeof(topORmid)=="undefined")?"cw22-carousel":topORmid;navTrack(sn,ln,topORmid,btxt);});$("li.cw30-face img.cw30-background,li.cw30-face div.cw30-text").bind("click",function(e){var btxt=$(this).closest("li").find("div.cw30-text h3").text();btxt=btxt.replace(/[*,\r\n\t ]+/gi,"");navTrack(sn,ln,"cw30-face",btxt);});$("div.cw29w2 a").bind("click",function(e){var btxt=$(this).closest("a").find("h3.cw29title").text();btxt=btxt.replace(/[*,\r\n\t ]+/gi,"");navTrack(sn,ln,"cw29w2-panel",btxt);});$("ul.cw27topiclist li").bind("click",function(e){var btxt=$(this).text();btxt=btxt.replace(/[*,\r\n\t ]+/gi,"");navTrack(sn,ln,"cw27topiclist",btxt);});$("div.cw21w3 a").bind("click",function(e){navTrack(sn,ln,"cw21w3-scrollto","top");});for(var i=0;i<trackas.length;i++){if(!$(trackas[i][0]).attr("data-trackas")&&trackas[i][1]){$(trackas[i][0]).attr("data-trackas",trackas[i][1]);}if(trackas[i][2]&&trackas[i][2]=="resetpage"){$(trackas[i][0]).attr("data-pgreset","true");}else{if(trackas[i][2]&&!$(trackas[i][0]).attr("data-lbl")){$(trackas[i][0]).attr("data-lbl",trackas[i][2]);}}}$(document).on("click","*[data-trackas] a,a[data-trackas]",function(e){var lbl="";var o=$(this);if(o.attr("data-lbl")!="notrack"){if(o.attr("data-lbl")){lbl=o.attr("data-lbl");}else{if(o.attr("name")){lbl=o.attr("name");}else{if(o.attr("title")){lbl=o.attr("title");}else{if(o.find("img")&&o.find("img").first().attr("title")){lbl=o.find("img").first().attr("title");}else{if(o.find("img")&&o.find("img").first().attr("alt")){lbl=o.find("img").first().attr("alt");}else{if(o.find("img").first().attr("src")){lbl=o.find("img").first().attr("src");lbl=lbl.split("/")[(lbl.split("/").length-1)];}else{lbl=o.text();}}}}}}if(typeof(o.closest("[data-personalization-state]").attr("data-personalization-state"))!="undefined"){var p_dataPersonalizationState=o.closest("[data-personalization-state]").attr("data-personalization-state");var p_dataPersonalizedBy=(typeof(o.closest("[data-personalized-by]").attr("data-personalized-by")!="undefined"))?o.closest("[data-personalized-by]").attr("data-personalized-by"):"~";var p_dataId=(typeof(o.closest("[data-data-id]").attr("data-id")!="undefined"))?o.closest("[data-id]").attr("data-id"):"~";var p_dataContentId=(typeof(o.closest("[data-content-id]").attr("data-content-id")!="undefined"))?o.closest("[data-content-id]").attr("data-content-id"):"~";var p_dataNontentName=(typeof(o.closest("[data-content-name]").attr("data-content-name")!="undefined"))?o.closest("[data-content-name]").attr("data-content-name"):"~";p_dataPersonalizedBy="_"+p_dataPersonalizedBy.toLowerCase().replace(/,/g,"_").replace(/-+/g,"_");if((lbl.indexOf("prev")==-1&&lbl.indexOf("next")==-1)&&(p_dataPersonalizationState!="")){navTrack(sn,"personalized",p_dataPersonalizationState+":"+p_dataPersonalizedBy+":"+p_dataNontentName,p_dataId+":"+p_dataContentId);}}var d=o.closest("[data-trackas]").attr("data-trackas");d=(d=="hnav"||d=="header"||d=="hp07"||d=="hp08"||d=="hp09")?":":"-";if(!o.attr("data-trackas")){while(o.parent()){o=o.parent();if(o.attr("data-lbl")){lbl=o.attr("data-lbl")+d+lbl;}if(o.attr("data-trackas")){break;}}}lbl=lbl.toLowerCase().replace(/ /g,"-").replace(/-+/g,"-");var sec=(o.attr("data-trackas"))?o.attr("data-trackas"):o.closest("*[data-trackas]").attr("data-trackas");if(sec!="cw22-carouseltop"){navTrack(sn,ln,sec,lbl);}if(o.attr("data-pgreset")=="true"){s.clearVars();if(o.attr("href").indexOf("#")==0&&s.pageName){if(!$("body").attr("data-pgname")){$("body").attr("data-pgname",s.pageName);var pn=s.pageName;}else{var pn=$("body").attr("data-pgname");}s.pageName=pn+"/"+o.attr("href").split("#")[1];}else{s_orapageName(o.attr("href"));}oraSetInternalFilters();s.linkInternalFilters=s.linkInternalFilters+","+o.attr("href");var s_code=s.t();if(s_code){document.write(s_code);}oraSetInternalFilters();}}});});}