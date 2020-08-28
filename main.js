const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const header = document.querySelector(".header")

function* createId(){
    let count = 1;
    while(true){
        yield(` ID: ${count}`)
        count++;
    }
} 
  const idGenerator = createId();
  btn.addEventListener("click",() =>{
  btn1.innerHTML = idGenerator.next().value;
  })
  

  //завдання виконано без використання генератора
  function fontSizePlus(){
     let step = 2;
     let curFont = parseInt(header.style.fontSize);
     header.style.fontSize = (curFont+step) + 'px';
  }
function fontSizeMinus(){
     let step =-2;
     let curFont = parseInt(header.style.fontSize);
     header.style.fontSize = (curFont+step) + 'px';
}
plus.addEventListener("click",fontSizePlus);
minus.addEventListener("click",fontSizeMinus);

