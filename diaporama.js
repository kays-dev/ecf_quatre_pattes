// Récupération des éléments dans le DOM
let divPrincipale = document.getElementById("div_principale");
let divPrincipaleTitle = document.getElementById("slider_title");
let divPrincipaleDesc = document.getElementById("slider_desc");
let divPrincipaleLegend = document.getElementById("slider_legend");
let previews = document.getElementsByClassName("slider_preview");

function unclick(x,y){

    // Décliquer un autre preview
    if (x.classList.contains("slider_preview_onclick")==true){
        x.classList.remove("slider_preview_onclick")
    } else if (y.classList.contains("slider_preview_onclick")==true){
        y.classList.remove("slider_preview_onclick")
    }
}

function changePvw(image){

    // Changement du style des boutons de don
    if (image.id===previews[0].id){
        previews[0].classList.add("slider_preview_onclick");
        unclick(previews[1],previews[2]);
        divPrincipale.style.backgroundImage=`url("/Images/img_de_Luna_chien.webp")`;
        divPrincipaleTitle.innerHTML=previews[0].querySelector("h3").innerHTML;
        divPrincipaleDesc.innerHTML="Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.";
        divPrincipaleLegend.innerHTML="Janvier 2024"

    } else if (image.id===previews[1].id){
        previews[1].classList.add("slider_preview_onclick");
        unclick(previews[0],previews[2]);
        divPrincipale.style.backgroundImage=`url("/Images/img_de_Oscar_chat.webp")`;
        divPrincipaleTitle.innerHTML=previews[1].querySelector("h3").innerHTML;
        divPrincipaleDesc.innerHTML="Abandonné dans une forêt, Oscar était terrifié par les humains. Grâce à nos soins, de la patience et de l'amour, il est devenu un chat confiant et affectueux.";
        divPrincipaleLegend.innerHTML="Mars 2024"

    } else if (image.id===previews[2].id){
        previews[2].classList.add("slider_preview_onclick");
        unclick(previews[0],previews[1]);
        divPrincipale.style.backgroundImage=`url("/Images/img_de_Max_chien.webp")`;
        divPrincipaleTitle.innerHTML=previews[2].querySelector("h3").innerHTML;
        divPrincipaleDesc.innerHTML="Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille.";
        divPrincipaleLegend.innerHTML="Janvier 2024"
    }

}