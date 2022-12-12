import { GALERIA } from "./const";

form.addEventListener('click',(e)=>{
    let foto=document.getElementById('inputPhoto').value
    GALERIA.unshift(foto)
    console.log(GALERIA.map)
})