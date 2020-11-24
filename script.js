let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let slide = document.querySelectorAll('.item');

let index = 0;


btnLeft.addEventListener('click', function() {
    index--;

    if(index < 0) {
        index = slide.length-1;
    }

    currentSlide(index);
    hideSlide(index);

});

function currentSlide(index) {
    console.log(index);
    slide[index].classList.add('active');
}

function hideSlide(index) {
    slide.forEach(function(item, i) {
        if(index != i) {
            item.classList.remove('active');
            console.log(item);
        }
    });
}

btnRight.addEventListener('click', function() {
    index++;

    if(index >= slide.length) {
        index = 0;
    }

    currentSlide(index);
    hideSlide(index);


});

currentSlide(index);