 /* ORA_OCOM.JS - BUILD: 12th DECEMBER 2013 v1.61 */
var ora_local = "ora_code_ocom.js";
var ora_global = "ora_code.js";
var elq_global = "elqCfg.min.js";
var ora_path = "/us/assets/metrics/";
var elq_path = "/i/";
var _elqQ = _elqQ || [];
var isTest = (location.host.indexOf("-stage") != -1 || location.host.indexOf("-content") != -1 || location.host.indexOf("localhost") != -1 || location.host.indexOf(".us.oracle.com") != -1 || location.host.indexOf("127.0.0.1") != -1 || location.host.indexOf("-dev") != -1);
var ora_root = (isTest) ? "://www-portal-stage.oracle.com" : "://www.oracleimg.com";
var elq_root = "//img03.en25.com";
var elq_prodID = "1973398186";
var elq_devID = "30554202";
var host_type = (window.location.protocol.toLowerCase().indexOf("https") != -1) ? "https" : "http";
/* Eloqua Tag */
if (!isTest) {
    _elqQ.push(["elqSetSiteId", elq_prodID]);
    _elqQ.push(["elqTrackPageView"]);
    _elqQ.push(["elqSetSiteId", elq_devID]);
    _elqQ.push(["elqTrackPageView"]);
    (function() {
        function async_load() {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "js/"+ elq_global;
            var x = document.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(s, x);
        }
        if (window.addEventListener) {
            window.addEventListener("DOMContentLoaded", async_load, false);
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", async_load);
            }
        }
    })();
/* Site Catalyst Tag */
}
document.write("<script type='text/javascript' src='js/"  + ora_local + "'><\/script>");
document.write("<script type='text/javascript' src='js/" + ora_global + "'><\/script>");
/* End Tags */
