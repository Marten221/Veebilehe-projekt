document.querySelectorAll('a[href^="#"]').forEach(anchor => {  //See rida valib kõik ankur-lingid (<a>), mille href atribuut algab "#" sümboliga. See hõlmab kõiki linke, mis viivad lehe siseselt teatud kohale (anchor link).
    anchor.addEventListener('click', function (e) {     //See rida lisab igale valitud ankur-lingile nn "kuulaja", mis reageerib klõpsule. Kui linki vajutatakse, käivitatakse järgmine funktsioon.
        e.preventDefault();     //See rida takistab vaikimisi käitumist, mis tähendab, et brauseri vaikimisi toimingud lingi klõpsamisel (nt otsekohe hüppamine vastava ankurpunkti juurde) takistatakse.

        document.querySelector(this.getAttribute('href')).scrollIntoView({      //See osa kasutab querySelector meetodit, et otsida DOM-ist esimest elementi, mis vastab antud CSS-selektorile. Antud juhul on selektoriks see, mida eelnevalt saadud "#teema1" või muu ankurpunkti identifikaator tähendab.    this.getAttribute('href'): See osa viitab praegusele ankur-lingile, millele klõpsati. this osutab antud ankurile. getAttribute('href') võtab ankur-lingi href atribuudi väärtuse. Näiteks kui ankur-lingi href on "#teema1", siis see osa tagastab stringi "#teema1".        
            behavior: 'smooth' //käivitab sujuva kerimise efekti, mis liigutab lehe sujuvalt ankurpunkti juurde, millele klõpsati.
        });
    });
});

//Koodi autor: ChatGPT 3.5