let loremIpsim = "";
const otiot = "אבגדהוזחטיכלמנסעפצרקרשת";
const sofiot = {
כ:
"ך",
מ:
"ם",
נ:
"ן",
פ:
"ף",
צ:
"ץ"             
};

let maxLength = 6;
let minLength = 3;
let words = 100;

function newWord(minLength, maxLength) {
    let word = "", len = Math.round(Math.random()) * maxLength - minLength;
        for (let x = 0; x < len; x++) {
            word += otiot[Math.round(Math.random()) * otiot.length];
        }
    
    if (sofiot[word[len]]) {
        let fixedOt = sofiot[word[len]];
        word = word.split(word[len])[0] + fixedOt;
    }
    return word;
}

for (let n = 0; n < words; n++) {
    loremIpsim += newWord() + " ";
}