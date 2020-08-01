var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(ch, c, n) {

    if (n <= 0) return "Number cannot be zero/negative";
    for (let i = 0; i < n; i++) ch.unshift(c);
    return ch;
}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(ch, n) {
    let l = [];
    if (n <= 0) return "Number cannot be zero/negative";
    if (n > ch.length) return "Insufficient chocolates in the dispenser";
    for (let i = 0; i < n; i++) l.push(ch.shift());
    return l;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(ch, n) {
    let l = [];
    if (n <= 0) return "Number cannot be zero/negative";
    if (n > ch.length) return "Insufficient chocolates in the dispenser";
    for (let i = 0; i < n; i++) l.push(ch.pop());
    return l;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(ch, n) {
    let l = [];
    if (n <= 0) return "Number cannot be zero/negative";
    if (n > ch.length) return "Insufficient chocolates in the dispenser";
    for (let i = 0; i < n; i++) l.push(ch.pop());
    return l;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(ch, n, c) {
    let l = [];
    if (n <= 0) return "Number cannot be zero/negative";
    if (n > ch.length) return "Insufficient chocolates in the dispenser";
    //if(ch.length==1) return ch.length;
    let m = [];
    m.push(ch);
    for (let j = 0; j < ch.length; j++) {
        let p = 0;
        for (let k = 1; k < ch.length; j++) {
            if (m[j] == ch[k]) p++;
        }
        l.push(p);
    }
    return l;
    for (let i = 0; i < n; i++) {
        if (ch[i] == c) l.push(ch[i]);
    }
    return l;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount() { }

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(ch, n, c1, c2) {
    let l = [];
    if (ch.length == 0) return l;
    if (n <= 0) return "Number cannot be zero/negative";
    if (n > ch.length) return "Insufficient chocolates in the dispenser";
    for (let i = 0; i < n; i++) {
        if (ch[i] != c2) {
            ch[i] = c2;
            //break;
        }
        else if (ch[i] == c2) return "Can't replace the same chocolates";
    }
    return ch;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(ch, c1, c2) {
    let l = [];
    if (ch.length == 0) return [0, ch];
    if (c1 == c2)
        return "Can\'t replace the same chocolates";
    if (ch.length == 1) {
        l.push(ch.length, [c2]);
        return l;
    }
    else {
        for (let i = 0; i < ch.length; i++) {
            if (ch[i] == c1)
                ch[i] = c2;
        }
        l.push(ch.length, ch);
        return l;
    }
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
