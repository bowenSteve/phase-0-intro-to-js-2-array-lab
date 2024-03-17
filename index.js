const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function  destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    const newArray = [...cats,name];
    return newArray;
}
function  prependCat(name){
    const newArray = [name, ...cats];
    return newArray;
}

function  removeLastCat(){
    const newCat = cats.slice(0,cats.length-1);
    return newCat;
}

function removeFirstCat(){
    const removedCat = cats.slice(1,cats.length);
    return removedCat;
}