const svc = require('./notes.service');

const createNote = (data, userId) => {
  return svc.createNote(data, userId);
};

const getNoteForUserID = (userId) => {
  return svc.getNoteForUserID(userId);
};

const updateNotes = (noteid, data) => {
  return svc.updateNotes(noteid, data);
};

const getNoteForNoteID = (noteid) => {
  return svc.getNoteForNoteID(noteid);
};

module.exports = {
  createNote,
  getNoteForUserID,
  updateNotes,
  getNoteForNoteID
};