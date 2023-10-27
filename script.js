// let a = document.getElementById("id1");
// let b = prompt("Enter Color");
// document.body.style.backgroundColor = b;

const handleClick = () => {
    let c = document.getElementById("ip").value;
    document.body.style.backgroundColor = c;
}


const add = () => {
    let c = document.getElementById("ip1").value;
    c = Number(c);

    let d = document.getElementById("ip2").value;
    d = Number(d);

    let x = document.getElementById("cal");
    x.innerHTML = c + d;

}
const sub = () => {
    let c = document.getElementById("ip1").value;
    c = Number(c);

    let d = document.getElementById("ip2").value;
    d = Number(d);

    let x = document.getElementById("cal");
    x.innerHTML = c - d;

}
const mul = () => {
    let c = document.getElementById("ip1").value;
    c = Number(c);

    let d = document.getElementById("ip2").value;
    d = Number(d);

    let x = document.getElementById("cal");
    x.innerHTML = c * d;

}
const div = () => {
    let c = document.getElementById("ip1").value;
    c = Number(c);

    let d = document.getElementById("ip2").value;
    d = Number(d);

    let x = document.getElementById("cal");
    x.innerHTML = c / d;

}