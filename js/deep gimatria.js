const latterNames = {
  א: "אלף",
  ב: "בית",
  ג: "גימל",
  ד: "דלת",
  ה: "הא",
  ו: "וו",
  ז: "זיין",
  ח: "חית",
  ט: "טית",
  י: "יוד",
  כ: "כף",
  ך: "כף",
  ל: "למד",
  מ: "מם",
  ם: "מם",
  נ: "נון",
	ן: "נון",
  ס: "סמך",
  ע: "עין",
  פ: "פא",
  ף: "פא",
  צ: "צדי",
  ץ:"צדי",
  ק: "קוף",
  ר: "ריש",
  ש: "שין",
  ת: "תיו"
}

function gimatria(str) {
  let value = 0;
  const sofiot = {ך: 20, ם: 40, ן: 50, ף: 80, ץ: 90}
  for (let latter of str) {
    value += "אבגדהוזחט".indexOf(latter) + 1 +
      ("יכלמנסעפצ".indexOf(latter) + 1) * 10 +
      (sofiot[latter] || 0) +
      ("קרשת".indexOf(latter) + 1) * 100;
  }
  return value;
}

function getDeepString(str, howDeep) {
  let deepStr = "";
  for (let latter of str) {
    deepStr += latterNames[latter];
  }
// recursion
  for (let i = 2; i <= howDeep; i++) {
    deepStr = getDeepString(deepStr);
  }
  return deepStr;
}

function getDeepGimatria(latter, howDeep = 1) {
  let deepValue = gimatria(getDeepString(latter, howDeep));
  return deepValue;
}

getDeepGimatria()