//  Test Configuration Object
const uuidv1 = require('uuid/v1');

const USER_ID_1 = uuidv1();
const USER_ID_2 = uuidv1();
const USER_ID_3 = uuidv1();

const NOTE_1 = {
  title: 'note1',
  text: 'this is note 1',
  state: 'started'
}

const NOTE_2 = {
  title: 'note2',
  text: 'this is note 2',
  state: 'completed'
}

const USER_1 = {
  username: USER_ID_1,
  password: USER_ID_1
};

const USER_2 = {
  username: USER_ID_2,
  password: USER_ID_2
};

module.exports = {
  USER_ID_1,
  USER_ID_2,
  USER_ID_3,
  NOTE_1,
  NOTE_2,
  USER_1,
  USER_2
}