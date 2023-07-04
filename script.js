// const slides = document.querySelectorAll(".slide");
// // // поиск элемента по его селектору
// const bgColor = document.querySelector("body");
// // метод для назначения обработчиков событиz которое уже произошло
// bgColor.addEventListener('click',()=>{
//     bgColor.classList.add("bgColor")
// })
// bgColor.addEventListener('keydown', ()=>{
//     bgColor.classList.remove("bgColor")
// })

// // цикл for...of это когда задача стоит сделать однотипное действие много раз (к примеру вывести товары из списка один за другим один код прописываем и все)
// // проходимся по элементам массива
// for(const slide of slides){
//     console.log(slide)
//     // первое используем метод отслеживания в браузре (addEventlistener) второе в скобках указываем название события навести на элемент мышкой (mouseover) в данном случае третье вызываем функцию четвертое можем добавить к элементам класс active посредством обращения к элементам (slide) в нашем случае используем список классов (classList) и добовляем (add) класс (active)
//     slide.addEventListener('mouseover', ()=>{
//         clearActiveClasses()
//         addActiveClasses(slide)
//     })
// }
// // function (кусочек кода который сам по себе не работает пока мы не вызовем, помогает избавится от дублирования кода к примеру чтобы в ручную не писать один и тот же код по несколько раз достаточно вызвать функцию )
// // первое обьявить function второе название function третье круглые скобки это синтаксис в них указываем параметры или пустыми остовляем четвертое открываем фигурные скобки прописываем в теле код к примеру обратимся к модальному окну (alert) пишем alert открываем скобки и внутри через ковычки прописываем текст привет закрываем скобки круглые и в конце скобку фигурную
// function clearActiveClasses(){
//     for(const slide of slides){
//         slide.classList.remove('active')
//     }
// }
// function addActiveClasses(a){
//     // три точки говорят об ошыбки
//     a.classList.add('active')
// }

// const bgTittleh1 = document.querySelector("bgTittleh1");

// bgTittleh1.addEventListener('click', ()=>{
//     bgTittleh1.classList.add("bgTittleh1")
// })

// function tittle(){
//     classList.add("active")
// }

// bgColor.addEventListener('dbclick',()=>{
//     bgColor.classList.add("bgColor")
// })
// bgColor.addEventListener('contextmenu',()=>{
//     bgColor.classList.add("bgColor")
// })
// // З

// let age = prompt("введите возраст");

// age = Number(age);
// // age = String(age);
// newage = age + 50
// alert('через 50 лет вам будет'+ newage)





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

// Д/З от 14.06.23
// №1-2 (prompt)
// const userName = prompt("Введите свое имя ");
//     console.log(userName)

// const Location = prompt("Введите свое место проживания");
//     console.log(Location)

// const Birthofdate = prompt("Введите свою дату рождения");
//     console.log(Birthofdate)

// const PhoneNumber = prompt("Введите cвой номер телефона");
//     console.log(PhoneNumber)

// alert
// const UserName = ("Здраствуй Гиви");
//     alert(UserName)
// const Location = ("Ваша локация Москва?");
//     alert(Location)
// const Birthofdate = ("Ваша локация Москва?");
//     alert(Birthofdate)
// const PhoneNumber = ("Телефон указан верно?");
//     alert(PhoneNumber)
//     console.log(UserName)

// const Location = ("Как здорово что Вы из Москвы");
//     console.log(Location)
// const Birthofdate = ("Поздравляем Вас с днем рождением");
//     console.log(Birthofdate)
// const PhoneNumber = ("Ваш телефон дествительно соответствует?")
//     console.log(PhoneNumber)

// confirm
// const UserName = confirm("Ваше имя Георгий? ");
// console.log(UserName)

// const Location = confirm("Вы проживаете в Москве? ");
// console.log(Location)

// const Birthofdate = confirm("У вас день рождение 5 марта? ");
// console.log(Birthofdate)

