(function () {
    const btn = document.querySelectorAll('.btn')
    let count = 0

    btn.forEach(function (button) {
        button.addEventListener('click', () => {
            if (button.classList.contains('lower')) {
                count--
            } else if (button.classList.contains('upper')) {
                count++
            }
            
            const counter = document.querySelector('#counter')
            counter.textContent = count

            if (count < 0) {
                counter.style.color = 'red'
            } else if (count > 0) {
                counter.style.color = 'green'
            } else {
                counter.style.color = '#333333'
            }
        })
    })
})()
