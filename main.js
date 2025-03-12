var pelaajatListassa = []
var indeksi = 0;
var summa = 0;
var pisteetListassa = [];
function näytäTekstiKenttä(option) {    /*NÄYTÄ TEKSTIKENTTÄ, KIRJOITA PELAAJAT*/
    var teksiKenttä = document.getElementById("nimet");
    teksiKenttä.innerHTML = "";
    
    for (var i = 0; i < option.value; i++) {
        var inputKenttä = document.createElement("input");
        inputKenttä.type = "text";
        inputiidee = i + 1;
        inputKenttä.classList = "pnimet";
        inputKenttä.placeholder = i + 1 + ". Pelaajan nimi";
        teksiKenttä.appendChild(inputKenttä);
        teksiKenttä.appendChild(document.createElement("br"));
    }
}

function päivitäTulostaulut() {             /*ALOITA PAINIKE*/
    tarkastaPelaajat();
    tarkastaNopat();
    lisääTulostaulu();
    lisääPeliAlue();
    näytäNykyinenVuoro();
    luoHeitäLopeta();

    function tarkastaPelaajat() {
        var pelaajaValitsin = document.querySelector("input[name='pelaaja']:checked");
        if (pelaajaValitsin === null) {
            window.alert("Valitse vähintään yksi pelaaja.")
            return
        }
    }
    function tarkastaNopat() {
        var noppaValitsin = document.querySelector("input[name='noppavalitsin']:checked");
        if ( noppaValitsin === null) {
            window.alert("Valitse pelaatko yhdellä vai kahdella nopalla.")
            return
        }
    }
    

    function lisääTulostaulu(){
        var nimikentät = document.getElementsByClassName("pnimet");     /*TULOSTAULU*/
        var tulostaulu = document.getElementById("taulu");
        tulostaulu.innerHTML = "";
        var pisteetYhteensä = "Pisteet yhteensä: ";
        var kierroksetYhteensä = "Kierrokset: "
    

    for (var i = 0; i < nimikentät.length; i++) {               /*PELAAJAT TULOSTAULUSSA*/
        var uusiElementti = document.createElement("p");
        var pelaaja = nimikentät[i].value;
        uusiElementti.classList = "tulostaulunpelaajat";
        uusiElementti.classList = "boldattunimi";
        uusiElementti.innerText = pelaaja;
        tulostaulu.appendChild(uusiElementti);
        pelaajatListassa.push(pelaaja);

        var pisteetYhteensäElementti = document.createElement("p"); /*PELAAJAT PIST*/
        pisteetYhteensäElementti.id = "yht" + i;
        pisteetYhteensäElementti.classList = "tulostaulunpelaajat";
        window["pisteet" + i] = 0;
        pisteetYhteensäElementti.innerText = pisteetYhteensä + " " + window["pisteet" + i];
        tulostaulu.appendChild(pisteetYhteensäElementti);

        var heitetytKierroksetElementti = document.createElement("p");  /*PELAAJIEN KIERROKSET*/
        heitetytKierroksetElementti.id = "kierrokset" + i;
        heitetytKierroksetElementti.classList = "tulostaulunpelaajat";
        window["kierros" + i] = 0;
        heitetytKierroksetElementti.innerText = kierroksetYhteensä + window["kierros" + i];
        tulostaulu.appendChild(heitetytKierroksetElementti);
        }
    }
    

    function lisääPeliAlue() {
        var peliAlue = document.getElementById("pelialue");     /*PELIAULE, NOPAT*/
        peliAlue.innerHTML = "";

        var valittuNoppa = document.querySelector("input[name='noppavalitsin']:checked");
    if (valittuNoppa.value === "1") {                       /*VALITTU NOPPAMÄÄRÄ*/
        let ekaRandomNum = Math.floor(Math.random() * 6) + 1;
        let ekaRandomKuva = "./img/noppa" + ekaRandomNum + ".png";
        var uusiKuvaElementti = document.createElement("img");
        uusiKuvaElementti.src = ekaRandomKuva;
        peliAlue.appendChild(uusiKuvaElementti);

    } else {
        const ekaRandomNum = Math.floor(Math.random() * 6) + 1;
        const tokaRandomNum = Math.floor(Math.random() * 6) + 1;
        const ekaRandomKuva = "./img/noppa" + ekaRandomNum + ".png";
        const tokaRandomKuva = "./img/noppa" + tokaRandomNum + ".png";
        var ekaKuvaElementti = document.createElement("img");
        var tokaKuvaElementti = document.createElement("img");
        ekaKuvaElementti.src = ekaRandomKuva;
        tokaKuvaElementti.src = tokaRandomKuva;
        peliAlue.appendChild(ekaKuvaElementti);
        peliAlue.appendChild(tokaKuvaElementti);
        }
    }

    function näytäNykyinenVuoro() {                             /*ALOITUSVUORO*/
        var vuoroElementti = document.getElementById("heittäjä");
        vuoroElementti.innerText = pelaajatListassa[indeksi] + " aloittaa!";
    }

    function luoHeitäLopeta() {
        
        var heitäPainike = document.createElement("button");    /*HEITÄ PAINIKE*/
        heitäPainike.classList.add = ("btn", "btn-success");
        heitäPainike.id = "heitäP";
        heitäPainike.innerText = "Heitä";
        heitäPainike.onclick = heitä;
        var heitäButton = document.getElementById("heitäPainike");
        heitäButton.appendChild(heitäPainike);

        var lopetaButton = document.getElementById("lopetaPainike");
        var lopetaPainike = document.createElement("button");   /*LOPETA PAINIKE*/
        lopetaPainike.classList.add = ("btn", "btn-danger");
        lopetaPainike.id = "lopetaP";
        lopetaPainike.innerText = "Lopeta";
        lopetaPainike.onclick = lopeta;
        lopetaButton.appendChild(lopetaPainike);
    }
}