// const PhoneNumber = confirm("Ваш телефон 79253550094? ");
// console.log(PhoneNumber)

// function printText(name, age) {
//     console.log('Hello my name is:' + name, 'Age:' + age )
// }
// let name = "Pavel"
// let age = 19
// printText('Peter', 15);
// printText(name, age);
// printText('Rick', 23);

// function printText(name, age) {
//     // возращаем данную строку (возращает значения но в концоль не выводит),  в консоль выводим за фигурной скобкой
//     return 'Hello my name is:' + name, 'Age:' + age 
// }
// let name = "Pavel"
// let age = 19
// alert(printText('Peter', 15));
// alert(printText(name, age));
// alert(printText('Rick', 23));
// альтернатива можем вывести с помощью ALERT тогда непридется новую функцию создовать
// Занятие 15.06.23
// let a = 88
// условный блок или конструкция первый шаг ключевое слово if (если) второе в (условие пример a>73) третий условие внутри тела действие
// если вместе пишится IF ELSE IF ELSE то это все одно условная единая конструкция в концоле выводится первое действие , а если писать if затем следом опять if это уже два разных условия и каждое из них будет выводится в консоль
// if(a>73){
//     console.log('условие выполняется');
// }
// // ключевое слово else (иначе) затем условие
// else if(a>77){
//     console.log('второе условие');
// }
// // в else не можем ставить условие
// else {
//     console.log('условие не выполняется');
// }

// let answer = confirm("Вы живете в Москве?")
// if (answer == true){
//     alert("Очень здорово")
// }else {
//     prompt("А где вы живете?")
// }

// let b = 14
// if(b<56){
//     console.log("условие выполнено");
// }
// else {
//     console.log("условие не выполняется");
// }
// let answer = confirm("Вы живете в Питере?")
// if(answer == true){
//     alert("Ну и хорошо")
// }
// else {
//     prompt("А где вы живете?")
// }

// let time = 10;
// let time = 16;
// let time = 20;

// if (time < 12){
//     // условие выполняется 10 меньше 12 значит в концоль выведится 'доброе утро' если равно 12 или больше 12 значит не будит выводится в концоль
//     console.log("доброе утро");
// }
// // доп. условие (иначе если) && - это и 
// else if (time >= 12 && time  < 18) {
//     console.log("добрый день");
// }
// else {
//     console.log("добрый вечер");
// }

// let phoneNumber = confirm("Ваш телефон верный?")
// if(phoneNumber == true {
//     console.log("Условие выполнилось");
// }

// let price = 330
// let price = 120
// 

// let year = prompt(" В каком году я был в Канаде?");
// if(year==2012){
//     alert("Вы указали верно");
//     alert ("Вы молодец");
// }
// let age = prompt("Сколько Вам лет?")
// if(age==29){
//     alert("Вы указали верно");
//     alert ("Вы молодец");
// }

// else {
//     alert("Вы указали не верно");
//     alert ("Вы не молодец");
// }
// let sallary = prompt("Cколько вы зарабатываете?");
// if(sallary > 55000) {
//     alert("Это малоч");
// }
// else if (sallary < 55000){
//     alert("Это много");
// }
// else {
//     alert("Это верно");
// }

// Д/З на 20.06.23
// №1
// const question = confirm("вы знаете английский язык ?");
//     console.log(question)

// const question2 = confirm("вы знаете немецкий язык ?");
//     console.log(question2)
// //   №2
// let question =  confirm("Вы знаете английский язык ?")
// if(question == true){
//    alert("Отлично");
// }
// // №3
// let question2 =  confirm("Вы знаете немецкий язык ?")
// if(question2 == false){
//    alert("Очень жаль");
//    console.log(question2)
// }
//  else {
//     prompt("как давно вы начале изучать этот язык?")
// }
// №4 (1,2 задачи)
// if ("0") {
//     alert("Привет");
// }
// const JavaScript = prompt("Какое офицальное название JavaScript?")
// if (JavaScript == "ECMAScript") {
//     alert("Верно");
// }
// else {
//     alert("Не знаете?");
//     alert("ECMAScript!");
// }
// const year = prompt("В каком году ты вернулся домой в Москву?")
// if (year < 2017) {
//     alert("слишком рано");
// }
// else if (year > 2017) {
//     alert("Cлищком поздно");
// }
// else {
//     alert("верно!");
// }


