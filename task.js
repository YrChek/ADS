const rotator = document.querySelector('.rotator')

function rotor(unit) {
    let first = unit.querySelector('.rotator__case')
    let rotatorActive = unit.querySelector('.rotator__case_active')
    let seconds = Number(rotatorActive.dataset.speed)
    let colors = rotatorActive.dataset.color
    rotatorActive.style.color = colors
    let timer = setInterval(() => {
        let next = rotatorActive.nextElementSibling
        rotatorActive.classList.remove('rotator__case_active')
        if (next) {
            next.classList.add('rotator__case_active')
        } else {
            first.classList.add('rotator__case_active')
        }
        clearInterval(timer)
        rotor(rotator)
    }, seconds);
}
rotor(rotator)