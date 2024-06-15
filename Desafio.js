let heroId = [["Alex", 950], ["Kyle", 6500], ["Trogar", 8750], ["Arthur", 19000]];
let nivel;
let i = 0;


while (i < heroId.length) {

    XPp = heroId[i][1];

    switch (true) {
        case (XPp <= 1000):
            nivel = "Ferro";
            break;
        case (1001 <= XPp && XPp <= 2000):
            nivel = "Bronze";
            break;
        case (2001 <= XPp && XPp <= 5000):
            nivel = "Prata";
            break;
        case (5001 <= XPp && XPp <= 7000):
            nivel = "Ouro";
            break;
        case (7001 <= XPp && XPp <= 8000):
            nivel = "Platina";
            break;
        case (8001 <= XPp && XPp <= 9000):
            nivel = "Ascendente";
            break;
        case (9001 <= XPp && XPp <= 10000):
            nivel = "Imortal";
            break;
        case (XPp > 10000):
            nivel = "Radiante";
            break;
        default:
            nivel = "Out of Bounds"
    }

    console.log("O Herói de nome " + heroId[i][0] + " está no nível de " + nivel);
    i++;

}