const fs = require('fs')
const { array } = require('yargs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    
    const notes = loadNotes()

    // Check notes for duplicate titles
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {

        // Add new note to list
    notes.push({
        title: title, 
        body: body
    })

    // Save notes if no duplicates found and inform user
    saveNotes(notes)
    console.log("Notes added.")

    } else { // Note title already exists
        console.log("Note already exists!!!")
    }
}

const removeNote = function (title) {
    
    const notes = loadNotes()

    // Check notes for title of note to be removed
    const remainingNotes = notes.filter(function (note){
        return note.title !== title
    })

    if (notes.length === remainingNotes.length) {
        console.log("Note not found!!!")
    } else {
        saveNotes(remainingNotes)
        console.log("Note has been removed.")
    }

}

const saveNotes = function(notes) {

    // Convert data to JSON string and save to file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function() {
    
        try {
            // Return JSON data if file exists
            // Data must be converted from buffer, to string, to JSON object
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)         

        } catch (error) {
            // Return empty list if file isn't found
            return []
        }        
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}