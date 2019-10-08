  
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    // ADD YOUR FIREBASE CREDENTIALS
    apiKey: "AIzaSyA6hBAeI47lldGGg0zFELKDgJZruhZCbhM",
    authDomain: "quiz-b14b0.firebaseapp.com",
    databaseURL: "https://quiz-b14b0.firebaseio.com",
    projectId: "quiz-b14b0",
    storageBucket: "",
    messagingSenderId: "315234925263",
    appId: "1:315234925263:web:e59313b024d5dd3ff795ba",
    measurementId: "G-YSFWJHLLQ6"
};

export const fire = firebase.initializeApp(firebaseConfig);
