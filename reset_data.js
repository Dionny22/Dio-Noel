// Script pour réinitialiser les données de l'application
localStorage.removeItem('noelTirage');

// Données initiales
const initialData = {
    participants: ['Jennifer', 'Arafat', 'Emmanuella', 'Antoine', 'Ange', 'Samir'],
    drawnPairs: {},
    participantLinks: {},
    isAdmin: false
};

// Sauvegarder les données initiales
localStorage.setItem('noelTirage', JSON.stringify(initialData));

console.log('Données réinitialisées avec succès !');
alert('Les données ont été réinitialisées avec succès !');
