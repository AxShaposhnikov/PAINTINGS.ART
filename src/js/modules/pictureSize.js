const pictureSize = () => {
    const sizePicturesBlocks = document.querySelectorAll('.sizes-block');

    sizePicturesBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.querySelector('img').src = block.querySelector('img').src.slice(0, block.querySelector('img').src.length - 4) + "-1.png" 
            block.querySelectorAll('p').forEach(pTag => {
                if (!pTag.classList.contains('sizes-hit')) {
                    pTag.style.display = 'none'
                }
            });
        });

        block.addEventListener('mouseleave', () => {
            block.querySelector('img').src =  block.querySelector('img').src.slice(0,  block.querySelector('img').src.length - 6) + ".png" 
            block.querySelectorAll('p').forEach(pTag => pTag.style.display = 'block');
        });
    });
};

export default pictureSize;