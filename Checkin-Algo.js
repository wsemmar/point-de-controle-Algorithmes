function getOrder(input) {
    let Lp;
    let Nm
    let Nv = 0
    let Voyelle = ["a","e","i","o","u","y"]
     for( let i=0 ;i<input.length; i++){
        Lp = i+1 
    }
        
         const mot = input.split(" ") 
    for(let i=0; i<mot.length; i++){
        Nm = i+1
    }
   for(let i=0; i<input.length; i++){
       for(let y=0; y<Voyelle.length; y++){
         if(input[i] == Voyelle[y]){
            Nv += 1
         }
       }
       
   }
  console.log("Nombre de caractères "+Lp+", nombre de mots "+Nm+", nombre de voyelles "+Nv) 
}
getOrder ("zzzzzzy zzzzzzzzaazzazez");

