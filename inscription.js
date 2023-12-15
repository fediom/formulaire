// Partie 1: Contrôle de saisie avec l’évènement onClick
function passValidation() {
    var password1 = prompt("Entrez le mot de passe :");
    var password2 = prompt("Confirmez le mot de passe :");

    if (password1 !== password2) {
        alert("Les mots de passe ne sont pas identiques !");
    } else {
        alert("Les mots de passe sont identiques !");
    }
}

// Partie 2: Contrôle de saisie avec la méthode addEventListener
document.addEventListener("DOMContentLoaded", function () {
    var formulaire = document.getElementById("formulaire"); // Correction de l'ID ici

    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var telephone = document.getElementById("telephone").value;
        var motDePasse = document.getElementById("motDePasse").value;
        var confirmationMotDePasse = document.getElementById("motDePasseConfirm").value; // Correction de l'ID ici

        var nomRegex = /^[a-zA-Z]{3,}$/;
        var prenomRegex = /^.{4,}$/;
        var telephoneRegex = /^\d+$/;
        var motDePasseRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

        if (!nomRegex.test(nom)) {
            alert("Nom invalide ! Doit contenir uniquement des lettres et au moins 3 caractères.");
        } else if (!prenomRegex.test(prenom)) {
            alert("Prénom invalide ! Doit contenir au moins 4 caractères.");
        } else if (!telephoneRegex.test(telephone)) {
            alert("Numéro de téléphone invalide ! Ne doit contenir que des chiffres.");
        } else if (!motDePasseRegex.test(motDePasse)) {
            alert("Mot de passe invalide ! Doit contenir au moins 10 caractères, une lettre majuscule, une lettre minuscule et un chiffre.");
        } else if (motDePasse !== confirmationMotDePasse) {
            alert("Les mots de passe ne sont pas identiques !");
        } else {
            alert("Formulaire valide ! Envoi du formulaire...");
            // Vous pouvez ajouter ici le code pour envoyer le formulaire à votre serveur
        }
    });
});

// Partie 3: Contrôle de saisie avec l’évènement onKeyup
document.getElementById("nom").addEventListener("keyup", function () {
    nameValidation();
});

function nameValidation() {
    var nomInput = document.getElementById("nom");
    var nomValue = nomInput.value;
    var nomRegex = /^[a-zA-Z]{3,}$/;

    if (nomRegex.test(nomValue)) {
        nomInput.style.color = "green";
    } else {
        nomInput.style.color = "red";
    }
}
