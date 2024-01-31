const navbar = document.getElementById('navbar');

const nav = document.getElementById('nav');

const close = document.getElementById('close');

if(navbar)
{
  navbar.addEventListener('click', () =>{

    nav.classList.add('active');
  });
}

if(close)
{
  close.addEventListener('click', () =>{
    nav.classList.remove('active');
  });
}

var scroll =new SmoothScroll('a[href*="#"]',{
  speed: 1000,
  speedAsDuration: true
  
  
  });