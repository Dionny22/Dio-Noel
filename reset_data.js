// Configuration Firebase pour la production
const firebaseConfig = {
    apiKey: "AIzaSyAwkata5E939XoUIKo1NFi04XBVRsq3JDU",
    authDomain: "dio-noel.firebaseapp.com",
    projectId: "dio-noel",
    storageBucket: "dio-noel.appspot.com",
    messagingSenderId: "45503206780",
    appId: "1:45503206780:web:a158d33c01c890e9eec0f9",
    measurementId: "G-HBHNNZS5GJ"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Données initiales
const initialData = {
    participants: ['Jennifer', 'Arafat', 'Emmanuella', 'Antoine', 'Ange', 'Samir'],
    drawnPairs: {},
    participantLinks: {},
    isAdmin: false,
    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
};

// Réinitialiser les données dans Firestore
db.collection('tirage').doc('data').set(initialData)
    .then(() => {
        console.log('Données réinitialisées avec succès dans Firestore !');
        alert('Les données ont été réinitialisées avec succès !');
    })
    .catch((error) => {
        console.error('Erreur lors de la réinitialisation :', error);
        alert('Erreur lors de la réinitialisation : ' + error.message);
    });

