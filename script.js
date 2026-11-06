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


// function computerChoice() {
//     let choice = Math.random();
//     if (choice < 0.34) {
//         return 'камінь'
//     } else if (choice < 0.67) {
//         return 'ножниці'
//     } else {
//         return 'папір'
//     }
// }
// function playGame(hmn, cmp) {
//     let hmns = hmn.toLowerCase()
//     if (hmns === cmp) {
//      block.textContent = `Нічия! Ви обидва обрали ${hmns}`;
//     } else if
//         ((hmns === 'камінь' && cmp === 'ножниці') ||
//         (hmns === 'папір' && cmp === 'камінь') ||
//         (hmns === 'ножниці' && cmp === 'папір')
//     ) {
//        block.textContent =`Ти переміг ${hmns} перемагає ${cmp}`;

//     } else{
//         block.textContent = `Комп'ютер переміг! ${cmp} перемагає ${hmn}`;
//     }
// }


// let btnK = document.querySelector('.btnK');
// let btnN = document.querySelector('.btnN');
// let btnP = document.querySelector('.btnP');
// let block = document.querySelector('.block');

// btnK.addEventListener('click', function(){
//     let humanChoice = 'камінь';
//     let computerChce = computerChoice();
//     playGame(humanChoice, computerChce) 
// });

// btnN.addEventListener('click', function(){
//     let humanChoice = 'ножниці';
//     let computerChce = computerChoice();
//     playGame(humanChoice, computerChce);
// });

// btnP.addEventListener('click', function(){
//     let humanChoice = 'папір';
//     let computerChce = computerChoice();
//     playGame(humanChoice, computerChce);
// });


// let btnK = document.querySelector('.btnK');
// let btnN = document.querySelector('.btnN');
// let btnP = document.querySelector('.btnP');
// let block = document.querySelector('.block');

// function choiceCmp() {
//     let choice = Math.random();
//     if (choice < 0.34) {
//         return 'камінь'
//     } else if (choice < 0.67) {
//         return 'ножниці'
//     } else {
//         return 'папір'
//     }
// }

// function playGame(hmn, cmp) {
//     let hmnChs = hmn.toLowerCase();
//     if (hmnChs === cmp) {
//         block.textContent = `Нічия, вибір однаковий ${hmnChs}`;
//     } else if ((hmnChs === 'папір' && cmp === 'камінь') ||
//         (hmnChs === 'ножниці' && cmp === 'папір') ||
//         (hmnChs === 'камінь' && cmp === 'ножниці')){
//             block.textContent = `Ти переміг ${hmnChs} перемагає ${cmp}`
//         }else if((cmp === 'папір' && hmnChs === 'камінь') ||
//         (cmp === 'ножниці' && hmnChs === 'папір') ||
//         (cmp === 'камінь' && hmnChs === 'ножниці')){
//             block.textContent = `Ти програв ${cmp} перемагає ${hmnChs}`
//         }

// }

// btnK.addEventListener('click', function () {
//     let kam = 'камінь';
//     let cmpChs = choiceCmp();
//     playGame(kam, cmpChs)
// });

// btnN.addEventListener('click', function () {
//     let noj = 'ножниці';
//     let cmpChs = choiceCmp();
//     playGame(noj, cmpChs)
// });

// btnP.addEventListener('click', function () {
//     let pap = 'папір';
//     let cmpChs = choiceCmp();
//     playGame(pap, cmpChs)
// });


// let history = document.querySelector('.history');
// let num = document.getElementById('num');
// let btnPlus = document.querySelector('.plus');
// let minus = document.querySelector('.minus');
// let number = 0

// function plusMinis(plus, minus) {
//     plus.addEventListener('click', function () {
//         if (number >= 10) {
//             history.textContent = 'лічильник далі 10-ти не іде'
//             return
//         }
//         number++;
//         num.textContent = number
//     })
//     minus.addEventListener('click', function () {

//         if (number <= 0) {
//             history.textContent = 'нижче нуля лічильник не йде'
//             return
//         }
//         number--;
//         num.textContent = number


//     })

// }

// plusMinis(btnPlus, minus)
let products = ['apple', 'banana', 'orange'];
let input = document.querySelector('input');
let ul = document.querySelector('.append');
let list = document.getElementById('list')

function productsFav(e){
    e.forEach((pro) =>{
        let li = document.createElement('li');
        li.textContent = pro;
        ul.appendChild(li)
    })
}
productsFav(products)
input.addEventListener('input', function(e){
    let productInput = e.target.value.toLowerCase();

    let filterProducts = products.filter(function(item){
        return item.includes(productInput)
    })
    ul.innerHTML = ''

    for(let i = 0; i<filterProducts.length; i++){
        let product = filterProducts[i];
        let li = document.createElement('li');
        li.textContent = product;
        ul.appendChild(li)
    }
})
