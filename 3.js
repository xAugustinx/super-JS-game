let jakDuzoMango = 300;

let iloscMango = 0;

function nowyObiekt()
{
    const nE = document.createElement('img');
    console.log('Utworzono element:', nE);

    nE.setAttribute('id','obiektMango');

    nE.style.width = '5%';
    nE.style.height= 'auto';

    nE.src = '1.png';

    nE.style.zIndex = 1;

    nE.style.position = 'absolute';
    nE.classList.add('superKlasa')
    nE.style.top = Math.floor(Math.random() * window.innerHeight) - nE.height / 2;
    nE.style.right = Math.floor(Math.random() * window.innerWidth);

    document.body.appendChild(nE);

    jakDuzoMango = jakDuzoMango - 2;

    iloscMango++;

    document.getElementById('licznik').textContent = iloscMango;

}

document.addEventListener('keydown', function(event) {
    jakDuzoMango = jakDuzoMango - 10;
    clearInterval(mangoInterval); 
    mangoInterval = setInterval(nowyObiekt, jakDuzoMango);
});

document.getElementById('przycisk').addEventListener('click', function() {
    jakDuzoMango = jakDuzoMango - 10;
    clearInterval(mangoInterval); 
    mangoInterval = setInterval(nowyObiekt, jakDuzoMango);
});


const mangoInterval = setInterval(function() {
    nowyObiekt();
},jakDuzoMango );
