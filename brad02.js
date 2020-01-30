document.write("Hello, World<br>");
var var1 = fx(3,4);
document.write(var1 + "<br>");
var var2 = test(1,2);
document.write(var2);

function fx(x){
    return 2*x+1;
}
// 後面定義覆蓋之前相同名稱的 function
function fx(x,y){
    return 2*x+y;
}

function test(x, y , z){
    return x + y + z;
}