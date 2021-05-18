// var object ={
//     stuInfo:[{
//         name:"Motiur",
//         lname:"Rahman",
//         id:1
//     },{
//         name:"Misu",
//         lname:"Islam",
//         id:2
//     },{
//         name:"Ayman",
//         lname:"Sadik",
//         id:3
//     }
// ]
// }

// for(var x in object.stuInfo){ 
//     for(var inner_x in object.stuInfo[x]){
//         console.log(object.stuInfo[x][inner_x]);
//     }
// }


// var targetButton = document.querySelector("button");
// var show = document.querySelector(".output");


// targetButton.addEventListener("click",function(){
//     var targetInput = document.querySelector("input").value;
//     var xhm = new XMLHttpRequest;
//     xhm.onprogress = function(){
//         show.innerHTML= "loading";
//     }
//     xhm.open("GET",`http://worldtimeapi.org/api/timezone`,true)
//     xhm.onload = function(){
//         if(this.status === 200){
//            console.log(this.responseText);
//         }
//     }
//     xhm.send();
// });


// (function() {
// //Select the input element
// const form = document.querySelector('#message-form')
// //Set up Submit Button
// form.addEventListener('submit', function(e){
//     // prevent the form's default submission action
//     e.preventDefault()
//     //Get user's input from from
//     const message = document.querySelector('#message')
//     const feedback = document.querySelector('.feedback')
//     const messageContent = document.querySelector('.message-content')

//     if (message.value === ''){
//         feedback.classList.add('show')
//         setTimeout(function(){
//         feedback.classList.remove('show')
//         }, 2000)
//     } else {
//         //Change message content and clear the message input
//         messageContent.textContent = message.value
//         message.value = ''
//     }
// })
// })()

// var person = [
//     {
//         name:"Misu",
//         age:10
//     },
//     {
//         name:"Motiur",
//         age:20
//     },
//     {
//         name:"Ayman",
//         age: 25
//     }

// ];

// function createData(persons,callback){
//     var myPromise = new Promise(function(resolve,reject){
//             person.push(persons)
//             var err = false;
//             if(!err){
//                 resolve();
//             }else{
//                 reject("Somthing wrong");
//             }
//     })
//     console.log(myPromise)
// }

// function getData(){
//     setTimeout(function(){
//         person.forEach(function(item){
//             console.log(item.name)
//         })
//     },2000)
// }

// createData({name:"Maruf",age:30}).then(getData).catch(function(err){
//     console.log(err);
// })

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