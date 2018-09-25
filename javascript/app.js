has_died = false;
class Tomagachi{
  constructor(name){
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
  }
}
const update_stats = () => {
  $('.name').html(`<h5 class="name">${tiger.name}</h5>`);
  $('.stats').html(`<p class="stats">
  Hunger: ${tiger.hunger}
  Boredom: ${tiger.boredom}
  Sleepiness: ${tiger.sleepiness}
  Age: ${tiger.age}
  </p>`)
  if(tiger.age > 10 && !has_died){
      $('.pet').parent().html('<image class="pet" src="images/animated_tiger.gif">');
  }
}
let interval;
let tiger;
const tick_loop = () => {
  tiger.age++;
  if(tiger.hunger >= 10 || tiger.sleepiness >= 10 || tiger.boredom >= 10){
    has_died = true;
    console.log('Your tiger has died!');
    $('.pet').parent().html('<image class="pet" src="images/dead_tiger.jpg"><p>Status: Dead</p>');
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
  update_stats();
}
const play = () => {
  tiger = new Tomagachi("Tiger");
  update_stats();
  interval = setInterval(tick_loop,1000);
}
$('#Feed_me').on('click',()=>{
  if(!has_died){
  tiger.hunger = 0;
  update_stats();
  }
})
$('#Pet_me').on('click',()=>{
  if(!has_died){
  tiger.boredom = 0;
  update_stats();
  }
})
$('#lights').on('click',()=>{
  if(!has_died){
  tiger.sleepiness = 0;
  update_stats();
  }
})
play();
