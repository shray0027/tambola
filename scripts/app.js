let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90
];
var pickedNumbers = [];
var switch1 = document.querySelector('input[type="checkbox"]');
if (switch1.checked) {
  console.log("start");
} else {
  console.log("stopped");
}
switch1.addEventListener('change', function() {
  if (switch1.checked == true) {
    setTimeout(function() {
      for (var i = 0; i < numbers.length; i++) {
        var toggleSwitch = document.querySelector('input[type="checkbox"]');
        if (toggleSwitch.checked === true) {
          if (toggleSwitch.checked === false) {
            stopTask();
            console.log("stopped");
            break;
          }else{
            console.log("started");
            task(i);
            continue;
          }

        } else {
          console.log("not started yet");
        }
      }
    }, 5000);
  }
});

function stopTask() {
  clearTimeout(myVar);
}

function task(i) {
  myVar = setTimeout(function() {
    nextSequence();
  }, 7000 * i);
}

$(".roll").click(function() {
  nextSequence();
});

function nextSequence() {
  var index = Math.floor(Math.random() * numbers.length);
  var rolledNumber = numbers[index];
  numbers.splice(index, 1);
  pickedNumbers.push(rolledNumber);
  $(".a" + rolledNumber).removeClass("pressed");
  console.log(rolledNumber);
  $(".lastNumber").text(rolledNumber);
  //  soundPlay(rolledNumber);
}




// toggleSwitch.addEventListener('change',function(){
//   if(toggleSwitch.checked==true){
//     console.log("checked");
//     setTimeout(function(){
//       console.log("started");
//       for( let i =0 ; i<numbers.length ; i++){
//         if(toggleSwitch.checked==true){
//
//               console.log(toggleSwitch.checked);
//               task(i);
//         }
//         if(toggleSwitch.checked==false){
//           console.log(toggleSwitch.checked);
//           break;
//         }
//       }
//
//       function task(i){
//         setTimeout(function (){
//           var index = Math.floor(Math.random() * numbers.length);
//           var rolledNumber = numbers[index];
//           numbers.splice(index, 1);
//           pickedNumbers.push(rolledNumber);
//           $(".a" + rolledNumber).removeClass("pressed");
//           console.log(rolledNumber);
//           $(".lastNumber").text(rolledNumber);
//         soundPlay(rolledNumber);
//       },7000*i);
//       }
//     },5000);
//
//
//   }
//
//
// });

//     $(".roll").click(function() {
//       var index = Math.floor(Math.random() * numbers.length);
//       var rolledNumber = numbers[index];
//       numbers.splice(index, 1);
//       pickedNumbers.push(rolledNumber);
//       $(".a" + rolledNumber).removeClass("pressed");
//       console.log(rolledNumber);
//       $(".lastNumber").text(rolledNumber);
//       soundPlay(rolledNumber);
//     });
//
//
// function soundPlay(name) {
//   var audio = new Audio("sounds/a" + name + ".mp3");
//   audio.play();
// }



//
// function nextSequence(){
//   var index = Math.floor(Math.random()* numbers.length);
//   var rolledNumber = numbers[index];
//   numbers.splice(index,1);
//   pickedNumbers.push(rolledNumber);
// }
