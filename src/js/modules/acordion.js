const acordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
    
    const addActivityClass = (item) => {
        item.classList.toggle('active-style');
        item.nextElementSibling.classList.toggle('active-content');
        item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 80 + 'px';
    }

    const removeActivityClass = (item) => {
        item.classList.remove('active-style');
        item.nextElementSibling.classList.remove('active-content');
        item.nextElementSibling.style.maxHeight = '0px';
    }

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active-style')) {
                btns.forEach(btn => removeActivityClass(btn));
            } else {
                btns.forEach(btn => removeActivityClass(btn));
                addActivityClass(this);
            }


            //-----------------------------------------------------------------------------------------------------------
            // this.classList.toggle('active-style');
            // this.nextElementSibling.classList.toggle('active-content');

            // if (this.classList.contains('active-style')) {
            //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            // } else {
            //     this.nextElementSibling.style.maxHeight = '0px';
            // }
            //------------------------------------------------------------------------------------------------------------
        });
    });


    //------------------------------------------------------------------------------------------------------------
    //       blocks = document.querySelectorAll(itemSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
    //------------------------------------------------------------------------------------------------------------
    
};

export default acordion;