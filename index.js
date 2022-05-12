function cadBoletim(nome, nota1, nota2, frequencia){

    //verifica se os campos foram preenchidos
    if(nome == false || nota1 == false || nota2 == false || frequencia == false){
        alert('Preencha o campo corretamente!');
    }
    else if(nota1 > 10 || nota1  < 0 || nota2 > 10 || nota2 < 0){ //verifica se as notas estao entre 0 e 10
        alert('A nota deve estar entre 0 e 10');
    }
    else if(frequencia > 100 || frequencia < 0){
        alert('A frequência deve estar entre 0 e 100!'); //verifica se a frequencia esta entre 0 e 100
    }
    else{
        var tb = document.getElementById('tbAlunos'); //Acessa a tabela 
        var qtdLinhas = tb.rows.length; //faz a contagem de linhas na tabela
        var linha = tb.insertRow(qtdLinhas); //insere uma linha sem conteudo apos a ultima

        //conversao de string para number
        var floatNota1 = parseFloat(nota1);
        var floatNota2 = parseFloat(nota2);
        var floatFreq = parseFloat(frequencia);
        
        //calculo media do aluno
        var media = (floatNota1 + floatNota2) / 2;
        
        //convertendo para mostrar 2 casas decimais
        var nota1Final = floatNota1.toFixed(2);
        var nota2Final = floatNota2.toFixed(2);
        var notaFinal = media.toFixed(2);
        var freqPorcent = floatFreq.toFixed(2);

        //Insere na linha o conteudo no vetor especificado
        var cellCodigo = linha.insertCell(0);
        var cellNome = linha.insertCell(1);
        var cellNota1 = linha.insertCell(2); 
        var cellNota2 = linha.insertCell(3);
        var cellNotaFinal = linha.insertCell(4);
        var cellFrequencia = linha.insertCell(5);

        //Adiciona o texto guardado na variavel contida
        cellCodigo.innerHTML = qtdLinhas;
        cellNome.innerHTML = nome;
        cellNota1.innerHTML = nota1Final;
        cellNota2.innerHTML = nota2Final;
        cellNotaFinal.innerHTML = notaFinal;
        cellFrequencia.innerHTML = freqPorcent + ' %' //sendo do type='text', permite concatenar para mostrar simbolo de porcentagem ao final

        
        //estilizacao Css 

        var resultado = document.getElementsByTagName('tr')[qtdLinhas];
        resultado.style.textTransform='capitalize';

        if(notaFinal >= 7 && freqPorcent > 75){
            resultado.style.background='lightgreen';
        }
        else{
            resultado.style.background='tomato';
        }
    }
}


