// -------------------------------------------------------------------------------------- VARIABLES

// buttons
const filesButton = document.getElementById("files")
// file buttons
var filesVisibility = false
// save and upload buttons
var saveVisibility = uploadVisibility = false
const saveButtons = document.getElementsByClassName('save')
const uploadButtons = document.getElementsByClassName('upload')

// ---------------------------------------------------------------------------------------- BUTTONS

function selectFromFiles() {
    filesButtons = document.getElementsByClassName('files')
}

// display or hide save buttons on click
function selectFile() {
    filesVisibility = filesVisibility == true ? false : true
    if (filesVisibility) { for (let i = 0; i < filesButtons.length; i++) { filesButtons[i].style.display = 'grid' }
    } else { for (let i = 0; i < filesButtons.length; i++) { filesButtons[i].style.display = 'none' } }
}

// display or hide save buttons on click
function selectSave() {
    saveVisibility = saveVisibility == true ? false : true
    if (saveVisibility) { for (let i = 0; i < saveButtons.length; i++) { saveButtons[i].style.display = 'inline-block' }
    } else { for (let i = 0; i < saveButtons.length; i++) { saveButtons[i].style.display = 'none' } }
}

// display or hide upload buttons on click
function selectUpload() {
    uploadVisibility = uploadVisibility == true ? false : true
    if (uploadVisibility) { for (let i = 0; i < uploadButtons.length; i++) { uploadButtons[i].style.display = 'inline-block' }
    } else { for (let i = 0; i < uploadButtons.length; i++) { uploadButtons[i].style.display = 'none' } }
}

// ----------------------------------------------------------------------------------- SAVE OPTIONS

function saveRozy() {
    console.log(getComputedStyle(root).getPropertyValue('--primary100'))
}