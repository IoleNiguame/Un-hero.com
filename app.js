const button = document.querySelector('.liensAv')
console.log(button)
const bcov = document.querySelectorAll('.coveri')
console.log(bcov)

button.addEventListener('click', () => {
    bcov.forEach((e) => {
        e.classList.toggle('coverit')
        console.log(bcov)
        console.log(button)
    })
})