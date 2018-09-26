has_died = false;
bottom_right = false;
has_morphed = false;
class Tomagachi{
  constructor(name){
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
  }
}
const tiger_top_right = {
  left: "+=400",
}
const tiger_top_left = {
  margin: [0,0,0,0]
}
const tiger_bottom_right = {
  margin: [200,0,0,400]
}
const tiger_bottom_left = {
  margin: [200,0,0,0]
}
const update_stats = () => {
  $('.name').html(`<h5 class="name">${tiger.name}</h5>`);
  $('.stats').html(`<p class="stats">
  Hunger: ${tiger.hunger}
  Boredom: ${tiger.boredom}
  Sleepiness: ${tiger.sleepiness}
  Age: ${tiger.age}
  </p>`)
  if(tiger.age > 10 && !has_died && !has_morphed){
      $('.pet').parent().html('<image class="pet" src="images/animated_tiger.gif">');
      has_morphed = true;
  }
}
let interval;
let tiger;
let tiger_animation_interval;
const tiger_animation = () => {
  if(!has_died && !bottom_right){
    console.log('trying to animate tiger')
    $('.pet').animate({margin: "+=200"},3000);
  }
  if(!has_died && bottom_right){
    $('.pet').animate({margin: "-=200"},3000);
  }
  if(has_died){
    clearInterval(tiger_animation_interval)
  }
  bottom_right = !bottom_right;
}
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
  tiger_animation_interval = setInterval(tiger_animation,3000);

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
