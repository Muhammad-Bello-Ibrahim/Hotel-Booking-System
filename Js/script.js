let hamburger = document.getElementById('hamburger');
let navigation = document.getElementById('navigation');
let navs = document.getElementById('navs');

hamburger.addEventListener('click', () => {
    if (navigation.className == "navigations" && navs.className == "navs") {
        navigation.classList.toggle('active');
        navs.classList.toggle('actived');
        console.log('im gud');
    } else {
        navigation.className = "navigations"
        navs.className = "navs"
        console.log('error')
    }
});

// single room changing image onclick function

let imagePicker = document.getElementById('img-1');
let imgePicker = document.getElementById('img-2')
let imgPicker = document.getElementById('img-3')
let bigShower = document.getElementById('shower');

imagePicker.addEventListener('click', () => {
    bigShower.src = imagePicker.src
    console.log('success');

})
imgePicker.addEventListener('click', () => {
    bigShower.src = imgePicker.src
    console.log('success');

})
imgPicker.addEventListener('click', () => {
    bigShower.src = imgPicker.src
    console.log('success');

})
