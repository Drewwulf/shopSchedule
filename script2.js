
function y()
{
 let im = new Date(document.getElementById("mateo").value);
    console.log(im);
    im.setDate(im.getDate()-4);
 let pp = document.getElementById("op");
 for(let u = 0; u < 20; u += 1)
     {

        let ii = document.createElement("td");
        ii.style.transform = "rotate(-90deg)";
         pp.appendChild(ii);
         im.setDate(im.getDate()+1);
         if(u != 0)
          {
         ii.textContent =im.toISOString().split("T")[0];
          }


     }
     for(let p  = 1; p < 21; p += 1)
      {
       let oof = document.getElementById("yeah");
       let ppp = document.createElement("td");
       oof.appendChild(ppp);
       if(p === 1)
        {
         ppp.textContent = "Квіточка";
        }

      }

       for(let ff = 1; ff < 21; ff += 1)
      {
       let back = document.getElementById("hope");
       let hh = document.createElement("td");
       back.appendChild(hh);
       if(ff === 1)
        {
         hh.textContent = "Таня";
        }

      }

      for(let kk  = 1; kk < 21; kk += 1)
      {
       let bony = document.getElementById("mimic");
       let pingwin = document.createElement("td");
       bony.appendChild(pingwin);
       if(kk === 1)
        {
         pingwin.textContent = "Мирося";
        }

      }



}
