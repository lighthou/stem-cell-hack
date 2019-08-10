import * as firebase from 'firebase';

var config  = require('./config.json');

const fbConfig = config.firebase

firebase.initializeApp(fbConfig);

export const databaseRef = firebase.database().ref();