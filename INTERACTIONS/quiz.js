// Récupération des éléments dans le DOM
let resultat = document.getElementById("quiz");
let reponse = document.getElementsByClassName("reponse");
let question = document.getElementsByClassName("question");


let bonneReps=["Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.","Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé.","Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux."]

function checkAswr(answer){
    // Vérification de la réponse à la question 1
    if (answer.id=="faux1" && question[0].innerHTML.includes(answer.innerHTML)==true){
        reponse[0].classList.add("bonne_reponse");
        reponse[0].innerHTML=`<img src="Images/Done_green.png" alt="icône de bonne réponse"><p>${bonneReps[0]}</p>`

    } else if (answer.id=="vrai1" && question[0].innerHTML.includes(answer.innerHTML)==true) {
        reponse[0].classList.add("mauvaise_reponse");
        reponse[0].innerHTML=`<img src="Images/Close_red.png" alt="icône de mauvaise réponse"><p>${bonneReps[0]}</p>`
    }      
    
    // Vérification de la réponse à la question 2
    if (answer.id=="faux2" && question[1].innerHTML.includes(answer.innerHTML)==true){
        reponse[1].classList.add("bonne_reponse");
        reponse[1].innerHTML=`<img src="Images/Done_green.png" alt="icône de bonne réponse"><p>${bonneReps[1]}</p>`

    } else if (answer.id=="vrai2" && question[1].innerHTML.includes(answer.innerHTML)==true) {
        reponse[1].classList.add("mauvaise_reponse");
        reponse[1].innerHTML=`<img src="Images/Close_red.png" alt="icône de mauvaise réponse"><p>${bonneReps[1]}</p>`
    } 
    

    // Vérification de la réponse à la question 3   
    if (answer.id=="faux3" && question[2].innerHTML.includes(answer.innerHTML)==true){
        reponse[2].classList.add("bonne_reponse");
        reponse[2].innerHTML=`<img src="Images/Done_green.png" alt="icône de bonne réponse"><p>${bonneReps[2]}</p>`
    } else if (answer.id=="vrai3" && question[2].innerHTML.includes(answer.innerHTML)==true) {
        reponse[2].classList.add("mauvaise_reponse");
        reponse[2].innerHTML=`<img src="Images/Close_red.png" alt="icône de mauvaise réponse"><p>${bonneReps[2]}</p>`
    }

    let answerCount=0;
    let score=0;
    
    for (let i=0; i<question.length; i++){
        if (question[i].innerHTML.includes(reponse.classList="bonne_reponse")){
            score+=1
        }
        if (question[i].innerHTML.includes(reponse.classList="bonne_reponse") || question[i].innerHTML.includes(reponse.classList="mauvaise_reponse")){
            answerCount+=1
        }
    
    }
    if (answerCount==3){
        let resultDiv=document.createElement("div");
        resultDiv.innerHTML=`<p>Votre score est de ${score} bonne réponses</p>`;
        resultDiv.classList.add("score")
        resultat.appendChild(resultDiv);
    }
}


// Condition d'affichage du score