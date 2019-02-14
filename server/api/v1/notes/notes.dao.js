const noteModel = require('./notes.entity');
const uuidv1 = require('uuid/v1');

// handels to insert newly created note into the database
const createNote = (userId, note) => {

  return new Promise((resolve, reject) => {

    let newNote = new noteModel({
      id: uuidv1(),
      title: note.title,
      text: note.text,
      userId: userId
    });

    newNote.save((err, note) => {
      if (err) {
        logger.error(err);
        reject({
          message: 'Internal Server Error',
          status: 500
        });
      } else {
        resolve({
          note: note,
          message: 'Note is added successfully',
          status: 201
        });
      }
    });
  });
};

const getNoteForUserID = (userID) => {
  // console.log('getting note for userID : ', userID);

  return new Promise((resolve, reject) => {

    let noteToFind = {
      userId: userID
    };
    // console.log('note', noteToFind);

    noteModel.find(noteToFind, (error, notes) => {
      if (error) {
        reject({
          message: 'Error while getting notes',
          status: 500
        });
      } else if (!notes) {
        resolve({
          message: `No Notes found for userID ${userID}`,
          status: 200
        });
      } else {
        resolve({
          message: 'Notes added',
          status: 200,
          notes: notes
        });
      }
    });
  });
};

const updateNotes = (noteid, note) => {

  return new Promise((resolve, reject) => {

    let editedNote = {
      $set: {
        title: note.title,
        text: note.text,
        state: note.state
      }
    };

    let noteToFind = {
      id: noteid
    };

    //console.log('editedNote', editedNote);
    noteModel.findOneAndUpdate(noteToFind, editedNote, {new: true}, (err, note) => {

      // console.log('err', err);
      // console.log('note', note);

      if (err) {
        reject({
          message: 'Error while adding notes',
          status: 500
        });
      } else if (!note) {
        reject({
          message: `No document found for NoteID ${noteid}`,
          status: 500
        });
      } else {
        //console.log('updated doc : ', doc);
        resolve({
          message: 'Notes updated',
          status: 200,
          note: note
        });
      }
    })
  });

};

const getNoteForNoteID = (noteid) => {
  // console.log('Fetching Notes for noteid : ', noteid);

  return new Promise((resolve, reject) => {
    const query = {
      id: noteid
    };

    noteModel.findOne(query, (error, note) => {
      if (error) {
        reject({
          message: `Error is getting Notes for noteID ${noteid}`,
          status: 500
        });
      } else if (!note) {
        resolve({
          message: `No Notes found for for noteID ${noteid}`,
          status: 200
        });
      } else {
        resolve({
          message: 'Notes found',
          status: 200,
          note: note
        });
      }
    });
  });
}


module.exports = {
  createNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
}