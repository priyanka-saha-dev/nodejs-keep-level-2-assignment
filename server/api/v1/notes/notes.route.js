const router = require('express').Router();
const controller = require('./notes.controller');

// api to add a note
// router.post('/', (req, res) => {
//   //logger.debug('Inside note.router addNote');
//   let note = req.body;
//   let userId = req.query.userId;
//   try {
//     notesCtrl.createNote(userId, note).then((response) => {
//     //  logger.debug('Inside noteCtrl.addNote success');
//     //  logger.info(response.message);
//       res.status(response.status).send(response.note);
//     }, 
//     (err) => {
//      // logger.error('Error in noteCtrl.addNote error: ', err.message);
//       res.status(err.status).send(err);
//     }
//     );
//   } catch (err) {
//   //  logger.error('Unexpected error in noteCtrl.addNote ', err);
//     res.send({message: 'Failed to complete request'})
//   }
// });

router.route('/')
  .all((req, res, next) => {
    next(); //delegate

  }).get((req, res, next) => { //API for getting all notes of a user **/api/v1/notes/**

    try {
      const userid = req.query.userId;    //**userId** will be passed as **query param**
      controller.getNoteForUserID(userid).then((response) => {
        //console.log(response);
        res.status(response.status).send(response.notes);
      }).catch((error) => {
        //console.log('Promise rejected with', error);
        res.status(error.status).send(error);
      });
    } catch (err) {
      res.send({ message: 'Failed to complete request' });
    }


  }).post((req, res) => {   //API for creating a note **/api/v1/notes/**
    try {
      const userid = req.query.userId;    //**userId** will be passed as **query param**
      controller.createNote(userid, req.body).then((response) => {
        res.status(response.status).send(response.note);
      }).catch((error) => {
        //console.log('Promise rejected with', error);
        res.status(error.status).send(error);
      });
    } catch (err) {
      res.send({ message: 'Failed to complete request' });
    }

  });

router.route('/:noteId')
  .all((req, res, next) => {
    next(); //delegate

  }).get((req, res, next) => { //API for getting a note **/api/v1/notes/:noteId**

    try {
      const noteid = req.params.noteId;   //**noteId** will be passed as route parameters into url
      controller.getNoteForNoteID(noteid).then((response) => {
        res.status(response.status).send(response.note);
      }).catch((error) => {
        //console.log('Promise rejected with', error);
        res.status(error.status).send(error);
      });
    } catch (err) {
      res.send({ message: 'Failed to complete request' });
    }

  }).put((req, res, next) => {    //API for updating a note **/api/v1/notes/:noteId**

    try {
      const noteid = req.params.noteId;   //**noteId** will be passed as route parameters into url
      controller.updateNotes(noteid, req.body).then((response) => {
        res.status(response.status).send(response.note);
      }).catch((error) => {
        //console.log('Promise rejected with', error);
        res.status(error.status).send(error);
      })
    } catch (err) {
      res.send({ message: 'Failed to complete request' });
    }

  });

module.exports = router;