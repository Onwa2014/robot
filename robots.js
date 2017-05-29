var robot = document.querySelectorAll(".light");
console.log(robot);
var txtbox = document.querySelector(".time");

txtbox.addEventListener('change', function(){
  var time = txtbox.value;
  robot[0].classList.remove('off');
  robot[1].classList.remove('off');
  robot[2].classList.remove('off');

  if(time <= 10){
    robot[0].classList.add('off');
    robot[2].classList.add('off');

   }
  else if(time > 10 && time <= 20){
    robot[1].classList.add('off');
    robot[2].classList.add('off');

  }
  else if (time > 20 && time <=30){
    robot[0].classList.add('off');
    robot[1].classList.add('off');
  }
  else{
    robot[0].classList.add('off');
    robot[1].classList.add('off');
    robot[2].classList.add('off');

  }

  document.querySelector('.time').value = " ";
})
