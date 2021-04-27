// var num = 23;
// var num2 = 33;

// console.log("Вычитание: " + (num - num2));
// console.log("Сложение: " + (num + num2));

// var num3 = 7;

// num3 += 7;
// console.log(num3)

// var number = 13;


// if (number > 14) {
//     console.log("Правильно")
// } else if (number == 13) {
//     console.log("Это другое число!")
// } else {
//     console.log("Неверно!");
// }

// let human = "Владимир";
// let age = 16;
// let Home = false;
// let isMarried = false;

// if (isMarried == true && age > 17) {
//     console.log("Ты женат")
//     alert("Поздравляю");
// } else if (isMarried == false && age < 17) {
//     console.log(human + " " + "ты к сожелению не женат!");
// } if (Home == true && isMarried == false) {
//     alert("Ты не женат но у тебя есть дом: ")
//     prompt("Опиши твой дом: ");
// }




// for (let num = 0; num < 6; num++) {
//     console.log(num);
// }

// const header = document.querySelector(".header");

// const links = document.querySelectorAll(".nav-links");

// const testbtn = document.querySelector("#TestBtn");


// window.addEventListener("scroll", checkScroll)
// document.addEventListener("DOMContentLoaded", checkScroll)


// function checkScroll() {
//         let scrollPos = window.scrollY;
//         if (scrollPos > 0) {
//             header.classList.add('red');
//         } else {
//             header.classList.remove('red');
//         } 
// }


// for (let navItem of links) {
//     navItem.addEventListener("click", function() {
//         console.log(navItem.text)
//     })
// }


const tabs_btn = document.querySelectorAll(".tabss");
const tabs_items = document.querySelectorAll(".text-tab")


tabs_btn.forEach(TabsClick); 

function TabsClick (item) {
    tabs_btn.forEach(function(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let Tabid = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(Tabid);
    
            if (! currentBtn.classList.contains('active')) {
                tabs_btn.forEach(function(item) {
                    item.classList.remove("active")
                });
        
                tabs_items.forEach(function(item) {
                    item.classList.remove("active")
                })
        
                currentBtn.classList.add("active");
                currentTab.classList.add("active");
            }
        })
    });
}