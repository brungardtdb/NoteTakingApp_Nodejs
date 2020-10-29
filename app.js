const chalk = require('chalk')
const getNotes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function() {
        console.log('Adding a new note.')
    }
})

// Create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove a note.', 
    handler: function() {
        console.log('Removing a note.')
    }

})

// Setup list command
yargs.command({
    command: 'list',
    describe: 'List notes.',
    handler: function() {
        console.log('Listing notes.')
    }
})

// Setup read command
yargs.command({
    command: 'read',
    describe: 'Reading note(s).',
    handler: function(){
        console.log('Reading note(s).')
    }
})

// add, remove, read, list

console.log(yargs.argv)