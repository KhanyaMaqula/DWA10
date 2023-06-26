window.addEventListener('load', () => {
    const MAX_NUMBER = 10;
    const MIN_NUMBER = -10;

    const add = document.querySelector('[data-add-sign]');
    const number = document.querySelector('[data-number-input]')
    const subtract = document.querySelector('[data-subtract-sign]')
    const reset= document.querySelector('[data-reset-input]')

   
   /**Function that checks if we passed the Limit
    * This is a from of Abstraction
    */
    const checkPassedLimits=(number, newValue)=>{
        
        if (number<= MIN_NUMBER) {
            add.disabled = false;
        }
        if (newValue >= MAX_NUMBER) {
            add.disabled = true;
            subtract.disabled = false;
        }

        if (newValue <= MIN_NUMBER) {
            subtract.disabled = true
            add.disabled = false;
       }
    }

    add.addEventListener("click", () => {
        const newValue = parseInt(number.value) + 1;
        number.value = newValue
        checkPassedLimits(number.value, newValue)
    })

    subtract.addEventListener('click',()=>{
        const newValue = parseInt(number.value) - 1;
        number.value = newValue
        checkPassedLimits(number.value, newValue)
    })

    reset.addEventListener('click', ()=>{
        number.value = 0
        popup.style.display = 'block';

        // Hide the popup after 2 seconds
        setTimeout(function() {
            popup.style.display = 'none';
        }, 1000);
    })


})