// 20.06.23
// let question2 = confirm("Вы знаете Итальянский ?")
// if (question2 == false) {
//     alert("Очень жаль");
//     let lunguage = prompt("А какой язык вы знаете?");
//     // методы toLowerCase приводит к нижниму регистру если сравнивать прописывать с маленьких
//     // методы toUpperCase приводит к верхниму регистру если сравнивать прописывать с больших
//     if (lunguage == "немецкий") {
//         alert("отлично");
//     }
//     // если пользователь ничего не ввел и нажал ок (выводи сообщение вы ничего не ввели) и если пользователь нажал отмена (выводи сообщение вы ничего не ввели)
//     else if (lunguage == '' || lunguage == null) {
//         alert("вы ничего не ввели");
//     }
//     // else {
//     //     alert("я вас не понимаю");
//     // }


// }

// else {
//     prompt("как давно вы начале изучать этот язык?")
// }
// д/з на 22.06.23
// let phoneNumber = prompt("Вы знаете номер телефона Александра?");
// if (phoneNumber == 89264557665){
//     alert("Хорошо");
// }
// else if (phoneNumber == '' || phoneNumber == null ) {
//     alert("Вы ничего не ввели");
// }
// else {
//     alert("нет, не знаю");
// }

// let phoneNumber = prompt("Вы знаете номер телефона Александра?");
// if (phoneNumber == 89264557665){
//     alert("Хорошо");
//     let homeNumber = prompt("А какой домашний телефон Александра?");
//     if (homeNumber.toLowerCase()== 8454545464){
//         alert("отлично");
//     }
// }
// else if (phoneNumber == '' || phoneNumber == null ) {
//     alert("Вы ничего не ввели");
// }
// else {
//     alert("нет, не знаю");
// }
// let price = confirm("Ты знаешь цену за аренду ?")
// if (price == 10000) {
//     alert("выгодно");
//     let costs = prompt("А какие расходы будут за ремонт?");
//     if (costs == 5000) {
//         alert("отлично")
//     }
// else if (costs == ''|| costs == null ){
//     alert('вы ничего не ввели');
// }
// else {
//     alert("это не выгодно")
// }
// }
// let testСomand = confirm("Вы знаете как выполнить эту команду? ");
// if ("testСomand == true"){
//     alert("отлично")
//     let testСomand2 = prompt("А какие другие команды вы знаете?");
//     if (testСomand2.toLowerCase == "АЛЬТ-КОМАНД-Ф"){
//         alert("отлично")
//     }
//     else if (){
//         alert("вы ничего не ввели")
//     }
//     else {
//         alert("команда не известна?")
//     }
// }
// // д/з 22.06.2023
// №1 вложение в ELSE
// let time = Number(prompt("c какого года вы изучаете этот язык"))
// let countYears = (2023 - time);
// // № 2
// // преобразововаем > или < в числовой тип данных
// // let countYears = Number(prompt("Вы знаете Итальянский"));
//     console.log(countYears);
// if (countYears>10){
//     alert("Вы изучаете этот язык больше 10 лет!")
// }
// else if (countYears>5){
//     alert("Вы изучаете этот язык больше 5 лет!")
//     }
// else {
//     alert("вы изучаете этот язык меньше 5 лет!")
//     }
// while - цикл это повторение одинаковых действий 
// let a = 8
// while(a>5){
//     a--
//     console.log(a);
// }
// let b = 2;
// while (b<100){
//     b++
//      console.log("Buy");
// }
// д/з на 27.06.23
// let a = 1000;
// while (a>900){
//     a++
//     console.log(a)
// }
// д/з на 27.06.23
// № 1  
// let i = 3;
// while (i) {
//     i--
//     alert(i)
// }
// последнее значение выведет код = 1 (та как итереация отрецательная, после проверки (while i), когда итерация будет = 0, то цикл остановится )
// не отсчитывает (проверка условия происходит i = 0)
// № 2 (WHILE) 
// ПРЕФИКСНЫЙ ВАРИАНТ: сперва увеличет значение на 1, а потом произойдет сравнение  2,3,4 так как ++ стоит перед переменной в конце цикл увеличит до 5 и условие будет выглядить 5<5  это не верно поэтому при запуски alert выводиться значение 4 последним 
// let i = 0;
// while (++i < 5) {
//     alert(i);
// }
//ПОСТФИКСНЫЙ ВАРИАНТ: первый шаг сравнение значение 0<5 запустем alert, второе шаг значение 2,3,4 сперва сравниваем затем увеличиваем затем запускаем alert, третий шаг окончание цикла =4 и сравниваем условие будет выглядить 4<5 верно после этого увеличиваем до 5 и выводим в alert последний цикл будет выведен =5 затем цикл закончиться будет false
// встроен счетчек (считает)
// let j = 0; 
// while (j < 5){
//     j++
//     alert(j);
// } 
// №3 (FOR) ПРЕФИКСНЫЙ ВАРИАНТ и ПОСТФИКСНЫЙ ВАРИАНТ
// первый шаг присвоение  i = 0 (начало) второе шаг проверяем условие (если 0 < 5 то true) третий шаг увеличиваем итерацию ++i или j++ и выводим в alert последний цикл будет =4 затем цикл закончиться будет false
// for (let i = 0; i < 5; ++i ){
//     alert(i)
// }

