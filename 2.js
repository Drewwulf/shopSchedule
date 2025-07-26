let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let row4 = document.getElementById("d2");
let m = [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0];
let row1 = document.getElementById("d2");
let t = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0];
let row2 = document.getElementById("d3");
let f = [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1];
let row3 = document.getElementById("d4");
for (let i = 0; i < 28; i += 1) {
    let td = document.createElement("td");
    row1.appendChild(td);
    if (m[i] === 1) {
        td.textContent = "x";
    }
    if (i === 0) {
        td.textContent = "Квіточка";
        td.style.color="gray";
    }
}
for (let i = 0; i < 28; i += 1) {
    let td = document.createElement("td");
    row2.appendChild(td);
    if (t[i] === 1) {
        td.textContent = "x";
    }
    if (i === 0) {
        td.textContent = "Таня";
        td.style.color="gray";
    }
}
for (let i = 0; i < 28; i += 1) {
    let td = document.createElement("td");
    row3.appendChild(td);
    if (f[i] === 1) {
        td.textContent = "x";
    }
    if (i === 0) {
        td.textContent = "Мирося";
        td.style.color="gray";
    }
}
for (let i = 0; i < 28; i += 1) {
    let td = document.createElement("td");
    row4.appendChild(td);
    if (f[i] === 1) {
        td.textContent = "x";
    }
    if (i === 0) {
        td.textContent = "01.08.25";
    }
}
