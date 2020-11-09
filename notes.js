const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    
    const notes = loadNotes()

    // Create new note object from function argument
    const note ={
        title: title, 
        body: body
    }

    // Convert note object to JSON string
    const noteString = JSON.stringify(note)

    if (!(notes === null)) {
        // If file exists, append to file
        console.log("Appending to file")
        fs.appendFileSync('notes.json', noteString)
    }
    else { // If notes is null, file has not been created
        console.log("Writing file")
        fs.writeFileSync('notes.json', noteString)
    }

}

const loadNotes = function() {
    
    // Check to see if file for notes exists
    if (fs.existsSync('notes.json')) {

        // Return JSON data if file exists
        // Data must be converted from buffer, to string, to JSON object
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return dataJSON
        
    } else {
        // Return null if file doesn't exist
        return null
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
}