
const count = document.querySelector('.count')
const changeBy = document.querySelector('.changeBy')
const resetbtn = document.querySelector('.resetbtn')


const decrement = document.querySelector('.minus-btn')

decrement.addEventListener('click', () => {
    const changebyValue = parseInt(changeBy.value)
    count.innerText = parseInt(count.innerText) - changebyValue
})


const increment = document.querySelector('.plus-btn')
increment.addEventListener('click', () => {
    const changebyValue = parseInt(changeBy.value)
    count.innerText = parseInt(count.innerText) + changebyValue
})


resetbtn.addEventListener('click', () => {
    count.innerText = 0;
})


// learning

// It begins by grabbing certain elements from the webpage using CSS class selectors. 
// These elements are the counter display(count), an input field to specify how much to change the count by(changeBy), and a button to reset the count to zero(resetbtn).
// So, in essence, this code sets up a basic counter with the ability to increment, decrement, and reset the count, all based on user interactions with the webpage. It's a practical demonstration of how to manipulate HTML elements and respond to user actions using JavaScript.