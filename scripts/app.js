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
  var  myVar;
var toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('change',function(){

      if(toggleSwitch.checked){
        console.log("state = automate");

            myVar = setInterval(function(){
                  nextSequence();
            },7000);

      }
      else{
         console.log("state = stopped");
         stopAutomate();
      }
});
function stopAutomate(){
  clearInterval(myVar);
}
console.log(toggleSwitch.checked);

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
  soundPlay(rolledNumber);
}

function soundPlay(name) {
  var audio = new Audio("sounds/a" + name + ".mp3");
  audio.play();
}
