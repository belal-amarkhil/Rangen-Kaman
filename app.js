// پیام خوش آمدگویی در کنسول
console.log("Welcome to Rangen Kaman 🎨");


// دکمه مشاهده آثار

const button = document.querySelector("button");


button.addEventListener("click", function(){

    document.querySelector("#gallery").scrollIntoView({
        behavior:"smooth"
    });

});



// افکت ظاهر شدن کارت‌ها هنگام باز شدن صفحه

const cards = document.querySelectorAll(".card");


cards.forEach(function(card, index){

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";


    setTimeout(function(){

        card.style.transition = "0.6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";


    }, index * 200);


});




// کلیک روی دکمه خرید

const buyButtons = document.querySelectorAll(".card button");


buyButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        alert("نقاشی به لیست سفارش اضافه شد 🎨");

    });

});