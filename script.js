const slides = document.querySelectorAll(".slide");
// поиск элемента по его селектору
const bgColor = document.querySelector("body");
// отследживает событие произшло что то или нет
bgColor.addEventListener('click',()=>{
    bgColor.classList.add("bgColor")
})
bgColor.addEventListener('keydown', ()=>{
    bgColor.classList.remove("bgColor")
})

// цикл for...of это когда задача стоит сделать однотипное действие много раз (к примеру вывести товары из списка один за другим один код прописываем и все)
// проходимся по элементам массива
for(const slide of slides){
    console.log(slide)
    // первое используем метод отслеживания в браузре (addEventlistener) второе в скобках указываем название события навести на элемент мышкой (mouseover) в данном случае третье вызываем функцию четвертое можем добавить к элементам класс active посредством обращения к элементам (slide) в нашем случае используем список классов (classList) и добовляем (add) класс (active)
    slide.addEventListener('mouseover', ()=>{
        clearActiveClasses()
        addActiveClasses(slide)
    })
}
// function (кусочек кода который сам по себе не работает пока мы не вызовем, помогает избавится от дублирования кода к примеру чтобы в ручную не писать один и тот же код по несколько раз достаточно вызвать функцию )
// первое обьявить function второе название function третье круглые скобки это синтаксис в них указываем параметры или пустыми остовляем четвертое открываем фигурные скобки это тело внутри тела пишем код к примеру обратимся к модальному окну (alert) пишем alert открываем скобки и внутри через ковычки прописываем текст привет закрываем скобки круглые и в конце скобку фигурную
function clearActiveClasses(){
    for(const slide of slides){
        slide.classList.remove('active')
    }
}
function addActiveClasses(a){
    // три точки говорят об ошыбки
    a.classList.add('active')
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

