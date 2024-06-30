// -------------------------------------------------------------------------------------- VARIABLES

// root
const root = document.querySelector(':root')
// buttons
const stylesButton = document.getElementById("styles")
// style buttons
var stylesVisibility = false
const stylesButtons = document.getElementsByClassName('styles')
const backgroundColorButton = document.getElementById("background-color")
const backgroundColorInput = document.getElementById("background-color-input")
const textColorButton = document.getElementById("text-color")
const textColorInput = document.getElementById("text-color-input")
const primaryColorButton = document.getElementById("primary-color")
const primaryColorInput = document.getElementById("primary-color-input")
const secondaryColorButton = document.getElementById("secondary-color")
const secondaryColorInput = document.getElementById("secondary-color-input")

// attatching event listeners
backgroundColorInput.addEventListener("input", backgroundColorChange, false)
backgroundColorInput.select()
//root.style.setProperty('--background')

// ---------------------------------------------------------------------------------------- BUTTONS

// display or hide styles buttons on click
function selectStyles() {
    stylesVisibility = stylesVisibility == true ? false : true
    if (stylesVisibility) { for (let i = 0; i < stylesButtons.length; i++) { stylesButtons[i].style.display = 'inline-block' }
    } else { for (let i = 0; i < stylesButtons.length; i++) { stylesButtons[i].style.display = 'none' } }
}

// --------------------------------------------------------------------------------- COLOR CHANGING

function changeColor(property) { document.getElementById(property + "-input").click() }

function backgroundColorChange(event) { root.style.setProperty('--background', event.target.value) }
function textColorChange(event) { root.style.setProperty('--text', event.target.value) }
function primary100ColorChange(event) { root.style.setProperty('--primary100', event.target.value) }
function primary65ColorChange(event) { root.style.setProperty('--primary65', event.target.value + '65') }
function secndary100ColorChange(event) { root.style.setProperty('--seocndary100', event.target.value) }
function secndary65ColorChange(event) { root.style.setProperty('--secondary65', event.target.value + '65') }