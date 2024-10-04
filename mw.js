'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal)

for (let i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        
    });
}

const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
};

btnCloseModal.addEventListener('click',closemodal)

overlay.addEventListener('click',closemodal)

document.addEventListener('keydown',function(e){
    // if(e.key === 'Escape'){
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden')
    // }

    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        closemodal()
})