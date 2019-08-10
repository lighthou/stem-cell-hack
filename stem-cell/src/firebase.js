import * as firebase from 'firebase';

var config  = require('./config.json');

const fbConfig = config.firebase

firebase.initializeApp(fbConfig);

const database = firebase.database().ref();

export const databaseRef = database