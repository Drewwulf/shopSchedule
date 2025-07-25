
function y()
{
 let im = new Date(document.getElementById("mateo").value);
    console.log(im);
    im.setDate(im.getDate()-4);
 let pp = document.getElementById("op");
 for(let u = 0; u < 20; u += 1)
     {
        let ii = document.createElement("td");
         pp.appendChild(ii);
         im.setDate(im.getDate()+1);

         ii.textContent =im.toISOString().split("T")[0];


     }
}
