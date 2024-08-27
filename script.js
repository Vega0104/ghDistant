function helloWorld() {
    // Appliquer le titre de la fenêtre
    document.title = CONFIG.title;

    // Création du label "Hello World"
    const label = document.createElement('div');
    label.textContent = CONFIG.labelText;
    label.style.textAlign = CONFIG.labelTextAlign;

    // Appliquer les styles au label "Hello World"
    label.style.backgroundColor = CONFIG.labelBackgroundColor;
    label.style.width = CONFIG.labelWidth;
    label.style.height = CONFIG.labelHeight;
    label.style.display = CONFIG.labelDisplay;
    label.style.alignItems = CONFIG.labelAlignItems;
    label.style.justifyContent = CONFIG.labelJustifyContent;
    label.style.margin = CONFIG.labelMargin;

    // Ajouter le label "Hello World" à la fenêtre
    document.body.appendChild(label);

    // Création du label affichant l'heure
    const timeLabel = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString();
    timeLabel.textContent = `Current Time: ${currentTime}`;
    timeLabel.style.textAlign = CONFIG.labelTextAlign;
    timeLabel.style.marginTop = '10px'; // Ajouter un peu d'espace entre les deux labels

    // Ajouter le label de l'heure à la fenêtre
    document.body.appendChild(timeLabel);
}

// Appeler la fonction pour exécuter l'algorithme
helloWorld();

console.log('modif sur github');
console.log("test hook");
prompt("Are u lucky ?");
