var baselist = (e, count) => {
    let target = $.target(e);
    let str = `<li data-id=
    ${count} class="todoli">
    <div>
   <input type="checkbox">
   <label>${target.value}</label>
   <button data-id=${count}>x</button>
   </div>
   </li>`
    return str;
}
const removelist = e => {
    let li = $.findparent(e.target, 2);
    console.dir(li);
    return li.parentNode.removeChild(li);
}
const addlist = e => {
    if ($.keyCode(e) == 13) {
        let lis = $.all('.todoli');
        let count = $.getlength(lis) + 1;
        let template = baselist(e, count);
        let li = $.el(template);
        $.target(e).value = '';
        let xbutton = $('div>button',li);
        xbutton.onclick = removelist;
        $('.todolist').append(li);
    }
};

//let xbuttons = $.all('button');
//const allclick = $.allevent('onclick');

$.on($('.header input'), 'keypress', addlist);



