const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
} 


const storyText = "It was a wonderful day outside, so :insertx: went for a hike. When they got to :inserty:, they stared in shock for a couple minutes, then :insertz:. Campbell saw the whole thing, but she was not upset — :insertx: weighs 10000 grams, and it was a sunny day.";

const insertX = ["Campbell Cat","Purple Person","Mother Mary"];

const insertY = ["the local park","California","The Effiel Tower"];

const insertZ = ["crumpled up","fell to the floor", "jump into the air and grew"];


randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = newStory.replace(":insertx:",xItem);
    var newStory = newStory.replace(":inserty:",yItem);
    var newStory = newStory.replace(":insertz:",zItem);
    var newStory = newStory.replace(":insertx:",xItem); 

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Campbell', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature =  Math.round(94);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}