const piramide = (pisos) => {
    let nivel = 0;
    
    for (nivel; nivel < pisos; nivel++) {
        let texto = "";
        let simbolo = 0;
        let espacio = 1;

        for (espacio; espacio < (pisos - nivel); espacio++) {
            texto = texto + " ";
        }  
        for (simbolo; simbolo < ((nivel * 2) + 1); simbolo++) {
            texto = texto + "*";
        }  
          
        console.log(texto);
    }
}

piramide(4)
