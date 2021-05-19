
var add    = document.querySelector(".add")
var reduce = document.querySelector(".reduce")
var show   = document.querySelector(".show")
var reset  = document.querySelector(".reset")
var select = document.querySelector(".select");


var count = 0;
add.addEventListener("click",() => {
   if(select.value==2){
      count +=2;
      show.innerHTML = count;
   }else if(select.value ==3){
      count +=3;
      show.innerHTML = count;
   }else{
      count ++;
      show.innerHTML = count;
   }
})

reduce.addEventListener("click",() => {
   if(select.value==2){
      count -=2;
      show.innerHTML = count;
   }else if(select.value == 3){
      count -=3;
      show.innerHTML = count;
   }
   else{
      count --;
      show.innerHTML = count;
   }
})

reset.addEventListener("click",() => {
   count = 0;
   show.innerHTML = count;
})
