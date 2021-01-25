const quizDB=[
    {
        question:" Q1.what is the full form of 'HTML' ",
        a:'hyper topic markap language',
        b:'hyper text mark language',
        c:'hyper text markup language',
        d:'hight text mark lanmguage',
        ans:'ans3'
    },
    {
        question:" Q2.what is the full form of 'CSS'  ",
        a:'case cading style sheet',
        b:'caste cadining mark language',
        c:'case  cading  markup language',
        d:'hight text mark lanmguage',
        ans:'ans1'
    },
    {
        question:" Q3.what is the full form of 'JS' ",
        a:'java language',
        b:'javascript language',
        c:'jotty language',
        d:'joy lanmguage',
        ans:'ans2'
    },
    {
        question:" Q4.what is the full form of  'MERN' ",
        a:'mongooo ,express,react,nodi language',
        b:'moogoose,express,react,node language',
        c:'MooD Express mark lanmguage',
        d:'mongodb,express,react,node',
        
        ans:'ans4'
    },



];
let question= document.querySelector('.question');
let ques1= document.querySelector('#option1');
let ques2= document.querySelector('#option2');
let ques3= document.querySelector('#option3');
let ques4= document.querySelector('#option4');
let answers= document.querySelectorAll('.answer')
let btn=document.querySelector('#btn');
let showtext=document.querySelector('#answershow');
let questionCount=0;
let score=0;

const loadquestion =()=>{
  
   
  
   question.innerHTML=quizDB[questionCount].question;
   ques1.innerHTML=quizDB[questionCount].a;
   ques2.innerHTML=quizDB[questionCount].b;
   ques3.innerHTML=quizDB[questionCount].c;
   ques4.innerHTML=quizDB[questionCount].d;
   console.log(quizDB)
}
loadquestion()
const getcheckedlist =()=>{
    let answer;

 answers.forEach((curEle)=>{
       if(curEle.checked){
        answer= curEle.id;
       
       

       }

   })
   return answer;
  

}
// define deselecting function  
const  deselecte =()=>{
    answers.forEach((curEle)=> curEle.checked =false);

}

btn.addEventListener('click',()=>{
    
    let checkedId=getcheckedlist();
    console.log(checkedId)
    if(checkedId===quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    // deselecting 
    deselecte();
    if(questionCount < quizDB.length){
        loadquestion();
    }else{
        showtext.innerHTML=`<h3 class="anstext">you have score ${score} / ${questionCount} !!</h3> 
        <button class="btn2" onclick="location.reload()">Try Again</button>
        `;
        showtext.classList.remove='showArea';
    }
})





