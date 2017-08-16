//let header = document;
function click () {
    let name=6;
    // let arr = [1,2,3];
    // let human = {
    //     age:24,
    //     name:"Alex",
    //     hair_color:"black"
    // };
    console.log(name);


 /*   testfnc =function() {
        return 24;
    };
    console.log(testfnc());*/
}
let rrr=5;
console.log(rrr);

//(function () {
  //  let name = "Alex";
   // console.log(name);
//})();
var testarr = [
    {
    age: 24,
    color: 'red'
},
{
    age: 23,
    color: 'red'
},
    {age: 27,
    color: 'green'
}
];

let less25 = [];
let mycolor = [];
testarr.forEach(function (element, index, arr) {
    //console.log("element:" + element,"index:" + index,"arr:"+ arr)
    if (element.age<=25) {
        less25.push(element);
    }

    if (element.color === "green") {
        mycolor.push(element);
    }

});

console.log(less25);
console.log(mycolor);