const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is David.');

/*
Challenge: Append a message to notes.txt.

1. Use appendFileSync to append to the file.
2. Run the script
3. Check your work by opening notes.txt and verifying appended text is there.
*/

fs.appendFileSync('notes.txt', '\nI am having fun learning node.js!')