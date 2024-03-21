const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
} 


const storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];

const insertY = ["the soup kitchen","Disneyland","the White House"];

const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


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