!function(){
    const basesel = method => (query,parent = document) => parent[method](query);
    const $ = basesel('querySelector');
    $.all = basesel('querySelectorAll');
    $.on = (el = document,event,f) => {
        el.addEventListener(event,f);
    }
    $.el = html => {
        let parent = document.createElement('div');
        parent.innerHTML = html;
        return parent.children[0];
    }
    $.target = attr('target');
    $.val = attr('value');
    $.keyCode = attr('keyCode');
    $.getlength = attrnumber('length');
    $.remove = el => el.parent && el.parent.removeChild(el);
    $.allevent = eventname => (elementarry,fn) => elementarry.forEach(el => {
        el[eventname] = fn;
    });
    $.findparent = (el,upnumber = 1) => {
        let parent = el;
        while(upnumber--){
            parent = el.parentNode;
        }
        return parent;
    }
    window.$ = $;
}();