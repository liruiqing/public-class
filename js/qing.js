function showInfo(){
    var s = "";
    s += " ��ҳ�ɼ��������"+ document.body.clientWidth+'\n';
    s += " ��ҳ�ɼ�����ߣ�"+ document.body.clientHeight+'\n';
    s += " ��ҳ�ɼ��������"+ document.body.offsetWidth +" (�������ߺ͹������Ŀ�)"+'\n';
    s += " ��ҳ�ɼ�����ߣ�"+ document.body.offsetHeight +" (�������ߵĿ�)"+'\n';
    s += " ��ҳ����ȫ�Ŀ���"+ document.body.scrollWidth+'\n';
    s += " ��ҳ����ȫ�ĸߣ�"+ document.body.scrollHeight+'\n';
    s += " ��ҳ����ȥ�ĸߣ�"+ document.body.scrollTop+'\n';
    s += " ��ҳ����ȥ����"+ document.body.scrollLeft+'\n';
    s += " ��ҳ���Ĳ����ϣ�"+ window.screenTop+'\n';
    s += " ��ҳ���Ĳ�����"+ window.screenLeft+'\n';
    s += " ��Ļ�ֱ��ʵĸߣ�"+ window.screen.height+'\n';
    s += " ��Ļ�ֱ��ʵĿ���"+ window.screen.width+'\n';
    s += " ��Ļ���ù������߶ȣ�"+ window.screen.availHeight+'\n';
    s += " ��Ļ���ù��������ȣ�"+ window.screen.availWidth+'\n';
    s += " �����Ļ������ "+ window.screen.colorDepth +" λ��ɫ"+'\n';
    s += " �����Ļ���� "+ window.screen.deviceXDPI +" ����/Ӣ��"+'\n';
    console.log(s);
}