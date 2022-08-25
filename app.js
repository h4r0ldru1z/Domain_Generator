console.log("Hello World");
var pronoun = ["the", "our", "Mr", "Main"];
var adj = ["great", "big", "pal", "veryunique"];
var noun = ["jogger", "racoon", "triathetl"];
var ext = [".es", ".com", ".org"];
var hacks = [];
var dominios = [];

function generadorDeDominios(parte1, parte2, parte3, parte4) {
  //let nombreDominio = 0;
  for (let index in parte3) {
    for (let index2 in parte4) {
      let namehacks = parte3[index] + parte4[index2];
      hacks.push(namehacks);
    }
  }
  for (let a = 0; a < parte1.length; a++) {
    for (let b = 0; b < parte2.length; b++) {
      for (let c = 0; c < hacks.length; c++) {
        let nombreDominio = parte1[a] + parte2[b] + hacks[c];
        dominios.push(nombreDominio);
      }
    }
  }
}

generadorDeDominios(pronoun, adj, noun, ext);
console.log(dominios);
