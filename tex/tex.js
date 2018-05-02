var myColTbl = new Array("#FF0000","#0000FF","#00FF00","#FF00FF","#00FFFF","#FFFF00","#000000","FF1111");
var myColCnt = 0;

function myFunc(){
     document.getElementById("test").style.color = myColTbl[myColCnt];
     myColCnt = ( myColCnt < myColTbl.length -1 ) ? myColCnt + 1 : 0;
}
