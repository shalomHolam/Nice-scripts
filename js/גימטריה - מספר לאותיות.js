const otiyotValues = [
    {ot: "א", val: 1},
    {ot: "ב", val: 2},
    {ot: "ג", val: 3},
    {ot: "ד", val: 4},
    {ot: "ה", val: 5},
    {ot: "ו", val: 6},
    {ot: "ז", val: 7},
    {ot: "ח", val: 8},
    {ot: "ט", val: 9},
    {ot: "י", val: 10},
    {ot: "כ", val: 20},
    {ot: "ל", val: 30},
    {ot: "מ", val: 40},
    {ot: "נ", val: 50},
    {ot: "ס", val: 60},
    {ot: "ע", val: 70},
    {ot: "פ", val: 80},
    {ot: "צ", val: 90},
    {ot: "ק", val: 100},
    {ot: "ר", val: 200},
    {ot: "ש", val: 300},
    {ot: "ת", val: 400}
];
let str = "";

function gematrya(num) {
    let ot = otiyotValues.findLast(() => true);
    
    /*if (num > 1000){
        let alafim = Math.floor(num / 1000),
        alafimStr = alafim === 1 ? "אלף " : gematrya(alafim) + " " + "אלפים ";
        str += alafimStr;
        console.log("המצב כרגע", alafim, alafimStr)
        num -= alafim * 1000;
    }*/
    
    if (!ot || !num) {
      return str;
    }
    if (num >= ot.val) {
      num -= ot.val;
      str += ot.ot;
    } else {
      otiyotValues.pop();
    }  
 return gematrya(num);
}

gematrya(783);