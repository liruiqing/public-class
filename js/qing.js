function showBrowserInfo(){
    var s = "";
    s += " 网页可见区域宽："+ document.body.clientWidth+'\n';
    s += " 网页可见区域高："+ document.body.clientHeight+'\n';
    s += " 网页可见区域宽："+ document.body.offsetWidth +" (包括边线和滚动条的宽)"+'\n';
    s += " 网页可见区域高："+ document.body.offsetHeight +" (包括边线的宽)"+'\n';
    s += " 网页正文全文宽："+ document.body.scrollWidth+'\n';
    s += " 网页正文全文高："+ document.body.scrollHeight+'\n';
    s += " 网页被卷去的高："+ document.body.scrollTop+'\n';
    s += " 网页被卷去的左："+ document.body.scrollLeft+'\n';
    s += " 网页正文部分上："+ window.screenTop+'\n';
    s += " 网页正文部分左："+ window.screenLeft+'\n';
    s += " 屏幕分辨率的高："+ window.screen.height+'\n';
    s += " 屏幕分辨率的宽："+ window.screen.width+'\n';
    s += " 屏幕可用工作区高度："+ window.screen.availHeight+'\n';
    s += " 屏幕可用工作区宽度："+ window.screen.availWidth+'\n';
    s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+'\n';
    s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+'\n';
    console.log(s);
}

function isIE(){
    var isIE=!!window.ActiveXObject;
    var isIE6=isIE&&!window.XMLHttpRequest;
    var isIE8=isIE&&!!document.documentMode;
    var isIE7=isIE&&!isIE6&&!isIE8;
    if (isIE){
        return true;
        if (isIE6){

        }else if (isIE8){

        }else if (isIE7){

        }
    }
    return false;
}
