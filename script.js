// Déclaration de la variable qui stocke en valeur le nombre de citations
let quoteCount = 1; // On démarre à 1 car il y a déjà une citation dans le HTML, je souhaite la laisse

//Création d'une fonction en dehors du gestionnaire d'évnements, pour mettre à jour le compteur de citations
function updateQuoteCount() {
    const countElement = document.getElementById('count'); // Récupération de l'élément d'Id Count
    countElement.textContent = `${quoteCount} citation${quoteCount > 1 ? 's' : ''}`; // Sucre syntaxique pour un if ternaire
}


// Initialisation du gestionnaire d'événements
document.addEventListener('DOMContentLoaded',() => {

    updateQuoteCount(); // Appel de la fonction pour afficher le nombre de citations
    
    // Récupération du l'iD du formulaire et ajout d'un écouteur d'événement
    const quoteForm = document.getElementById('quote-form');
    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        
        // Récupération des valeurs des champs text et author
        const text = document.getElementById('quote-text').value;
        const author = document.getElementById('quote-author').value;
        
        // Ajout de la citation et de son auteur.ice, appel de la fonction addQuote
        addQuote(text, author);
        
        // Réinitialisation du formulaire afin de pouvoir ajouter une nouvelle citation
        quoteForm.reset();
    });
    
 });
 

 // Fonction pour ajouter une citation avec 2 paramètres: text et author
function addQuote(quote, author) {
    // Création des éléments HTML, utilisation des méthodes className et textContent pour ajouter des classes et du texte
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
    
    // Récupération de l'Id quote-list 
    const quoteList = document.getElementById('quote-list');
    quoteList.insertBefore(quoteDiv, quoteList.firstChild); // Utilisation de la méthode insertBefore pour ajouter les citations récentes en haut de la liste
    
    // Incrémentation du compteur de citations (variable quoteCount) et MAJ de l'affichage en rappelant la fonction updateQuoteCount
    quoteCount++;
    updateQuoteCount();
    
 };