function heitä() {
    
    heitäNopat();
    
    function heitäNopat() {
        var peliAlue = document.getElementById("pelialue");         /*HEITÄ FUNKTIO*/
        peliAlue.innerHTML = "";

    var valittuNoppa = document.querySelector("input[name='noppavalitsin']:checked");
    if (valittuNoppa.value === "1") {                       /*YHDELLÄ NOPALLA*/
        let ekaRandomNum = Math.floor(Math.random() * 6) + 1;
        let ekaRandomKuva = "./img/noppa" + ekaRandomNum + ".png";
        var uusiKuvaElementti = document.createElement("img");
        uusiKuvaElementti.src = ekaRandomKuva;
        peliAlue.appendChild(uusiKuvaElementti);
        if (ekaRandomNum === 1) {
            ykkönen();
        } else {
            lisääPisteitä(ekaRandomNum);
            näytäNykyinenVuoro();
        }
    } else {                                            /*KAHDELLA NOPALLA*/
        let ekaRandomNum = Math.floor(Math.random() * 6) + 1;
        let tokaRandomNum = Math.floor(Math.random() * 6) + 1;
        let ekaRandomKuva = "./img/noppa" + ekaRandomNum + ".png";
        let tokaRandomKuva = "./img/noppa" + tokaRandomNum + ".png";
        var ekaKuvaElementti = document.createElement("img");
        var tokaKuvaElementti = document.createElement("img");
        ekaKuvaElementti.src = ekaRandomKuva;
        tokaKuvaElementti.src = tokaRandomKuva;
        peliAlue.appendChild(ekaKuvaElementti);
        peliAlue.appendChild(tokaKuvaElementti);
        if (ekaRandomNum == tokaRandomNum) {
            if (ekaRandomNum == 1 && tokaRandomNum == 1) {
                näytäNykyinenVuoro();
                tuplatYkkösilläLaskuri();
            } else {
                näytäNykyinenVuoro();
                tuplatMuillaLaskuri();
                if (tuplatKpl === 3) {
                    var ykkösnoppa = document.getElementById("kierrospisteet");
                    ykkösnoppa.innerText = "Heitit kolmannen kerran peräkkäin tuplat, menetit pisteet ja vuoro siirtyy seuraavalle";
                    pisteetListassa = [];
                    kierrospisteet = 0;
                    tuplatKpl = 0;
                    kierrosluku();
                    vuoronKirjaus();
                } else {
                    tuplat(ekaRandomNum, tokaRandomNum);
                }
                
                
            } 
        } else if (ekaRandomNum == 1 || tokaRandomNum == 1) {
            ykkönen();
            tuplatKpl = 0;
        } else {
            lisääPisteitä_2(ekaRandomNum, tokaRandomNum)
            näytäNykyinenVuoro();
            tuplatKpl = 0;
            
        }
        }
    }
}


