
function afterLoad(){
    var tagCal = document.getElementById("cal");
    console.log(typeof(tagCal));    // object
    

    var tagX = document.getElementById("x");
    var tagY = document.getElementById("y");
    var tagOp = document.getElementById("op");
    var tagResult = document.getElementById("result");

    var tagOp2 = document.querySelector("select");
    console.log(tagOp == tagOp2);   // 表示還有 querySelector 這招
    console.log(tagOp == tagX);

    tagCal.onclick = function(){
        // 以下用來查看一個 tag 的相關資料
        for (var v in tagOp){
            if (typeof(tagX[v]) != 'object' && typeof(tagX[v]) != 'function'){
                console.log(v + ":" + typeof(v));
            }
        }

        alert(tagOp.selectedIndex + ":" + typeof(tagOp.selectedIndex));
        

    }

}

