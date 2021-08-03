const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.querySelector('.menu');
const footer = document.getElementById('footer-container');
const slogan = document.getElementById('slogan-footer');
const middleContainer = document.getElementById('middle-container-footer');
const bottomContainer = document.getElementById('bottom-container-footer');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOverlay.classList.add('open');
            footer.classList.add('hidden');
            slogan.classList.add('hidden');
            middleContainer.classList.add('hidden');
            bottomContainer.classList.add('hidden');
            menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOverlay.classList.remove('open');
        footer.classList.remove('hidden');
        slogan.classList.remove('hidden');
        middleContainer.classList.remove('hidden');
        bottomContainer.classList.remove('hidden');
        menuOpen = false;
    }
});

// Waypoint handlers
const firstWaypoint = new Waypoint({
    element: document.getElementById('welcome'),
    handler: function(direction) {
        let firstContent = document.getElementById('cell-content-1');
        if(direction === 'down') {
            firstContent.classList.add('animate__animated', 'animate__fadeIn');
            firstContent.style.setProperty('--animate-duration', '3s');
        } else if(direction === 'up') {
            firstContent.classList.remove('animate__animated', 'animate__bounce');
        } 
    },
    offset: 400
});

const secondWaypoint = new Waypoint({
    element: document.getElementById('our-mission'),
    handler: function(direction) {
        let secondContent = document.getElementById('cell-content-2');
        if(direction === 'down') {
            secondContent.classList.add('animate__animated', 'animate__fadeIn');
            secondContent.style.setProperty('--animate-duration', '3s'); 
            secondContent.style.setProperty('--animate-fill-mode', 'forwards'); 
        } else if(direction === 'up') {
            secondContent.classList.remove('animate__animated', 'animate__bounce');
        } 
    },
    offset: 400
});

const thirdWaypoint = new Waypoint({
    element: document.getElementById('our-mission-2'),
    handler: function(direction) {
        let thirdContent = document.getElementById('cell-content-3');
        if(direction === 'down') {
            thirdContent.classList.add('animate__animated', 'animate__fadeIn');
            thirdContent.style.setProperty('--animate-duration', '3s'); 
            thirdContent.style.setProperty('--animate-fill-mode', 'forwards'); 
        } else if(direction === 'up') {
            thirdContent.classList.remove('animate__animated', 'animate__bounce');
        } 
    },
    offset: 400
});

const fourthWaypoint = new Waypoint({
    element: document.getElementById('book-us'),
    handler: function(direction) {
        let fourthContent = document.getElementById('cell-content-4');
        if(direction === 'down') {
            fourthContent.classList.add('animate__animated', 'animate__fadeIn');
            fourthContent.style.setProperty('--animate-duration', '3s'); 
            fourthContent.style.setProperty('--animate-fill-mode', 'forwards'); 
        } else if(direction === 'up') {
            fourthContent.classList.remove('animate__animated', 'animate__bounce');
        } 
    },
    offset: 400
});

const cellOne = document.getElementById('cell-content-1');
const covidBanner = document. querySelector('.covid-banner-top');
const covidBannerRemove = document.getElementById('banner-close-btn');

cellOne.addEventListener('mouseover', () => console.log('mouse has entered'));
// Event Listener Function for Removing Covid Banner
const closeBanner = () => {
    covidBannerRemove.addEventListener('click', () => {
        covidBanner.classList.add("hidden");     
});
}

// Covid Banner Appearance Delay


