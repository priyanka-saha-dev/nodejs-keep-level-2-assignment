const dao = require('./notes.dao');

const createNote = (data, userId) => {
  return dao.createNote(data, userId);
};

const getNoteForUserID = (userId) => {
  return dao.getNoteForUserID(userId);
};

const updateNotes = (noteid, data) => {
  return dao.updateNotes(noteid, data);
};

const getNoteForNoteID = (noteid) => {
  return dao.getNoteForNoteID(noteid);
};

module.exports = {
  createNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};