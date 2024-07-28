const bloque = document.querySelectorAll(".acordeon-bloque");
const h2 = document.querySelectorAll(".texto");
const span = document.getElementById("span");


h2.forEach((cadaH2, i)=>{
  h2[i].addEventListener("click", ()=>{
   
   bloque.forEach( (cadaBloque, i)=>{
         bloque[i].classList.remove("activo")
        
      })
      bloque[i].classList.add("activo")
      
   })
   
})   