function tyhjennäkierrospisteet() {     /*TYHJENTÄÄ KIERROSTEN VÄLISSÄ PISTEITÄ*/
    var ykkösnoppa = document.getElementById("kierrospisteet");
    ykkösnoppa.innerText = ""
    
}

function lisääPisteitä(ekaRandomNum) {  /*PITÄÄ KIRJAA PELAAJAN HEITTÄMISTÄ NOPISTA*/
    var pisteidensum = document.getElementById("kierrospisteet");
    pisteetListassa.push(ekaRandomNum);
    var summa = pisteetListassa.reduce((total, pisteetListassa) => total + pisteetListassa, 0);
    if (window["pisteet" + indeksi] + summa >= 100) {
        window["pisteet" + indeksi] += summa;
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "." + "\n" +"Yhteensä: " + summa + " pistettä." + "\n" + pelaajatListassa[indeksi] + " heitit " + window["pisteet" + indeksi] + " pistettä, olet voittaja!"
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
        kierrosluku();
    } else {
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "." + "\n" + "Yhteensä: " + summa + " pistettä.";
    }
}

function ykkönen() {                    /*JOS PELAAJA HEITÄÄ YKKÖSEN*/
    var ykkösnoppa = document.getElementById("kierrospisteet");
    ykkösnoppa.innerText = pelaajatListassa[indeksi] + " heitit ykkösen, vuoro siirtyy seuraavalle pelaajalle.";
    pisteetListassa = [];
    kierrospisteet = 0;
    kierrosluku(); 
    vuoronKirjaus();
}

function vuoronKirjaus() {              /*VAIHTAA PELAAJIEN VUOROA*/
    indeksi = (indeksi + 1) % pelaajatListassa.length;
    var vuoroElementti = document.getElementById("heittäjä");
    vuoroElementti.innerText = "Seuraavaksi vuorossa: " + pelaajatListassa[indeksi];
}

function näytäNykyinenVuoro() {         /*ALOITUSVUORO*/
    var vuoroElementti = document.getElementById("heittäjä");
    vuoroElementti.innerText = "Vuorossa: " + pelaajatListassa[indeksi];
}  

function lopeta() {   
    var valittuNoppa = document.querySelector("input[name='noppavalitsin']:checked");
    if (valittuNoppa.value === "1") {                  /*LOPETA FUNKTIO 1 NOPALLA*/
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        var summa = pisteetListassa.reduce((total, pisteetListassa) => total + pisteetListassa, 0);
        window["pisteet" + indeksi] += summa;
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
        if (window["pisteet" + indeksi] >= 100) {
            var pisteidensum = document.getElementById("kierrospisteet");
            pisteidensum.innerText = pelaajatListassa[indeksi] + " heitit " + window["pisteet" + indeksi] + " pistettä, olet voittaja!"
            kierrosluku();
        } else {
        pisteetListassa = [];
        kierrosluku();
        vuoronKirjaus();
        tyhjennäkierrospisteet(); 
        }
    } else {                                    /*LOPETA FUNKTIO 2 NOPALLA*/
        window["pisteet" + indeksi] += kierrospisteet;
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
        pisteetListassa = [];
        kierrospisteet = 0;
        tuplatKpl = 0;
        kierrosluku();
        vuoronKirjaus();
        tyhjennäkierrospisteet();
    }
}

function kierrosluku() {                /*PITÄÄ HUOLTA KIERROSLUVUSTA*/
    var kierroksetSijainti = document.getElementById("kierrokset" + indeksi);
    var kierroksetYhteensä = "Kierrokset: ";
    window["kierros" + indeksi] += 1;       
    kierroksetSijainti.innerText = kierroksetYhteensä + window["kierros" + indeksi];
}
var kierrospisteet = 0;

