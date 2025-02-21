// EVENEMENT DU FORMULAIRE
document.getElementById("submit_btn")
addEventListener("submit", (e)=>{
    e.preventDefault()
    submitCheck()

})

// Récup pour accès au DOM
let contact= document.getElementById("nom");
let contactM= document.getElementById("mail");
let message= document.getElementById("contenu_msg");
let selection= document.getElementById("sujet_msg");

let requiredAlert= document.getElementsByClassName("obligatoire");

// FONCTION DE VALIDATION DU FORMULAIRE
function submitCheck(){

    // Critère de validation du formulaire
    let valide=true;

    // Fonction de validation du format de l'email
    function valMail(mailAdress) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(mailAdress.value.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }
    
    // Vérification du champs "Nom"
    if (contact.value==""){
        requiredAlert[0].innerHTML= "Ce champs est obligatoire.";
    
        valide=false
    }

    // Vérification du champs "Adresse mail"
    if (contactM.value==""){
        requiredAlert[1].innerHTML="Ce champs est obligatoire.";
    
        valide=false
    } else if (valMail(contactM)==false){
        requiredAlert[1].innerHTML= "L'adresse mail est invalide.";
    
        valide=false
    }

    // Vérification du champs "Message"
    if (message.value==""){
        requiredAlert[2].innerHTML= "Ce champs est obligatoire.";
    
        valide=false
    }

    // Validation du formulaire
    if (valide==true){
        alert("Formulaire envoyé avec succès !");
        contact.value="";
        contactM.value="";
        message.value="";
        selection.value="sélection";
    }

    for (let i=0; i<requiredAlert.length; i++){
        if (requiredAlert[i].innerHTML!==""){
            contact.addEventListener("change", (e)=>{
                e.preventDefault;
                requiredAlert[0].innerHTML="";
            })
            contactM.addEventListener("change", (e)=>{
                e.preventDefault;
                if (valMail(contactM)==true){
                    requiredAlert[1].innerHTML="";
                } else if (valMail(contactM)!==true && contactM.value!==""){
                    requiredAlert[1].innerHTML= "L'adresse mail est invalide.";
                }
            })
            message.addEventListener("change", (e)=>{
                e.preventDefault;
                requiredAlert[2].innerHTML="";
            })
        }
    }
}