/*Global*/
var x = 3;
var outer = function() {
    /*Outer*/
    var y = 4;
    /*Inner*/
    function inner() {
        var z = 5;
        return x + y + z;
    }
    var result = inner();
    alert(result);
}

outer();
