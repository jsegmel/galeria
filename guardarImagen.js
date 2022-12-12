import { GALERIA } from "./const";

const toBase64 = ( file ) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

form.addEventListener('',(e)=>{
    let foto=document.getElementById('inputPhoto').target
   
    console.log(foto)   
}) 

//document.getElementById('inputPhoto').addEventListener('change',async (val)=> {
//    const foto = await toBase64(val.target.files[0])
//    document.getElementById("containerPhoto").src=foto
//})


document.getElementById('inputPhoto').addEventListener('change', (val)=> {
    const file = val.target.files[0]
    toBase64(file)
    .then(val => {
        document.getElementById("containerPhoto").src=val
    })
    .catch(error => console.error(error))
    
})