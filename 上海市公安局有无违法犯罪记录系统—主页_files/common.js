//窗口的父窗口
var WINDOW_PARENT = window;
while(WINDOW_PARENT!=WINDOW_PARENT.parent){
    WINDOW_PARENT=WINDOW_PARENT.parent;
}
function AjaxSessionError(xhr, textStatus, errorThrown) {
    var sessionstatus = xhr.getResponseHeader("sessionstatus");
    if(sessionstatus == "timeout"){
        WINDOW_PARENT.location = CONTEXT_PATH + "logout";
        return false;
    }else{
        return true;
    }
}
function AjaxReturnSuccess(ret) {
    if(ret != null && ret.retcode != undefined && ret.retcode != null && ret.retcode == "200"){
        return true;
    }
    return false;
}
/**
 * 2017-07-01 00:00:00
 * 转
 * 2017年07月01日
 * @param str
 */
function toChineseYYYYMMDD(str){
    if(str == null){return "";}
    try{
        var yyyymmdd = str.split(" ")[0].split("-");
        if(yyyymmdd.length == 3){
            return yyyymmdd[0]+"年"+yyyymmdd[1]+"月"+yyyymmdd[2]+"日";
        }
    }catch (e) {
        //console.log(e);
    }
    return str;
}
function isNullOrEmpty(o) {
    try {
        if (o == null || o == "null") {
            return true;
        }
        if (o == undefined || o == "undefined") {
            return true
        }
        if (o == "") {
            return true;
        }
    }catch(err){
        return true;
    }
    return false;
}
String.prototype.endWith = function(str){
    if(str==null || str=="" || this.length == 0 ||str.length > this.length){
        return false;
    }
    if(this.substring(this.length - str.length)){
        return true;
    }else{
        return false;
    }
    return true;
};

String.prototype.startWith = function(str){
    if(str == null || str== "" || this.length== 0 || str.length > this.length){
        return false;
    }
    if(this.substr(0,str.length) == str){
        return true;
    }else{
        return false;
    }
    return true;
};
function TransferString(content){
    if(isNullOrEmpty(content)){
        return "";
    }
    try{
        content=content.replace(/\r\n/g,"<br/>");
        content=content.replace(/\r/g,"<br/>");
        content=content.replace(/\n/g,"<br/>");
    }catch(e) {
        //alert(e.message);
    }
    return content;
}