// for (let j = 0; j < 5; ++j ){
//     alert(j)
// }
// Оба цикла ПРЕФИКСНЫЙ ВАРИАНТ и ПОСТФИКСНЫЙ ВАРИАНТ выведут одинаковые значения 
// №4 (????)
// for (let i = 2; i <= 10; ++i) {
//     if(i % 2 == 0){
//         alert(i);
//     }
// }
// первое создаем переменную преравниваем, проверяем спрева, затем увеличичиваем значение
// for (let i=7; i <=12; ++i ){
//     if(i%7 == 5){
//         alert(i)  
//     }
// }
// д/з на 29.06.23
// №1
// for (let i = 5; i< 100; i++){
//     if(i % 2 == 1){
//         console.log(i)
//     }
// }
// №2

// let i = 0
// while(i<50){
// // если i деленное на 2 то равно четному числу
//     if(i%2 == 0){
//         console.log(i)
//     }
//     i++
// }

// function tests (a, b, c, d){
// if(a%b == 0 && a%c == 0 && a%d == 0)
//  console.log(a)
// }
// tests(23, 35, 56, 87)


// function example (a, b, c, d){
//     if(a%b == 0 && a%c == 0)
//     console.log("a кратно b и с")
//     if (d%a == 0 && d%b == 0)
//     console.log("d кратно a и b")
//     if(c%b == 0 && c%d == 0)
//     console.log("c кратно b и d")
// }
// example(12,24,48,96)
// example(9,15,24,27)
// example(9,9,9,9)

// Примеры на 04.07.23
// for (let i = 4; i < 20; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
// for (let i = 7; i < 30; i++){
//     if(i%2 == 1){
//         console.log(i) 
//     }
// }
// let i = 3
// while(i < 6){
// if(i%2 == 1){
//     console.log(i) 
// }
// ++i
// }
let i = 15
while(i > 12){
    if(i$2 == 1){
        console.log(i)
    }
++i
}