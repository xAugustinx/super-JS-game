const mangoMusztarda = document.getElementById('playerTexture');

const mangoMusztardaPrzeciwnik = document.getElementById('enemyTexture');




document.addEventListener('keydown', function(event) {
    const currentTopString = window.getComputedStyle(mangoMusztarda).top;
    let newTopValue = parseFloat(currentTopString);

    const curentRightString = window.getComputedStyle(mangoMusztarda).right;
    let newRightValue = parseFloat(curentRightString);

    if (event.key === "w") { newTopValue = newTopValue - 5; }
    if (event.key === "s") { newTopValue= newTopValue + 5;}

    if (event.key === "d") { newRightValue = newRightValue - 5;}
    if (event.key === "a") { newRightValue = newRightValue + 5;}

    mangoMusztarda.style.top = newTopValue + 'px';
    mangoMusztarda.style.right = newRightValue + 'px';

    const rect1 = mangoMusztarda.getBoundingClientRect();
    const rect2 = mangoMusztardaPrzeciwnik.getBoundingClientRect();

    
    if (rect1.left < rect2.right &&  rect1.right > rect2.left &&  rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
        mangoMusztardaPrzeciwnik.style.right = Math.floor(Math.random() * window.innerWidth) + 1;
        mangoMusztardaPrzeciwnik. style.top = Math.floor(Math.random() * window.innerHeight) + 1;
    }



});