// Wrap every letter in a span
var textWrapper = document.querySelector('.dh .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline()
// for the LINE
  .add({
      targets: '.presents',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1000
  })
  .add({
    targets: '.dh .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1200
  })
  .add({
      targets: '.dh .line',
      translateX: [0, document.querySelector('.dh .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 1400,
      delay: 200
  })
// for each LETTER
  .add({
    targets: '.dh .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.dh',
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  })
  .add({
      targets: '.sub',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1000
  });

anime.timeline({loop: true})
  .add({
    targets: '.dh .line',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '.dh .line',
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 500
  });
