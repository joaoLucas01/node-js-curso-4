const livros = require('./listaLivros')

function bubbleSort(lista) {
    let trocou;
    do {
        trocou = false;
        for (let i = 0; i < lista.length - 1; i++) {
            if (lista[i].preco > lista[i + 1].preco) {
                // Troca de posição
                let temp = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = temp;
                trocou = true;
            }
        }
    } while (trocou);
    
    return lista;
}

const listaOrdenada = bubbleSort(livros);
console.log(listaOrdenada);
