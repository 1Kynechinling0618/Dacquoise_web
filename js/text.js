//絕對定位隱藏顯示
function getScroll(id){
    var obj = document.getElementById(id);
    var timer = null;
    positionFixed(obj);
    if(obj){
    obj.style.display = 'none';
    window.onscroll=function(){
     getScrollTop() > 0 ? obj.style.display = "block" : obj.style.display = "none";
    }
    obj.onclick=function(){
     var timer = setInterval(sMove,10);
     function sMove(){
     setScrollTop(getScrollTop() / 1.5);
     if(getScrollTop() < 1)clearInterval(timer);
     }
    }
    }
   }
   //判斷IE6
   function positionFixed(obj){
    var iE6 = !-[1,] && !window.XMLHttpRequest;
    if(obj){
        var top = obj.offsetTop;
    if(iE6){
     document.documentElement.style.textOverflow = "ellipsis";
     obj.style.position = "absolute";
     obj.style.setExpression("top", "eval(documentElement.scrollTop + " + top + ') + "px"');
    }
    }
   }
   //獲取滾動條Top
   function getScrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop;
   }
   //回到頂部
   function setScrollTop(value){
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
   }
   window.onload = function(){
    getScroll('div1');
   };
   