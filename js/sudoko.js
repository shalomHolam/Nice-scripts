// קבלת משבצת לפי מיקומה
function getSlot(x,y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
}
 
// קבלת המשבצות עם מספר פלוני, מתוך מערך
function slotsWithNum(slots, numToSearch) {
    return slots.filter(slot=> slot.innerText === numToSearch);
}
//*
// החזרת מערך ללא רכיב פלוני (זמני)
Array.prototype.takeOut = function(item) {
    return this.filter(i=> i !== item);
}
*//

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

function isPossibule(meSlot, _num) {
    const num = _num.toString(),
        membersWithThisNum = members(meSlot).filter(slot => slot.innerText === num);
    return membersWithThisNum.length === 0;
}

function members(meSlot) {
    const meSlotX = meSlot.getAttribute("data-x"),
        meSlotY = meSlot.getAttribute("data-y"),
        membersX = [...$$(`[data-x="${meSlotX}"]`)],
        membersY = [...$$(`[data-y="${meSlotY}"]`)],
        membersInGeneral = [...meSlot.parentNode.parentNode.querySelectorAll(".number-slot")].takeOut(meSlot), // לקצר
        allMembers = [].concat(membersInGeneral, membersX, membersY).takeOut(meSlot);
        return Array.from(new Set(allMembers));
}

// סימון משבצת כלא חוקית
function warn(slot) {
    let hihuv = setInterval(() => slot.style.backgroundColor = slot.style.backgroundColor === "red" ? "" : "red", 300)
        setTimeout(() => {
            clearInterval(hihuv);
            slot.style.backgroundColor = "red"; 
            }, 3000);
}

// החזרת מערך בי רכיב פלוני
Array.prototype.takeOut = function(item) {
    return this.filter(i=> i !== item);
}

//ניקוי עיצוב משבצות
function clear(){[...$$(".number-slot")].forEach(o=>o.style={})}

// יציררת סודוקו
function fill(index, except) {
    console.log("index is " + index)
    if (index > 80) {
        return;
    }
    if (tryFill(slots[index], except)) {
        fill (index + 1);
    }

    else {
        fill (index - 1, slots[index - 1].innerHTML)
    }
}

function tryFill(slot, except) {
    for (let i = 1; i <= 9; i++) {
        if (i !== except && isPossibule(slot, i)) {
            slot.innerHTML = i;
            return true;
        }
    }
    return false;
}

let slots = [...$(".digit-slots")];
