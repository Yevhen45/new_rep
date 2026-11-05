// // 1. Знаходимо наш головний контейнер із HTML
// const container = document.querySelector("#container");

// // 2. Створюємо абзац <p> з червоним текстом
// const redParagraph = document.createElement("p");
// redParagraph.style.color = "red";
// redParagraph.textContent = "Гей, я червоний!";
// container.appendChild(redParagraph); // Додаємо на сторінку

// // 3. Створюємо заголовк <h3> з синім текстом
// const blueHeader = document.createElement("h3");
// blueHeader.style.color = "blue";
// blueHeader.textContent = "Я синій h3!";
// container.appendChild(blueHeader); // Додаємо на сторінку

// // 4. Створюємо окремий <div> з рамкою та рожевим фоном
// const pinkDiv = document.createElement("div");
// pinkDiv.style.border = "2px solid black";
// pinkDiv.style.backgroundColor = "pink";

// // 4.1. Створюємо <h1> для цього div
// const divHeading = document.createElement("h1");
// divHeading.textContent = "Я в div";

// // 4.2. Створюємо абзац <p> для цього div
// const divParagraph = document.createElement("p");
// divParagraph.textContent = "Я ТЕЖ!";

// // 4.3. Спочатку закидаємо <h1> та <p> ВСЕРЕДИНУ нашого pinkDiv
// pinkDiv.appendChild(divHeading);
// pinkDiv.appendChild(divParagraph);

// // 4.4. І тільки тепер додаємо весь цей готовий div у загальний container на сторінці
// container.appendChild(pinkDiv);

// let container = document.querySelector('#container')

// let redParagraph = document.createElement('p');
// redParagraph.textContent = 'Гей я веровний';
// redParagraph.style.color = 'red';

// container.appendChild(redParagraph);

// let blueText = document.createElement('h3');
// blueText.style.color = 'blue';
// blueText.textContent = 'Я синій h3!';

// container.appendChild(blueText);

// let blockDiv = document.createElement('div');
// blockDiv.style.border = '2px solid black';
// blockDiv.style.color = 'black';
// blockDiv.style.background = 'pink';

// container.appendChild(blockDiv);

// let textH1 = document.createElement('h1');
// textH1.textContent = 'Я в div';
// blockDiv.appendChild(textH1);

// let ImToo = document.createElement('p');
// ImToo.textContent = 'Я ТЕЖ!';
// blockDiv.appendChild(ImToo)

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', ()=>{
//     alert('Привіт')
// })

// let magicBtn = document.getElementById('magic-btn');
// magicBtn.addEventListener('click', (e)=>{
//         e.target.classList.toggle('green');
//         if(e.target.textContent === 'Натисни мене'){
//             e.target.textContent = 'Зроблено!'
//         }else{
//             e.target.textContent = 'Натисни мене'
//         }
// })

// let btn = document.getElementById('btn');

// function targetBtn (e){
//     e.target.classList.toggle('green')
//     if(e.target.textContent === 'Натисни мене'){
//         e.target.textContent = 'Зроблено!'
//     }else{
//         e.target.textContent = 'Натисни мене';
//     }
// }

// btn.addEventListener('click', targetBtn)


// let products = ['banan', 'apple', 'tomato', 'strowbery'];
// console.log(products[0]);
// console.log(products[3]);
// console.log(products.length)
// //////////////////////////////////////
//  let products = ['banan', 'apple', 'tomato', 'strowbery'];
//  products.forEach((product) =>{
// let finishResult = product + ' мій улюблений продукт'
// console.log(finishResult)
//  })
// //////////////
// for(let i = 0; i< products.length; i++){
//     let product = products[i] + ' мій улюблений продукт'
//     console.log(product)
// }
// /////////////////////////////////

// let block = document.querySelector('.block');
// block.style.border = '2px solid black'
// let redH1 = document.createElement('h1');
// redH1.style.color = 'red';
// redH1.textContent = 'Привіт світ'
// block.appendChild(redH1);

// let paragraph = document.createElement('p');
// paragraph.textContent = 'Привіт світ';
// paragraph.style.color = 'blue';
// block.appendChild(paragraph)

// let btn = document.getElementById('btn')
// function click(e){

//    if(e.target){
//     prompt('прпуак')
//    }
// }
// btn.addEventListener('click',click)


function computerChoice() {
    let choice = Math.random();
    if (choice < 0.34) {
        return 'камінь'
    } else if (choice < 0.67) {
        return 'ножниці'
    } else {
        return 'папір'
    }
}
function playGame(hmn, cmp) {
    let hmns = hmn.toLowerCase()
    if (hmns === cmp) {
     block.textContent = `Нічия! Ви обидва обрали ${hmns}`;
    } else if
        ((hmns === 'камінь' && cmp === 'ножниці') ||
        (hmns === 'папір' && cmp === 'камінь') ||
        (hmns === 'ножниці' && cmp === 'папір')
    ) {
       block.textContent =`Ти переміг ${hmns} перемагає ${cmp}`;

    } else{
        block.textContent = `Комп'ютер переміг! ${cmp} перемагає ${hmn}`;
    }
}


let btnK = document.querySelector('.btnK');
let btnN = document.querySelector('.btnN');
let btnP = document.querySelector('.btnP');
let block = document.querySelector('.block');

btnK.addEventListener('click', function(){
    let humanChoice = 'камінь';
    let computerChce = computerChoice();
    playGame(humanChoice, computerChce) 
});

btnN.addEventListener('click', function(){
    let humanChoice = 'ножниці';
    let computerChce = computerChoice();
    playGame(humanChoice, computerChce);
});

btnP.addEventListener('click', function(){
    let humanChoice = 'папір';
    let computerChce = computerChoice();
    playGame(humanChoice, computerChce);
});
