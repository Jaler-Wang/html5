window.onload= function(){
   var toTopButton = document.getElementById("toTopButton");
   window.onscroll = function(){
       if(window.pageYOffset < 100){
           toTopButton.style.display="none";
       }
       else{
           toTopButton.style.display="block";
       }
   }

   toTopButton.onclick = function(){
        window.scrollBy(0, -1* window.pageYOffset);
   };
}

