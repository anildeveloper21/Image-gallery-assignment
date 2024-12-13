function resizeImage(imageWrapper) {
    const allImageWrappers = document.querySelectorAll('.image-wrapper');
    allImageWrappers.forEach(wrapper => {
        wrapper.style.width = '28%';
        wrapper.classList.remove('clicked');
    });
    
    imageWrapper.style.width = '60%';
    imageWrapper.classList.add('clicked');
}

function resizeFirstImage() {
    const firstImageWrapper = document.querySelector('.container .image-wrapper');
    firstImageWrapper.style.width = '60%';
    firstImageWrapper.classList.add('clicked');
}