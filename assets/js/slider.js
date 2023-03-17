(function (){
    
    //buscamos todos los elementod que tengan la clase testimony-body 
    // luego lo encerramos emntro de corchetes para que ya no sea un nodo de elementos
    // si no que sea una array

    const slider = [...document.querySelectorAll('.testimony-body')]; 
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=> {
        // console.log(add);

        const currentTestimony = document.querySelector('.testimony-show').dataset.id;
        // console.log(currentTestimony)
        value = Number(currentTestimony);
        value+= add;

        slider[Number(currentTestimony)-1].classList.remove('testimony-show');

        if(value === slider.length+1 || value === 0){
            value = value === 0 ? slider.length : 1;
        }

        slider[value-1].classList.add('testimony-show');
        // console.log(value)
    }

    // console.log(slider)
})();