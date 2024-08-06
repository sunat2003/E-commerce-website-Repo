//home section 
var bar = document.querySelector('#bar');
var nav = document.querySelector('.nav-links');
var close = document.querySelector('#close');


if (bar) {
    bar.addEventListener("click",
        () => {
            nav.classList.toggle('active')
        }
    )
}

if (close) {
    close.addEventListener("click",
        () => {
            nav.classList.remove('active')
        }
    )
}

//single product section

var mainImage = document.querySelector('#main-image');
var smallImage = document.querySelectorAll('.small-image');

smallImage[0].addEventListener('click',
    () => {
        mainImage.src = smallImage[0].src;
    }
)
smallImage[1].addEventListener('click',
    () => {
        mainImage.src = smallImage[1].src;
    }
)
smallImage[2].addEventListener('click',
    () => {
        mainImage.src = smallImage[2].src;
    }
)
smallImage[3].addEventListener('click',
    () => {
        mainImage.src = smallImage[3].src;
    }
)



