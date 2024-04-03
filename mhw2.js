//PROBLEMA CHIUSURA DELLA MODAL VIEW
//PROBLEMA EVENT.PREVENTDEFAULT



const navClick = document.querySelectorAll('.header_nav_lower span');
const popUpMenu = document.querySelectorAll('.pop_up_menu');
const closeButton = document.querySelectorAll('.close');
const images = document.querySelectorAll('.section-box img');
const header_scroll = document.querySelector('.header_scroll');
const white_bar = document.querySelector('.white');
const header_fix = document.querySelector('header');
const navClickScroll = document.querySelectorAll('.header_scroll span');
const search_icon = document.querySelector('.header_nav_lower img');
const modalView = document.querySelector('#modal_view');
const textBox = document.querySelector('.text_box');
const searchIconScroll = document.querySelector ('.header_scroll img');
const textBoxMail = document.querySelectorAll('.a');




function showMenu (event){
    const index = parseInt(event.currentTarget.dataset.index);
    for (p of popUpMenu){
        p.classList.add('hidden');
    }
    document.body.classList.add('no-scroll');
    switch(index){
        case 1:
            const popUpMenu1 = document.querySelector('#pop_up_m_v');
            popUpMenu1.classList.remove('hidden');
            break;
        case 2:
            const popUpMenu2 = document.querySelector('#pop_up_m_w');
            popUpMenu2.classList.remove('hidden');
            break;
        case 3:
            const popUpMenu3 = document.querySelector('#pop_up_m_a');
            popUpMenu3.classList.remove('hidden');
            break;
    }
}

for (n of navClick){
    n.addEventListener('click', showMenu);
}

for (n of navClickScroll){
    n.addEventListener('click', showMenu);
}

function hideMenu(){
    for (const p of popUpMenu){
        p.classList.add('hidden');
    }
    document.body.classList.remove('no-scroll');
}

for (const c of closeButton){
    c.addEventListener('click', hideMenu);    
}

function changeImg(event) {
    const image = event.currentTarget;
    const index = parseInt(image.dataset.index);
    switch (index) {
        case 1:
            image.src = 'images/s1_js.jpg';
            console.log('suca');
            break;
        case 2:
            image.src = 'images/s2_js.jpg';
            break;
        case 3:
            image.src = 'images/s3_js.jpg';
            break;
        case 4:
            image.src = 'images/s4_js.jpg';
            break;
        case 5:
            image.src = 'images/s5_js.avif';
            break;
        case 6:
            image.src = 'images/s6_js.jpg';
            break;
        case 7:
            image.src = 'images/s7_js.jpg';
            break;
        case 8:
            image.src = 'images/s8_js.webp';
            break;
    }
}

function resetImg(event) {
    const image = event.currentTarget;
    const index = parseInt(image.dataset.index);
    switch (index) {
        case 1:
            image.src = 'images/section_s1.webp';
            break;
        case 2:
            image.src = 'images/section_s2.jpg';
            break;
        case 3:
            image.src = 'images/section_s3.jpg';
            break;
        case 4:
            image.src = 'images/section_s4.jpg';
            break;
        case 5:
            image.src = 'images/section_s5.jpg';
            break;
        case 6:
            image.src = 'images/section_s6.jpg';
            break;
        case 7:
            image.src = 'images/section_s7.jpg';
            break;
        case 8:
            image.src = 'images/section_s8.jpg';
            break;
    }
}


for (const image of images) {
    image.addEventListener('mouseenter', changeImg);
    image.addEventListener('mouseleave', resetImg);
}

function checkScrolling(event)
{
    let scroll = document.documentElement.scrollTop;
    if(scroll > 0) 
    {
        header_scroll.classList.remove('hidden');
        white_bar.classList.remove('hidden');
        header_fix.classList.add('hidden');
        
    }
    else
    {
        header_scroll.classList.add('hidden');
        white_bar.classList.add('hidden');
        header_fix.classList.remove('hidden');
    }
}

document.addEventListener('scroll',checkScrolling);

function showSearchBar(){
    modalView.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

search_icon.addEventListener('click', showSearchBar);
searchIconScroll.addEventListener('click', showSearchBar);

function hideSearchBar(event){
        modalView.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        event.stopPropagation();
}

//modalView.addEventListener('click', hideSearchBar, {capture: true});
  
function onWriteText(){
    const newDiv = document.createElement("span");  
    newDiv.textContent='X';
    newDiv.classList.add('modal_view_div');
    modalView.appendChild(newDiv); 
    textBox.removeEventListener('input', onWriteText);
    newDiv.addEventListener('click', deleteText); 
}

textBox.addEventListener('input', onWriteText);

function deleteText(){
    textBox.value='';
}

function storeMail (event){
    const type=event.currentTarget.dataset.info;
    if(event.key === 'Enter'){
        event.currentTarget.value='';
        if(type === 'newsLetter'){
            event.currentTarget.placeholder="You are now subscribed.";
        }
        else {
            event.currentTarget.placeholder="We'll keep you posted!";
        }
    //event.preventDefault();
    event.currentTarget.disabled = true;
    event.currentTarget.removeEventListener('keypress', storeMail);
    }
}

for(t of textBoxMail){  
    t.addEventListener('keypress', storeMail);
}