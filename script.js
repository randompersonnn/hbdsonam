var slider1 = document.getElementById("r1");
var slider2 = document.getElementById("r2");
var slider3 = document.getElementById("r3");
var slider4 = document.getElementById("r4");
var slider5 = document.getElementById("r5");
var slider6 = document.getElementById("r6");
var slider7 = document.getElementById("r7");
var slider8 = document.getElementById("r8");
var slider9 = document.getElementById("r9");
var slider10 = document.getElementById("r10");

var sliderst = document.getElementById("rst")

 var layer1 = document.getElementById("l1");
 var layer2 = document.getElementById("l2");
 var layer3 = document.getElementById("l3");
 var layer4 = document.getElementById("l4");
 var layer5 = document.getElementById("l5");
 var layer6 = document.getElementById("l6");
 var layer7 = document.getElementById("l7");
 var layer8 = document.getElementById("l8");
 var layer9 = document.getElementById("l9");
 var layer10 = document.getElementById("l10");
 
 var layerst = document.getElementById("lst");

 var frame1 = document.getElementById("if1");
 var frame2 = document.getElementById("if2");
 var frame3 = document.getElementById("if3");
 var frame4 = document.getElementById("if4");
 var frame5 = document.getElementById("if5");
 var frame6 = document.getElementById("if6");
 var frame7 = document.getElementById("if7");
 var frame8 = document.getElementById("if8");
 var frame9 = document.getElementById("if9");
 var frame10 = document.getElementById("if10");

 var framest = document.getElementById("ifst");

var src1 = "skg/6/index.html"
var src2 = "skg/7/rain.html"
var src3 = "https://www.youtube.com/embed/Qiiz4ya62uM"
// var src4 = "skg/10/index.html"
// var src5 = "skg/12/index.html"
// var src6 = "skg/13/index.html"
// var src7 = ""
// var src8 = ""
// var src9 = "skg/14/index.html"
// var src10 = "https://www.youtube.com/embed/3G9t-EzQeU4"
// var srcst = "last.html"

var audio1 = document.getElementById("audio1")

var output = document.getElementsByClassName("sk");
// output.innerHTML = slider1.value;

audio1.play();
audio1.volume = 0.8

frame1.src = src1
slider1.oninput = function() {
  // output.innerHTML += " " + this.value;
  // layer1.style.opacity = 1 - this.value/100  
  if(this.value > 95){
    remsrc()
    layer1.style.display = "none"
    frame2.src = src2;
    audio1.pause();
    setslide()
  }
}

slider2.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer2.style.display = "none"
    frame3.src = src3
    setslide()
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer1.style.display = ""
    frame1.src = src1
    audio1.play()
    setslide()
    
  }
}

slider3.oninput = function() {

  // if(this.value > 95){
  //   remsrc()
  //   layer3.style.display = "none"
  //   frame4.src = src4;
  //   // audio1.play()
  //   setslide()
  // }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer2.style.display = ""
    frame2.src = src2
    // audio1.pause()
    setslide()
    
  }
}

slider4.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer4.style.display = "none"
    frame5.src = src5
    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer3.style.display = ""
    frame3.src = src3
    setslide()
    
  }
}

slider5.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer5.style.display = "none"
    frame6.src = src6
    audio1.pause()
    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    
    // layer2.style.display = "none"
    layer4.style.display = ""
    frame4.src = src4
    setslide()
    
  }
}
slider6.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer6.style.display = "none"
    frame7.src = src7

    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer5.style.display = ""
    frame5.src = src5
    setslide()
    
  }
}

slider7.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer7.style.display = "none"
    frame8.src = src8
    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer6.style.display = ""
    frame6.src = src6
    setslide()
    
  }
}
slider8.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer8.style.display = "none"
    frame9.src = src9
    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer7.style.display = ""
    frame7.src = src7
    setslide()
    
  }
}
slider9.oninput = function() {
  if(this.value > 95){
    remsrc()
    layer9.style.display = "none"
    frame10.src = src10
    setslide()
    
  }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer8.style.display = ""
    frame8.src = src8
    setslide()
    
  }
}
slider10.oninput = function() {
  // if(this.value > 95){
  //   remsrc()
  //   layer10.style.display = "none"
  //   framest.src = srcst
  //   setslide()
    
  // }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer9.style.display = ""
    frame9.src = src9
    setslide()
    
  }
}


sliderst.oninput = function() {
  // if(this.value > 95){
  //   remsrc()
  //   layer10.style.display = "none"
  //   // frame10.src = src10
  //   setslide()
  // }
  if(this.value < 5){
    remsrc()
    // layer2.style.display = "none"
    layer10.style.display = ""
    frame10.src = src10
    setslide()
    
  }
}


  // function hidedisplay(s){
  //     var num = parseInt(s.slice(1))
  //     for(i = 0; i<=10; i++){
        
  //     }

  // }

function setslide() {
    slider1.value = 0;
    slider2.value = 50;
    slider3.value = 100;
    slider4.value = 50;
    slider5.value = 50;
    slider6.value = 50;
    slider7.value = 50;
    slider8.value = 50;
    slider9.value = 50;
    slider10.value = 100;

    sliderst.value = 100;
  }

function remsrc() {
  frame1.src = ""
  frame2.src = ""
  frame3.src = ""
  frame4.src = ""
  frame5.src = ""
  frame6.src = ""
  frame7.src = ""
  frame8.src = ""
  frame9.src = ""
  frame10.src= ""

  framest.src= ""
}  




























































































// slider1.oninput = function() {
//   output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   layer1.style.opacity = 1 - this.value/100

//   if(this.value == 100){
//       // layer1.style.display = "none"
//   }
// }

// slider2.oninput = function() {
//   // output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   // layer2.style.opacity = Math.abs(this.value/50)
//   hidedisplay(layer2)
//   if(this.value > 95){
//       // document.getElementById("l2").style.display = "none"
//       // hid
//       hidedisplay(layer2)
//     }
//     if(this.value < 5){
//     // document.getElementById("l1").style.display = ""
//   }
// }

// slider3.oninput = function() {
//   // output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   // layer2.style.opacity = Math.abs(this.value/50)
//   hidedisplay(layer2)
//   if(this.value > 95){
//       // document.getElementById("l2").style.display = "none"
//       // hid
//       hidedisplay(layer2)
//     }
//     if(this.value < 5){
//     // document.getElementById("l1").style.display = ""
//   }
// }