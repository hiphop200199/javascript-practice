<<<<<<< HEAD
let slideIndex=0;   /*假設幻燈片從第一張開始 */

showSlides();/*讓幻燈片自動開始跑 */

function showSlides(){
    
    let i;/*先從DOM找到照片跟圓點*/
    let slides=document.getElementsByClassName("slides");
    let dots=document.getElementsByClassName("main-slide-dot");
    
  for (i = 0; i < slides.length; i++) {/*其他沒選中的投影片讓它不要顯示 */
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if(slideIndex>slides.length){
    slideIndex=1;
  }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);/*每3秒自動換下一張投影片 */
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");/*其他沒選中的圓點顏色恢復預設 */
  }
  slides[slideIndex-1].style.display = "block";  /*選中的投影片讓它顯示出來 */
  dots[slideIndex-1].className += " active";/*選中的、當下的圓點讓它顏色加深 */

}
=======
let slideIndex=0;   /*假設幻燈片從第一張開始 */

showSlides();/*讓幻燈片自動開始跑 */

function showSlides(){
    
    let i;/*先從DOM找到照片跟圓點*/
    let slides=document.getElementsByClassName("slides");
    let dots=document.getElementsByClassName("main-slide-dot");
    
  for (i = 0; i < slides.length; i++) {/*其他沒選中的投影片讓它不要顯示 */
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if(slideIndex>slides.length){
    slideIndex=1;
  }
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);/*每3秒自動換下一張投影片 */
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");/*其他沒選中的圓點顏色恢復預設 */
  }
  slides[slideIndex-1].style.display = "block";  /*選中的投影片讓它顯示出來 */
  dots[slideIndex-1].className += " active";/*選中的、當下的圓點讓它顏色加深 */

}
>>>>>>> 4a553a7 (增加scroll animate的筆記)
