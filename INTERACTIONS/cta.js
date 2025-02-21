// Récupération des éléments dans le DOM
let prixDons = document.getElementsByClassName("prix_don");
let recurPmt = document.getElementsByClassName("paiement");
let subBtn = document.getElementById("donate_big");

function unclick(x,y){

    // Décliquer les boutons de dons
    if (x.classList.contains("prix_don_onclick")==true){
        x.classList.remove("prix_don_onclick")
    } else if (y.classList.contains("prix_don_onclick")==true){
        y.classList.remove("prix_don_onclick")
    }

    // Décliquer les boutons de paiement
    else if (x.classList.contains("paiement_onclick")==true){
        x.classList.remove("paiement_onclick")
    } else if (y.classList.contains("paiement_onclick")==true){
        y.classList.remove("paiement_onclick")
    }
}

function changeBtn(val){

    // Changement du style des boutons de don
    if (val.id===prixDons[0].id){
        prixDons[0].classList.add("prix_don_onclick");
        unclick(prixDons[1],prixDons[2]);

    } else if (val.id===prixDons[1].id){
        prixDons[1].classList.add("prix_don_onclick");
        unclick(prixDons[0],prixDons[2]);

    } else if (val.id===prixDons[2].id){
        prixDons[2].classList.add("prix_don_onclick");
        unclick(prixDons[0],prixDons[1]);
    }

    // Changement du style des boutons de récurrence
    if (val.id===recurPmt[0].id){
        recurPmt[0].classList.add("paiement_onclick");
        unclick(recurPmt[1],recurPmt[2]);

    } else if (val.id===recurPmt[1].id){
        recurPmt[1].classList.add("paiement_onclick");
        unclick(recurPmt[0],recurPmt[2]);

    } else if (val.id===recurPmt[2].id){
        recurPmt[2].classList.add("paiement_onclick");
        unclick(recurPmt[0],recurPmt[1]);
    }

    // Ajout de la somme du don au bouton récap
    let dn="";
    if (prixDons[0].classList.contains("prix_don_onclick")==true){
        dn=prixDons[0].querySelector("p").innerHTML;

    } else if (prixDons[1].classList.contains("prix_don_onclick")==true){
        dn = prixDons[1].querySelector("p").innerHTML;

    } else if (prixDons[2].classList.contains("prix_don_onclick")==true){
        dn = prixDons[2].querySelector("p").innerHTML;
    }

    // Ajout de la recurrence de paiement au bouton récap
    let pmt = "";

    if (recurPmt[0].classList.contains("paiement_onclick")==true){
        pmt=recurPmt[0].querySelector("p").innerHTML;

    } else if (recurPmt[1].classList.contains("paiement_onclick")==true){
        pmt=recurPmt[1].querySelector("p").innerHTML;

    } else if (recurPmt[2].classList.contains("paiement_onclick")==true){
        pmt=recurPmt[2].querySelector("p").innerHTML;
    }
    subBtn.innerHTML =`<img src="Images/Heart.png" alt="Icône coeur">Faire un don de ${dn}/${pmt}`;
}

function showRecap(){
    let don = "";
    let recurrence = "";

    if (prixDons[0].classList.contains("prix_don_onclick")==true){
        don=prixDons[0].querySelector("p").innerHTML;

    } else if (prixDons[1].classList.contains("prix_don_onclick")==true){
        don = prixDons[1].querySelector("p").innerHTML;

    } else if (prixDons[2].classList.contains("prix_don_onclick")==true){
        don = prixDons[2].querySelector("p").innerHTML;
    }

    if (recurPmt[0].classList.contains("paiement_onclick")==true){
        recurrence= `unique (un seul paiement de ${don})`;

    } else if (recurPmt[1].classList.contains("paiement_onclick")==true){
        recurrence= `mensuel (un paiement de ${don} par mois)`;

    } else if (recurPmt[2].classList.contains("paiement_onclick")==true){
        recurrence= `annuel (un paiement de ${don} par an)` ;
    }

    alert(`Vous avez fait un don de ${don}. Vous avez choisi un paiement ${recurrence}`)
}