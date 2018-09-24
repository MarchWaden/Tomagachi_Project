class Tomagachi{
  constructor(name){
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
}
let interval;
let tiger;
const tick_loop = () => {
  $('.name').html(`<h5 class="name">${tiger.name}</h5>`);
  $('.stats').html(`<p class="stats">
  Hunger: ${tiger.hunger}
  Boredom: ${tiger.boredom}
  Sleepiness: ${tiger.sleepiness}
  </p>`)
  if(tiger.hunger >= 10 || tiger.sleepiness >= 10 || tiger.boredom >= 10){
    console.log('Your tiger has died!');
    $('.pet').parent().html('');
    clearInterval(interval);
  }
  if (Math.random() < .2){
    tiger.hunger++;
  }
  if (Math.random() < .2){
    tiger.sleepiness++;
  }
  if (Math.random() < .8){
    tiger.boredom++;
  }
  console.log('tick')
}
const play = () => {
  tiger = new Tomagachi("Tiger");
  interval = setInterval(tick_loop,1000);
}
$('#Feed_me').on('click',()=>{
  tiger.hunger = 0;
  tick_loop();
})
$('#Pet_me').on('click',()=>{
  tiger.boredom = 0;
  tick_loop();
})
$('#lights').on('click',()=>{
  tiger.sleepiness = 0;
  tick_loop();
})
play();
