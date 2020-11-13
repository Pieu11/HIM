menu = document.querySelector('.menu');
icon = document.querySelector('.icon-menu');
anchor = window.matchMedia('screen and (max-width: 699px)');

validation(anchor.matches);
anchor.addListener(validation);

function validation(event){
    if (anchor.matches){
        icon.addEventListener('click', show);
    }else{
        icon.removeEventListener('click', show);
        console.log('h');
    } 
}

function show(){
    if (menu.classList.contains('click')){
        menu.classList.remove('click');
    } else{
        menu.classList.add('click');
    }
}
