// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat(name) {
    const copyOfCats = cats.slice(0, -1);
    return copyOfCats;
}

function removeFirstCat(name) {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}