function ykkösTuplat() {            /*TUPLAT YKKÖSILLÄ*/
    var pisteidensum = document.getElementById("kierrospisteet");
    pisteetListassa.push(1);
    pisteetListassa.push(1);
    var summa = pisteetListassa.reduce((total, pisteetListassa) => total + pisteetListassa, 0);
    kierrospisteet += 25;
    if (window["pisteet" + indeksi] + kierrospisteet >= 100) {
        window["pisteet" + indeksi] += 25;
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "\n" + "Yhteensä: " + kierrospisteet + " pistettä." + "\n" + pelaajatListassa[indeksi] + " heitit " + window["pisteet" + indeksi] + " pistettä, olet voittaja!"
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
    } else {
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "\n" + "Yhteensä: " + kierrospisteet + " pistettä.";
    }
}

function tuplat(ekaRandomNum, tokaRandomNum) {      /*TUPLAT MUILLA NUMEROILLA*/
    var pisteidensum = document.getElementById("kierrospisteet");
    pisteetListassa.push(ekaRandomNum);
    pisteetListassa.push(tokaRandomNum);
    var summa = pisteetListassa.reduce((total, pisteetListassa) => total + pisteetListassa, 0);
    kierrospisteet += (ekaRandomNum + tokaRandomNum) * 2;
    if (window["pisteet" + indeksi] + kierrospisteet >= 100) {
        window["pisteet" + indeksi] += (ekaRandomNum + ekaRandomNum) * 2;
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "\n" + "Yhteensä: " + kierrospisteet + " pistettä." + "\n" + pelaajatListassa[indeksi] + " heitit " + window["pisteet" + indeksi] + " pistettä, olet voittaja!"
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
    } else {
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "\n" + "Yhteensä: " + kierrospisteet + " pistettä.";
    }
}

function lisääPisteitä_2(ekaRandomNum, tokaRandomNum) { 
    var pisteidensum = document.getElementById("kierrospisteet");   /*PITÄÄ KIRJAA PELAAJAN HEITTÄMISTÄ NOPISTA*/
    pisteetListassa.push(ekaRandomNum);
    pisteetListassa.push(tokaRandomNum);
    var summa = pisteetListassa.reduce((total, pisteetListassa) => total + pisteetListassa, 0);
    kierrospisteet += ekaRandomNum + tokaRandomNum;
    if (window["pisteet" + indeksi] + kierrospisteet >= 100) {
        window["pisteet" + indeksi] += kierrospisteet;
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "." + "\n" + "Yhteensä: " + kierrospisteet + " pistettä." + "\n" + pelaajatListassa[indeksi] + " heitit " + window["pisteet" + indeksi] + " pistettä, olet voittaja!"
        var pistSijainti = document.getElementById("yht" + indeksi);
        var pisteetYhteensä = "Pisteet yhteensä: ";
        pistSijainti.innerText = pisteetYhteensä + " " + window["pisteet" + indeksi];
    } else {
        pisteidensum.innerText = "Heitetyt nopat: " + pisteetListassa + "." + "\n" + "Yhteensä: " + kierrospisteet + " pistettä.";
    }
}
var tuplatKpl = 0;
function tuplatYkkösilläLaskuri() {             /*LASKURI JOS HEITTÄÄ YKKÖSILLÄ TUPLAT*/
    tuplatKpl += 1;
    if (tuplatKpl === 3) {
        var ykkösnoppa = document.getElementById("kierrospisteet");
        ykkösnoppa.innerText = "Heitit kolmannen kerran peräkkäin tuplat, menetit pisteet ja vuoro siirtyy seuraavalle";
        pisteetListassa = [];
        kierrospisteet = 0;
        tuplatKpl = 0;
        kierrosluku();
        vuoronKirjaus();
    } else {
        ykkösTuplat();
    }
}

function tuplatMuillaLaskuri() {                /*LASKURI JOS HEITTÄÄ MUILLA TUPLAT*/
    tuplatKpl += 1;
}