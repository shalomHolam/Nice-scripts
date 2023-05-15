// קבלת משבצת לפי מיקום
function getSlot(x,y) {
    return $(`[data-x="${x}"][data-y="${y}"]`);
}

let gs = getSlot;


let slots = $(".digit-slot");

//קבלת המשבצות הרלוונטיות למשבצת נתונה 
function members(meSlot) {
    const x = meSlot.getAttribute("data-x"),
          y = meSlot.getAttribute("data-y"),
          id = meSlot.id,
          list = $(`[data-general-slot]:has(#${id}) .digit-slot:not(#${id}),
                  [data-x="${x}"]:not(#${id}),
                  [data-y="${y}"]:not(#${id})`);
          return list;
}

// בדיקה האם משבצת יכולה לקבל מספר מסוים

function isPossibule(meSlot, _num) {
    const num = _num.toString(),
        membersWithThisNum = members(meSlot).toArray().filter((slot) => slot.innerHTML === num); // !
    return membersWithThisNum.length === 0;
}

// נסה למלא את המשבצת והחזר תשובה אם הצלחת
function tryFill(slot, except) {
    for (let i = 1; i <= 9; i++) {
        if (i !== except && isPossibule(slot, i)) {
            slot.innerHTML = i;
            return true;
        }
    }
    return false;
}


function fill(index, except) {
    console.log("index: " + index)
    if (index > 14) {
        return;
    }
    if (tryFill(slots.get(index), except)) {
        fill (index + 1);
    }

    else {
        fill (index - 1, slots.get(index - 1).innerHTML)
    }
}


// החזרת מערך ללא רכיב פלוני (זמני)
Array.prototype.takeOut = function(item) {
    return this.filter(i=> i !== item);
}


// בדיקה אם המספר הנוכחי של משבצת חוקי
function isValid(meSlot) {
    const meSlotNum = meSlot.innerText, // a string!
          membersWithSameNum = members(meSlot).filter(slot => slot.innerText === meSlotNum);
        if (membersWithSameNum.length === 0) {
            return true;
            }
    membersWithSameNum.concat(meSlot).forEach(member => warn(member));
    return false;
}

// סימון משבצת כלא חוקית
function warn(slot) {
    let hihuv = setInterval(() => slot.style.backgroundColor = slot.style.backgroundColor === "red" ? "" : "red", 300)
        setTimeout(() => {
            clearInterval(hihuv);
            slot.style.backgroundColor = "red"; 
            }, 3000);
}


//ניקוי עיצוב משבצות
function clear(){[...$$(".number-slot")].forEach(o=>o.style={})}

// מילוי הטבלה בערכים רנדומליים
function f () {$$(".digit-slot").forEach(o=>o.innerHTML= Math.floor(Math.random()*8)+1);}
