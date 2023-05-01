const wordArr = ['Computer Science Student', 'Web Developer', 'Problem Solver'];
const colors = ['yellow','orange'];

const word = document.querySelector('#introduction');
var ch = '|';

var index=0, letter=0;
var cnt = 0, _size = 3;
word.innerHTML = ch;
word.style.color = colors[1];
setInterval(()=>{
    if(letter === wordArr[index].length && cnt){
        cnt = (cnt + 1)%_size;
    }
    else if(letter < wordArr[index].length){
        if(letter != wordArr[index].length-1) word.textContent = word.textContent.slice(0,-1) + wordArr[index][letter++] + '|';
        else word.textContent = word.textContent.slice(0,-1) + wordArr[index][letter++];
        cnt=1;
    }
    else{
        word.textContent='';
        letter=0;
        word.style.color = colors[index%2];
        index = (index+1)%wordArr.length;
    }
},400);

// selects all the a elements that are within a nav element
const links = document.querySelectorAll('nav a');

// Loop through each link and add a click event listener
// var len = links.length;
// links.forEach(link => {
//     link.addEventListener('click', event => {
//     event.preventDefault();
//     const targetId = link.getAttribute('href');
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   });
// });

function scrollToSectionId(sectionId){
    var section = document.getElementById(sectionId);
    section.scrollIntoView({behavior : "smooth"});
}


const sentences=[['i','love','cricket','so','much'],
                 ['i','love','solving','dsa','problems'],
                 ['i','love','fullStack','Development'], 
                 ['i','like','cpp','and','python','as','programming','languages']];

const sentence=document.querySelector('#sentences');
var ind=1;
var wordNo=0;
ch = ' ';
var counter=0, size=5;
sentence.textContent='';
setInterval(()=>{
    if(wordNo === sentences[ind].length && counter){
        counter = (counter + 1)%size;
        sentence.textContent = sentence.textContent.slice(0,-1)+'.';
    }
    else if(wordNo<sentences[ind].length){
        sentence.textContent = sentence.textContent.slice(0,-1) + ch +sentences[ind][wordNo++] + "|";
        counter=1;
    }
    else{
        sentence.textContent = '';
        wordNo=0;
        ind = (ind+1)%(sentences.length);
    }
},500)




// var index=0;
// word.innerHTML = ch;
// setInterval(()=>{
//     var currentWord = word.textContent;
//     if(currentWord.length == 1){
//         word.innerHTML = wordArr[index];
//         word.style.color = colors[index%2];
//         index = (index+1)%(wordArr.length);
//     }
//     else{
//         let newWord = currentWord.slice(0,-2);
//         word.innerHTML = newWord+ch;
//     }
// },400);