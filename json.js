/*
because MySql represents boolean with 0 and 1, 
some json driver sometimes converts boolean to string of '0' and '1', 
this seems to happen only on production server and cause severe bug 

Take a look at the example below
*/
require('./index')
let data = { //our parsed json data from database
    aFalseBool: '0',
    aTrueBool: true
}

console.log(Boolean(data.aFalseBool)) //true  😌 ?? this ain't it
console.log(Boolean(data.aTrueBool)) //true , well, yes, but we now have two true now, uhh??


//using @__path/bool polyfill 

console.log(Boolean(data.aFalseBool.bool())) //false  💪 ?? yes!
console.log({
    t: Boolean(data.aTrueBool.bool())
}) //true  🎉 ?? !