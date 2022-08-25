console.log("Hello World");
var pronoun = ["the", "our", "Mr", "Main"];
var adj = ["great", "big", "pal", "very unique"];
var noun = ["jogger", "racoon", "triathetle"];
var ext = [".es", ".com", ".org"];
var dominios = [];

function generadorDeDominios(parte1, parte2, parte3, parte4) {
  //let nombreDominio = 0;
  for (let a = 0; a < parte1.length; a++) {
    for (let b = 0; b < parte2.length; b++) {
      for (let c = 0; c < parte3.length; c++) {
        for (let d = 0; d < parte4.length; d++) {
          let nombreDominio = parte1[a] + parte2[b] + parte3[c] + parte4[d];
          dominios.push(nombreDominio);
        }
      }
    }
  }
}
generadorDeDominios(pronoun, adj, noun, ext);
console.log(dominios);
