const slider = document.querySelector('#myrange')
const output = document.querySelector('#value')

output.innerHTML = slider.value

// check slider value is greater than 0
// change the css background color
if (slider.value > 0 || slider.value < 0 ){
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + Math.abs(slider.value/2) + '%, rgb(214,214,214)' + Math.abs(slider.value/2) + '%)'
    slider.style.background = color
    console.log(color)
}

slider.oninput = function (){
    output.innerHTML = this.value
}

slider.addEventListener('input', function (){
    const x = slider.value
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x/2 + '%, rgb(214,214,214)' + x/2 + '%)'
    slider.style.background = color
    // console.log(color)
})