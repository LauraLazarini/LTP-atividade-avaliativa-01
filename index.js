class Noticia{
  constructor(titulo, data_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + "\n" + this.data_publicacao + "\n" + "\n" + this.resumo + "\n" + this.texto +"\n"
  }
}

var minhaNoticia = new Noticia("Morador pede resgate de capivara e quando polícia chega ao local encontra vizinho ‘carneando’ animal em MS","02/03/2022 - 17h59","O caso foi registrado na cidade de Aparecida do Taboado e vizinho matou o animal com tiros, segundo a Polícia Militar Ambiental (PMA).","Um homem de 54 anos foi preso após matar a tiros uma capivara e retirar o couro do animal para consumir a carne, segundo a Polícia Militar Ambiental (PMA), em Aparecida do Taboado (MS), a 458 km de Campo Grande, no final da tarde de terça-feira (1º). De acordo com a PMA, um morador solicitou o resgate de uma capivara que tinha entrado em sua propriedade e quando os policiais chegaram ao endereço, a pessoa disse que a capivara já tinha ido saído. No momento em que os profissionais se preparavam para ir embora, ouviram o disparo de uma arma de fogo.")
console.log(minhaNoticia.mostrarNoticia())