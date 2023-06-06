const slides = document.querySelectorAll(".slide");
for(const slide of slides){
    console.log(slide)
    slide.addEventListener('mouseover', ()=>{
        clearActiveClasses()
        slide.classList.add('active')
    })
}
// function (кусочек кода который сам по себе не работает пока мы не вызовем, помогает избавится от дублирования кода )
function clearActiveClasses(){
    for(const slide of slides){
        slide.classList.remove('active')
    }
}





// вызываем функцию название ее затем сохраняем внутри функции расчет и третье возращаем из функции значение
// function summ (a,b) {
//     let s = a + b
//     return s
// }
// вызываем в концоле передаем
// summ (4,5)

// document.querySelectorAll(".slide");
// console.log(document.querySelectorAll(".slide"))
// let fruits = ["apple", "orange","lemon", "grape"];
// // Д/З на 05.06.23
// const slides = document.querySelectorAll(".slide");
// console.log(slides);

// // Д/З querySelector
// const container = document.querySelector(".container");
// console.log(container);
// // Д/З задачи по переменной №1
// let admin, username;
// username =  "Джон";
//  admin =  username;
//  alert(admin);
// // Д/З задачи по переменной №2
//  let ourPlanetName = "Земля";
//  let currentUserName = "Эдик"
// //  Д/З задачи на массивы (задача №1)
// // создаем ключевое слово массив и внутри массива элементы
// let styles = ["Джаз","Блюз"];
// // добовляем в конец массива новый элементы с помощью функции (push)
// styles.push = ["Рок-н-ролл"];
// // заменить элемент на другой элемент
// styles[Math.floor((styles.length-1)/2)] = "Классика";

// // функция (alert) выводит, показывающая в модульном окне сообщение и ждет пока пользователь нажмет ок только потом пользователь сможет взаимодействовать с интерфейсом нажимать кнопки и т.д.
// // удаляем первый элемент из очереди с помощью функции (shift)
// alert(styles.shift());
// // добовляем  в начало массива новые элементы с помощью функции (unshift)
// styles.unshift("Рэп", "Рэгги");

