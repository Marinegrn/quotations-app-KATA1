// Déclaration de la variable qui stocke en valeur le nombre de citations
let quoteCount = 1; // On démarre à 1 car il y a déjà une citation dans le HTML

//Fonction pour mettre à jour le compteur de citations
function updateQuoteCount() {
    const countElement = document.getElementById('count');
    countElement.textContent = `${quoteCount} citation${quoteCount > 1 ? 's' : ''}`; // Sucre syntaxique pour un if ternaire
}


// Initialisation du gestionnaire d'événements
document.addEventListener('DOMContentLoaded',() => {
    // Mise à jour du compteur initial (pour refléter la citation déjà présente)
    updateQuoteCount();
    
    // Récupération du formulaire et ajout d'un écouteur d'événement
    const quoteForm = document.getElementById('quote-form');
    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        
        // Récupération des valeurs des champs
        const text = document.getElementById('quote-text').value;
        const author = document.getElementById('quote-author').value;
        
        // Ajout de la citation et de son auteur.ice
        addQuote(text, author);
        
        // Réinitialisation du formulaire
        quoteForm.reset();
    });
    
 });

 // Fonction pour ajouter une citation avec les paramètres text et author
function addQuote(quote, author) {
    // Création des éléments
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    
    const textP = document.createElement('p');
    textP.className = 'text';
    textP.textContent = `"${quote}"`;
    
    const authorP = document.createElement('p');
    authorP.className = 'author';
    authorP.textContent = `${author}`;
    
    // Assemblage des éléments
    quoteDiv.appendChild(textP); // en argument les constantes déclarées ci-dessus
    quoteDiv.appendChild(authorP);
    
    // Ajout au DOM
    const quoteList = document.getElementById('quote-list');
    quoteList.insertBefore(quoteDiv, quoteList.firstChild); // Pour ajouter les citations récentes en haut de la liste
    
    // Incrémentation du compteur de citations et MAJ de l'affichage
    quoteCount++;
    updateQuoteCount();
    
 };


