let punkti = 0;
let plusPunkti = 1;
let cena = 10;
let speleAktiva = true;

const skaititajaElements = document.getElementById("skaititajs");
const poga = document.getElementById("poga");
const veikalaPoga = document.getElementById("veikalaPoga");
const kludasElements = document.getElementById("kludasZinojums");
const uzvarasElements = document.getElementById("uzvarasZinojums");

poga.addEventListener("click", function() {
    if (speleAktiva == true) {
        punkti = punkti + plusPunkti;
        skaititajaElements.innerText = punkti;

        if (punkti >= 100000) {
            uzvarasElements.innerText = "Apsveicam! Tu sakrāji 100000 punktus un uzvarēji!";
            speleAktiva = false;
            poga.style.backgroundColor = "gray";
        }
    }
});

veikalaPoga.addEventListener("click", function() {
    if (speleAktiva == true) {
        if (punkti >= cena) {
            punkti = punkti - cena;
            plusPunkti = plusPunkti + 1;
            cena = cena + 10; 
            
            skaititajaElements.innerText = punkti;
            veikalaPoga.innerText = "Pirkt uzlabojumu (Cena: " + cena + ")";
            kludasElements.innerText = ""; 
        } else {
            kludasElements.innerText = "Kļūda: Sakrāj vairāk punktus!";
            
            setTimeout(function() {
                kludasElements.innerText = "";
            }, 2000);
        }
    }
});