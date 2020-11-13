const fs = require('fs')
const chalk = require('chalk')
const { array } = require('yargs')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    
    const notes = loadNotes()

    // Check notes for duplicate titles
    const duplicateNotes = notes.filter((note) =>  note.title === title)

    if (duplicateNotes.length === 0) {

        // Add new note to list
    notes.push({
        title: title, 
        body: body
    })

    // Save notes if no duplicates found and inform user
    saveNotes(notes)
    logMessage("Notes added.")

    } else { // Note title already exists
        logError("Note already exists!!!")
    }
}

const removeNote = (title) => {
    
    const notes = loadNotes()

    // Check notes for title of note to be removed
    const remainingNotes = notes.filter((note) => note.title !== title)

    if (notes.length === remainingNotes.length) {
        logError("Note not found!!!")
    } else {
        saveNotes(remainingNotes)
        logMessage("Note has been removed.")
    }
}

const listNotes = () => {

    const notes = loadNotes()

    // Print title for each note
    logMessage("Your Notes: ")
    notes.forEach(note => {
        logMessage(note.title)        
    });
}

const logMessage = (message) => {
    console.log(chalk.bgCyan.bold.italic(message))
}

const logError = (message) => {
    console.log(chalk.bgRed.bold(message))
}

const saveNotes = (notes) => {

    // Convert data to JSON string and save to file
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    
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
    removeNote: removeNote,
    listNotes: listNotes
}