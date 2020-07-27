
var pics_src = new Array("img/top.jpg","img/sky_pengin.jpg","img/kurage.jpg");
var num = -1;

slideshow_timer();

function slideshow_timer(){
  if (num ==2 ){
      num = 0;
  }else{
      num++;
  }
  document.getElementById("top-img").src=pics_src[num];
  setTimeout("slideshow_timer()",3000);
}

// 質問タグの閉じ開き
document.getElementById("questionMenu").style.display="none";

function clickBtn1(){
    const questionMenu = document.getElementById("questionMenu");
    if(questionMenu.style.display=="block"){
        questionMenu.style.display ="none";
    }else{
        questionMenu.style.display ="block";
    }
}
