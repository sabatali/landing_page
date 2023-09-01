

const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
   nav.style.display = 'flex';
   openNavBtn.style.display = 'none';
   closeNavBtn.style.display = 'inline-block';

}

openNavBtn.addEventListener('click', openNav)

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
 
 }
 
 closeNavBtn.addEventListener('click', closeNav)






//  typewriter


 const text = document.querySelector(".typewriter");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "SECURTY SYSTEM";

            }, 0);
            setTimeout(() => {
                text.textContent = "SMART LAMP";
            }, 4000);
            setTimeout(() => {
                text.textContent = "CCTV CONTROL";
            }, 8000);

        }
        textLoad();
        setInterval(textLoad, 12000);
