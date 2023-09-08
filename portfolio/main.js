// import './style.css'

let screenScrollPosition;
let prevScrollpos = window.scrollY;
const centerSvgShape = document.querySelector('.background-svg_shape');
const imageDiv = document.querySelector('.image-div');
const skillDiv = document.querySelector('.about-skill');
const projectGallary = document.querySelector('.project-gallary');
const socialMessage = document.querySelector('.social-message');
const socialSection = document.querySelector('.social-section');
const backgroundSVG = document.querySelector('.background-svg');



//*********Change background shape on scroll********/

const scrollAnimation = () => {

  screenScrollPosition = Math.floor((window.scrollY + 50) / window.innerHeight);

  if (screenScrollPosition === 0) {
    centerSvgShape.setAttribute('d', 'M30.9,-29.9C38.8,-23,43.2,-11.5,43.1,-0.1C43.1,11.3,38.5,22.7,30.6,30.3C22.7,37.9,11.3,41.8,0.4,41.4C-10.6,41,-21.1,36.3,-28.8,28.7C-36.5,21.1,-41.4,10.6,-41.8,-0.4C-42.2,-11.3,-38,-22.5,-30.3,-29.5C-22.5,-36.4,-11.3,-39.1,0.1,-39.2C11.5,-39.3,23,-36.9,30.9,-29.9Z');
    centerSvgShape.setAttribute('transform', 'translate(50 50) scale(1)');
    imageDiv.style.left = '50%';
    imageDiv.style.opacity = '1';
    imageDiv.style.zIndex = '10';
    skillDiv.style.left = '25%';
    skillDiv.style.opacity = '0';
    projectGallary.style.opacity = '0';
    projectGallary.style.zIndex = '-1';
    backgroundSVG.style.width = innerWidth < 600 ? '55%' : '50%';
    backgroundSVG.style.height = '60vh';
    backgroundSVG.style.transform = 'translate(-50%, -85%)';
    socialMessage.style.opacity = '0';
    socialMessage.style.zIndex = '-1';
    socialSection.style.opacity = '0';
    socialSection.style.zIndex = '-1';
  }
  else if (screenScrollPosition === 1) {
    centerSvgShape.setAttribute('d', 'M16.5,-17.1C22.3,-10.7,28.5,-5.4,29.6,1.1C30.8,7.6,26.8,15.3,21.1,19.5C15.3,23.8,7.6,24.7,-0.1,24.8C-7.8,24.9,-15.7,24.2,-21,19.9C-26.4,15.7,-29.4,7.8,-28,1.4C-26.6,-5.1,-20.9,-10.1,-15.5,-16.5C-10.1,-22.9,-5.1,-30.6,0.2,-30.7C5.4,-30.9,10.7,-23.5,16.5,-17.1Z');
    centerSvgShape.setAttribute('transform', 'translate(50 50) scale(1.2)');
    imageDiv.style.left = '75%';
    imageDiv.style.opacity = '0';
    imageDiv.style.zIndex = '-1';
    skillDiv.style.left = '50%';
    skillDiv.style.opacity = '1';
    skillDiv.style.zIndex = '10';
    projectGallary.style.left = '25%';
    projectGallary.style.opacity = '0';
    projectGallary.style.zIndex = '-1';
    backgroundSVG.style.width = innerWidth < 600 ? '55%' : '50%';
    backgroundSVG.style.height = '60vh';
    backgroundSVG.style.transform = 'translate(-50%, -85%)';
  }
  else if (screenScrollPosition === 2) {
    centerSvgShape.setAttribute('d', 'M24.4,-22.4C29.9,-18.8,31.6,-9.4,32.2,0.6C32.7,10.6,32.2,21.1,26.7,25.6C21.1,30.2,10.6,28.6,1.5,27.1C-7.6,25.7,-15.2,24.2,-19.8,19.7C-24.4,15.2,-26.1,7.6,-26.1,0C-26.1,-7.6,-24.4,-15.2,-19.8,-18.7C-15.2,-22.2,-7.6,-21.7,0.9,-22.6C9.4,-23.5,18.8,-25.9,24.4,-22.4Z');
    centerSvgShape.setAttribute('transform', 'translate(50 50) scale(4.2, 2)');
    if(innerWidth <= 600)
    centerSvgShape.setAttribute('transform', 'translate(50 50) scale(2, 4.5)');
    skillDiv.style.left = '75%';
    skillDiv.style.opacity = '0';
    skillDiv.style.zIndex = '-1';
    imageDiv.style.opacity = '0';
    imageDiv.style.zIndex = '-1';
    projectGallary.style.left = '50%';
    projectGallary.style.opacity = '1';
    projectGallary.style.zIndex = '10';
    backgroundSVG.style.width = '100%';
    backgroundSVG.style.height = '100vh';
    backgroundSVG.style.transform = 'translate(-50%, -50%)';
    socialMessage.style.left = '25%';
    socialMessage.style.opacity = '0';
    socialMessage.style.zIndex = '-1';
    socialSection.style.opacity = '0';
    socialSection.style.zIndex = '-1';
  }
  else if (screenScrollPosition === 3) {
    centerSvgShape.setAttribute('d', 'M30.4,-25.9C37.9,-22.8,41.5,-11.4,38.2,-3.2C35,5,24.9,9.9,17.4,17.8C9.9,25.8,5,36.6,-0.8,37.5C-6.6,38.3,-13.1,29,-17.1,21C-21.2,13.1,-22.6,6.6,-24.9,-2.2C-27.1,-11,-30,-22,-26,-25.1C-22,-28.1,-11,-23.3,0.2,-23.5C11.4,-23.7,22.8,-29,30.4,-25.9Z');
    centerSvgShape.setAttribute('transform', 'translate(50 50) scale(1.2)');
    projectGallary.style.left = '75%';
    projectGallary.style.opacity = '0';
    projectGallary.style.zIndex = '-1';
    backgroundSVG.style.width = innerWidth < 600 ? '55%' : '50%';
    backgroundSVG.style.height = '60vh';
    backgroundSVG.style.transform = 'translate(-50%, -85%)';
    imageDiv.style.opacity = '0';
    imageDiv.style.zIndex = '-1';
    skillDiv.style.opacity = '0';
    skillDiv.style.zIndex = '-1';
    socialMessage.style.left = '53%';
    socialMessage.style.opacity = '1';
    socialMessage.style.zIndex = '10';
    socialSection.style.opacity = '1';
    socialSection.style.zIndex = '10';
  }


  //*******Hide menu on scroll down******** */


  let currentScrollPos = window.scrollY;
  if (prevScrollpos >= currentScrollPos) {
    document.querySelector(".nav-bar").style.top = "0";
  } else {
    document.querySelector(".nav-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

}

scrollAnimation();

window.addEventListener('scroll',scrollAnimation);


//***********Dark theme toggle**************/


const lightAndDarkModeToggle = document.querySelector('.dark-mode-toggle');

lightAndDarkModeToggle.onclick = () => {
  document.body.classList.toggle('dark-theme');
  lightAndDarkModeToggle.classList.toggle('fa-sun-o');
  lightAndDarkModeToggle.classList.toggle('fa-moon-o');
}