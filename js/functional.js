const curry = (fn,flength = fn.length,...args) => 
args.length >= flength ? fn(...args): curry.bind(null,fn,flength,...args);
const counter = (number=0) => {
    return () => ++number;
};
const makegetatrr = basereturn => attr => obj => obj[attr] || basereturn;
const attr = makegetatrr({});
const attrnumber = makegetatrr(0);
/* const attr = attr => obj => obj[attr] || {};
const attrnumber = attr => obj => obj[attr] || 0; */
Object.assign(window,{
    curry,counter,attr,attrnumber
})



