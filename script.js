function zadacha() {
    let d = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    let row4 = document.getElementById("d1");
    let m = [
        0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1,
        0, 0, 1, 0, 0, 0
    ];
    let row1 = document.getElementById("d2");
    let t = [
        0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1,
        0, 0, 1, 0, 0
    ];
    let row2 = document.getElementById("d3");
    let f = [
        0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0,
        1, 0, 0, 1, 1
    ];
    let row3 = document.getElementById("d4");
    const today = new Date();
    const currentDate = new Date();
    for (let i = 0; i < 28; i += 1) {
        let td = document.createElement("td");
        row1.appendChild(td);
        if (m[i] === 1) {
            td.textContent = "x";
        }
        if (i === 0) {
            td.textContent = "Квіточка";
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
        }
    }

    for (let i = 0; i < 28; i += 1) {
        let td = document.createElement("td");
        row4.appendChild(td);
        if (i > 0) {
            td.textContent = "01.08.2025";
        }

        let data = today.getDay();
        let month = today.getMonth();
        let Year = today.getFullYear();
    }
}
zadacha();
