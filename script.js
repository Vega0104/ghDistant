// script.js

function helloWorld() {
    // Appliquer le titre de la fenêtre
    document.title = CONFIG.title;

    // Création du label de texte
    const label = document.createElement('div');
    label.textContent = CONFIG.labelText;
    label.style.textAlign = CONFIG.labelTextAlign;

    // Appliquer les styles au label
    label.style.backgroundColor = CONFIG.labelBackgroundColor;
    label.style.width = CONFIG.labelWidth;
    label.style.height = CONFIG.labelHeight;
    label.style.display = CONFIG.labelDisplay;
    label.style.alignItems = CONFIG.labelAlignItems;
    label.style.justifyContent = CONFIG.labelJustifyContent;
    label.style.margin = CONFIG.labelMargin;

    // Ajouter le label à la fenêtre (au corps du document)
    document.body.appendChild(label);
}

// Appeler la fonction pour exécuter l'algorithme
helloWorld();



console.log("test hook");
prompt("Are u lucky ?");