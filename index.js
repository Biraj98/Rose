
for(var i=0; i<7; i++) {


document.querySelectorAll("hr")[i].addEventListener("click", function() {
   var myButton= this.getAttribute("class");

  switch (myButton) {
    case "hr1":
    var audio= new Audio("sounds/7.mp3");
         audio.play();
      break;
      case "hr2":
      var audio= new Audio("sounds/6.mp3");
           audio.play();
           break;
           case "hr3":
           var audio= new Audio("sounds/5.mp3");
                audio.play();
             break;
             case "hr4":
             var audio= new Audio("sounds/4.mp3");
                  audio.play();
               break;
               case "hr5":
               var audio= new Audio("sounds/3.mp3");
                    audio.play();
                 break;
                 case "hr6":
                 var audio= new Audio("sounds/2.mp3");
                      audio.play();
                   break;
                   case "hr7":
                   var audio= new Audio("sounds/1.mp3");
                        audio.play();
                     break;
    default:
   console.log("no click");
  }
})
}
