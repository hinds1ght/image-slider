let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let container = document.querySelector('.container');
let slideWidth = document.querySelector('.images').offsetWidth;
let dotNav = document.querySelectorAll('.dot');
let dotsContainer = document.querySelector('.dotsContainer');
let currentIndex = 0;
let interval;

function showSlide(index) {
    container.style.transform = `translateX(-${index * slideWidth}px)`;
};

next.addEventListener('click', ()=>{
    cleanUp();
    currentIndex = (currentIndex + 1) % container.children.length;
    dotNav[currentIndex].classList.add('active');
    showSlide(currentIndex);
    stopInterval()
    startInterval()
});

prev.addEventListener('click', ()=>{

    cleanUp();
    currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
    dotNav[currentIndex].classList.add('active');
    showSlide(currentIndex);
    stopInterval()
    startInterval()
})

dotNav.forEach((dots, index) => {
    dots.addEventListener('click', () =>{
        if(dots.classList.contains('one')){
            cleanUp()
            dots.classList.add('active');
            currentIndex = index;
            showSlide(currentIndex)
            stopInterval()
            startInterval()
        } else if (dots.classList.contains('two')) {
            cleanUp(); 
            dots.classList.add('active');
            currentIndex = index;
            showSlide(currentIndex)
            stopInterval()
            startInterval()    
        } else {
            cleanUp();
            dots.classList.add('active');
            currentIndex = index;   
            showSlide(currentIndex)
            stopInterval()
            startInterval()
        }
    })
})

startInterval();

function startInterval(){
    interval = setInterval(autoNext, 5000);  
}

function stopInterval(){
    clearInterval(interval);
}

function autoNext(){
    cleanUp();
    currentIndex = (currentIndex + 1) % container.children.length;
    showSlide(currentIndex);
    dotNav[currentIndex].classList.add('active');
}

function cleanUp(){
    dotNav.forEach(dots => {
        dots.classList.remove('active');
    })
}
