const gradientText = document.querySelector('#hero-color-text')

var typewriter = new Typewriter(gradientText, {
    deleteSpeed:'natural',
    typingSpeed:'natural',
    loop: true,
  
});

typewriter.typeString('Accurate')
    .pauseFor(1500)
    .deleteAll(0)
    .typeString('Powerful')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Robust')
    .pauseFor(3500)
    .start();


const reviewCardsImgs = document.querySelectorAll(".login-container .profile-img")
const reviewCards = document.querySelectorAll(".login-container")
const reviewSection = document.querySelector("#reviewSection")

reviewCardsImgs.forEach((card, index)=>{
    if(index===0)
        card.style = "background:url(./Images/r1.jpeg);background-size:cover;"
    if(index===1)
        card.style = "background:url(./Images/r2.jpeg);background-size:cover;"
    if(index===2)
        card.style = "background:url(./Images/r3.jpeg);background-size:cover;"
})



const wiperTrack = document.querySelector(".wiper-track");
const wipes = Array.from(wiperTrack.children);
const wipePrevBtn = document.querySelector(".wiper-button__right");
const wipeNextBtn = document.querySelector(".wiper-button__left");
const wipeWidth = wipes[0].getBoundingClientRect().width;

const arrowsBehaviour = (wipePrevBtn, wipeNextBtn, index) => {
  if (index === 0) {
    wipePrevBtn.classList.add("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  } else if (index === wipes.length-1) {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.add("is-hidden");
  } else {
    wipePrevBtn.classList.remove("is-hidden");
    wipeNextBtn.classList.remove("is-hidden");
  }
};

const wipeSlide = (wiperTrack, activeSlide, nextSlide, targetIndex) => {
  wiperTrack.style.transform =
    "translateX(-" + (wipeWidth + 20) * (targetIndex - 1) + "px)";
  activeSlide.classList.remove("active-swipe");
  activeSlide.style.transform = "scale(1)";
  nextSlide.classList.add("active-swipe");
  nextSlide.style.transform = "scale(1.1)";
};

wipeNextBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.nextElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});
wipePrevBtn.addEventListener("click", (e) => {
  const activeSlide = wiperTrack.querySelector(".active-swipe");
  const nextSlide = activeSlide.previousElementSibling;
  const targetIndex = wipes.findIndex((slide) => slide === nextSlide);
  wipeSlide(wiperTrack, activeSlide, nextSlide, targetIndex);
  arrowsBehaviour(wipePrevBtn, wipeNextBtn, targetIndex);
});



////////
function myQuery4(x) {
    if (x.matches) { // If media query matches
      
      let t2 = gsap.timeline()
      t2.to(reviewSection,{scrollTrigger:{
          trigger:reviewSection,
          scrub:1,
          start:'0% center',
          end:'150% center'
      },
      opacity:1,
      y:"-5vh"
  })
      t2.to(reviewCards[0],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'00% center',
          end:'100% center'
      },
         x:"110vw"
      })
     
      t2.to(reviewCards[1],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'100% center',
          end:'100% center',
      },
         x:"-40vw"
      })
      t2.to(reviewCards[2],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'200% center',
          end:'100% center'
      },
          x:'110vw'
    
  })
  
    } else {
  
    }
  }

function myQuery3(x) {
    if (x.matches) { // If media query matches
      
      let t2 = gsap.timeline()
      t2.to(reviewSection,{scrollTrigger:{
          trigger:reviewSection,
          scrub:1,
          start:'0% center',
          end:'150% center'
      },
      opacity:1,
      y:"-5vh"
  })
      t2.to(reviewCards[0],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'00% center',
          end:'100% center'
      },
         x:"125vw"
      })
     
      t2.to(reviewCards[1],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'100% center',
          end:'100% center',
      },
         x:"-70vw"
      })
      t2.to(reviewCards[2],{scrollTrigger:{
          trigger:reviewCards[0],
          scrub:2,
          start:'200% center',
          end:'100% center'
      },
          x:'125vw'
    
  })
  
    } else {
  
    }
  }
  

function myQuery2(x) {
    if (x.matches) {
    let t1 = gsap.timeline()
    t1.to(reviewSection,{scrollTrigger:{
        trigger:reviewSection,
        scrub:1,
        start:'0% center',
          end:'150% center'
    },
    opacity:1,
    y:"-5vh"
})
    t1.to(reviewCards[0],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'0% center',
        end:'100% center'
    },
       x:"120vw"
    })
    t1.to(reviewCards[1],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'100% center',
        end:'200% center',
    },
       x:"-40vw"
    })
    t1.to(reviewCards[2],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'200% center',
        end:'250% center'
    },
        x:'120vw'
    })
}
else{}
}

function myQuery1(x) {
  if (x.matches) { // If media query matches
    
    let t2 = gsap.timeline()
    t2.to(reviewSection,{scrollTrigger:{
        trigger:reviewSection,
        scrub:1,
        start:'0% center',
          end:'150% center'
    },
    opacity:1,
    y:"-5vh"
})
    t2.to(reviewCards[0],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'00% center',
        end:'100% center'
    },
       x:"115vw"
    })
   
    t2.to(reviewCards[1],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'100% center',
        end:'100% center',
    },
       x:"-90vw"
    })
    t2.to(reviewCards[2],{scrollTrigger:{
        trigger:reviewCards[0],
        scrub:2,
        start:'200% center',
        end:'100% center'
    },
        x:'115vw'
  
})

  } else {

  }
}

// Create a MediaQueryList object
var x1 = window.matchMedia("(min-width: 300px) and (max-width: 500px)")
var x2 = window.matchMedia("(min-width: 500px) and (max-width: 700px)")
var x3 = window.matchMedia("(min-width: 700px) and (max-width: 900px)")
var x4 = window.matchMedia("(min-width: 900px)")
// Call listener function at run time
myQuery1(x1);
myQuery2(x2)
myQuery3(x3)
myQuery4(x4)
// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
}); 
////////

