// ------------------------------------------------------------------------------------------ NOTES

// get css property
// src = https://stackoverflow.com/questions/51638974/can-i-print-a-css-style-property-to-the-console-using-javascript
// console.log(window.getComputedStyle(______, null).getPropertyValue("_____"))

// -------------------------------------------------------------------------------------- VARIABLES

// buttons
const insertButton = document.getElementById("insert")
// insert buttons
var insertVisibility = false
const insertButtons = document.getElementsByClassName('insert')
const audioButton = document.getElementById("audio")
const documentButton = document.getElementById("document")
const imageButton = document.getElementById("image")
const textButton = document.getElementById("text")
const videoButton = document.getElementById("video")
// hidden inputs
const audioInput = document.getElementById("audio-input")
const documentInput = document.getElementById("document-input")
const imageInput = document.getElementById("image-input")
const textInput = document.getElementById("text-input")
const videoInput = document.getElementById("video-input")

// acceptable file types and function (MIME type)
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [ "image/gif", "image/jpeg", "image/png", "image/webp", "text/plain", "video/mpeg", "video/mp4", "video/quicktime", "application/pdf", "audio/mpeg", "audio/wav" ]
function validFileType(file) { return fileTypes.includes(file.type) }

// ---------------------------------------------------------------------------------------- BUTTONS

// display or hide insert buttons on click
function selectFileType() {
    insertVisibility = insertVisibility == true ? false : true
    if (insertVisibility) { for (let i = 0; i < insertButtons.length; i++) { insertButtons[i].style.display = 'inline-block' }
    } else { for (let i = 0; i < insertButtons.length; i++) { insertButtons[i].style.display = 'none' } }
}

// ------------------------------------------------------------------------------- HELPER FUNCTIONS

// listen for textarea autoresize
// src = https://www.geeksforgeeks.org/how-to-create-auto-resize-textarea-using-javascript-jquery/
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// ---------------------------------------------------------------------- FILE UPLOAD FUNCTIONALITY

// accept files
// src = https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
function uploadFile(type) { document.getElementById(type + "-input").click() }

// audio file procedure
audioInput.addEventListener("change", receiveAudio)
function receiveAudio() {
    // if file amnt and file type is correct, accept and create file node
    if (audioInput.files.length != 1) { console.log("%c" + "input 1 file", bad)
    } else if (!validFileType(file) || !file.type.startsWith('audio')) { console.log("%c" + "invalid file type", bad)
    } else {
    }
}

// document/application file procedure
documentInput.addEventListener("change", receiveDocument)
function receiveDocument() {
    // if file amnt and file type is correct, accept and create file node
    if (documentInput.files.length != 1) { console.log("%c" + "input 1 file", bad)
    } else if (!validFileType(file) || !file.type.startsWith('application')) { console.log("%c" + "invalid file type", bad)
    } else {
    }
}

// image file procedure
imageInput.addEventListener("change", receiveImage)
function receiveImage() {
    // if file amnt and file type is correct, accept and create file node
    var file = imageInput.files[0]
    if (imageInput.files.length != 1) { console.log("%c" + "input 1 file", bad)
    } else if (!validFileType(file) || !file.type.startsWith('image')) { console.log("%c" + "invalid file type", bad)
    } else {
        // --------------------------------------------------------------------------- TAKE IN FILE
        // read in file onto new image
        var image = document.createElement("img")
        var name = file.name
        var type = image.type = file.type
        var content = image.content = file
        var src = image.src = URL.createObjectURL(file)
        var txt = `${name}`
        var links = []
        // create object
        folderFiles.push({ name: name, type: type, content: content, src: src, txt: txt, links: links })
        // -------------------------------------------------------------- FUNCITONALITY AND DISPLAY
        // button
        var button = document.createElement("button")
        button.className = 'files'
        button.textContent = file.name
        folderFilesList.appendChild(button)
        // fileNode buttons
        var del = document.createElement("button")
        del.textContent = 'delete'
        del.className = 'small-button'
        var replace = document.createElement("button")
        replace.textContent = 'replace content'
        replace.className = 'small-button'
        var nodeButtons = document.createElement("div")
        nodeButtons.append(del)
        nodeButtons.append(replace)
        nodeButtons.className = 'node-buttons'
        var add = document.createElement("button")
        add.textContent = '+ new'
        // fileNode elements (image already created)
        var heading = document.createElement("h1")
        heading.textContent = name
        heading.contentEditable = true
        var captioning = document.createElement("textarea")
        captioning.textContent = 'insert text here...'
        captioning.addEventListener('input', autoResize, false)
        // assemble content and functionality
        var functionalDiv = document.createElement("div")
        functionalDiv.append(heading)
        functionalDiv.append(captioning)
        functionalDiv.append(add)
        functionalDiv.className = 'functionality'
        var fileContentDiv = document.createElement("div")
        fileContentDiv.append(image)
        fileContentDiv.append(nodeButtons)
        fileContentDiv.className = 'file-content'
        // assemble total div
        var nodeDiv = document.createElement("div")
        nodeDiv.className = 'file-node'
        nodeDiv.id = name + 'node'
        nodeDiv.append(fileContentDiv)
        nodeDiv.append(functionalDiv)
        document.body.append(nodeDiv)
    }
    imageInput.files = null
}

// text file procedure
textInput.addEventListener("change", receiveText)
function receiveText() {
    // if file amnt and file type is correct, accept and create file node
    if (textInput.files.length != 1) { console.log("%c" + "input 1 file", bad)
    } else if (!validFileType(file) || !file.type.startsWith('text')) { console.log("%c" + "invalid file type", bad)
    } else {
    }
}

// video file procedure
videoInput.addEventListener("change", receiveVideo)
function receiveVideo() {
    // if file amnt and file type is correct, accept and create file node
    if (videoInput.files.length != 1) { console.log("%c" + "input 1 file", bad)
    } else if (!validFileType(file) || !file.type.startsWith('video')) { console.log("%c" + "invalid file type", bad)
    } else {
    }
}