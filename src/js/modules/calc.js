import {
    getResource,
    postData
} from '../services/requests';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        btn = document.querySelector('.button-quick-order');

    let sum = 0;

    

    const calcFunction = (response) => {
        sum = Math.round(response.size.price[+sizeBlock.value] * response.material.price[+materialBlock.value] + response.options.price[+optionsBlock.value]);
        
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста выберите размер и материал картины.';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };



    // const calcFunction = () => {
    //     sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

    //     if (sizeBlock.value == '' || materialBlock.value == '') {
    //         resultBlock.textContent = 'Пожалуйста выберите размер и материал картины.';
    //     } else if (promocodeBlock.value === 'IWANTPOPART') {
    //         resultBlock.textContent = Math.round(sum * 0.7);
    //     } else {
    //         resultBlock.textContent = sum;
    //     }
    // };



    sizeBlock.addEventListener('change', function () {
        getResource('assets/calcDb.json')
            .then(response => calcFunction(response.values))
            .catch(error => console.log(error));
    });

    materialBlock.addEventListener('change', function () {
        getResource('assets/calcDb.json')
            .then(response => calcFunction(response.values))
            .catch(error => console.log(error));
            
    });
    
    optionsBlock.addEventListener('change', function () {
        getResource('assets/calcDb.json')
            .then(response => calcFunction(response.values))
            .catch(error => console.log(error));
           
    });
    
    promocodeBlock.addEventListener('input', function () {
        getResource('assets/calcDb.json')
            .then(response => calcFunction(response.values))
            .catch(error => console.log(error));
            
    });  
    
};

export default calc;