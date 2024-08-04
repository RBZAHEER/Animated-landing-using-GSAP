function page1Animation() {
  var tl = gsap.timeline();

  tl.from(".name ", {
    y: -30,
    duration: 0.7,
    opacity: 0,
  });
  tl.from(".about h4 ", {
    y: -30,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from(".left h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 1,
  });
  tl.from(".left p", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 1,
  });
  tl.from(".left button", {
    opacity: 0,
  });

  tl.from(
    "#section2 .right img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

  tl.from("#section3 img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.15,
  });
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: 1,
    },
  });
  tl2.from(".services", {
    x: -300,
    opacity: 0,
  });
  tl2.from(".container #left", {
    x: -300,
    opacity: 0,
  });
  tl2.from(".container #right", {
    x: 300,
    opacity: 0,
  });
}
function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section5",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 25%",
      scrub: 1,
    },
  });

  tl3.from(".card", {
    opacity: 0,
  });

  tl3.from(".card .leftcard", {
    opacity: 0,
    x: -400,
    duration: 0.8,
  });

  tl3.from(
    ".card .rightcard",
    {
      opacity: 0,
      x: 100,
    },
    "-=0.5"
  );
}
function page4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section6parent",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 50%",
      scrub: 1,
    },
  });

  tl4.from(".casestudy", {
    x: -300,
    opacity: 0,
  });

  tl4.from("#section6", {
    opacity: 0,
    duration: 0.8,
  });
  tl4.from("#section6 .reviewelem", {
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.5,
  });
}

page1Animation();
page2Animation();
page3Animation();
page4Animation();
