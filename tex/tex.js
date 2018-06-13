var myColTbl = new Array("#FF0000","#0000FF","#00FF00","#FF00FF","#00FFFF","#FFFF00","#000000","FF1111");
var myColCnt = 0;

function myFunc(){
     document.getElementById("test").style.color = myColTbl[myColCnt];
     myColCnt = ( myColCnt < myColTbl.length -1 ) ? myColCnt + 1 : 0;
}

jQuery(document).ready(function(){
   $('div').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('div').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});