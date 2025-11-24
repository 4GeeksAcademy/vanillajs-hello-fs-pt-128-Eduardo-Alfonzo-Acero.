let pronoun = ['the', 'our', 'the'];
let adj = ['great', 'big', 'last'];
let noun = ['jogger', 'racoon', 'ofus'];
let extenciones = ['com', 'net', 'us', 'io', 'es']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extenciones.length; l++) {
                let dominio = pronoun[i]+adj[j]+noun[k]
                if (dominio.endsWith(extenciones[l])) {
                    console.log(dominio.slice(0,(dominio.length - extenciones[l].length)) + "." + extenciones[l])
                } else {
                    console.log(dominio + "." + extenciones[l])
                }
            }
        }
    }
}
  