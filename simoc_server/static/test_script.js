
var my_func = function(){
    var elem = document.createElement("span");
    elem.innerHTML = "This text was generated in javascript.";
    document.body.append(elem);
}

my_func();