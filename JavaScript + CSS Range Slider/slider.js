const slider = document.querySelector('#myrange')
const output = document.querySelector('#value')

// udate the value according to the slider value
output.innerHTML = slider.value

// check slider value is greater than 0
// change the css background color
if (slider.value > 0 || slider.value < 0 ){
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + Math.abs(slider.value/2) + '%, rgb(214,214,214)' + Math.abs(slider.value/2) + '%)'
    slider.style.background = color
    console.log(color)
}

// to update output value, according the move of the slider value
slider.oninput = function (){
    output.innerHTML = this.value
}

// update the slider background value, according to the slider thumb position
slider.addEventListener('input', function (){
    const x = slider.value
    const color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x/2 + '%, rgb(214,214,214)' + x/2 + '%)'
    slider.style.background = color
    // console.log(color)
})