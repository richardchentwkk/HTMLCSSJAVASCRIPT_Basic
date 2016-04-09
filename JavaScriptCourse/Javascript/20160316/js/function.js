/*Function with argument*/
function test(message) {
    alert(message);
}

function add(n1, n2) {
    alert(n1 + n2);
    return;
}
//alert(test);
alert(add(1, 2));

var add = function(n1, n2) {
    return n1 + n2;
};

alert(add(2, 3));
