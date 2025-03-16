const button = document.querySelector('.butMotion')
console.log(button)
const bcov = document.querySelectorAll('.video')
console.log(bcov)

button.addEventListener('click', () => {
    bcov.forEach((e) => {
        e.classList.toggle('videot')
        console.log(bcov)
        console.log(button)
    })
})