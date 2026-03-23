const natural = require("natural");

const classifier = new natural.BayesClassifier();

classifier.addDocument("quero comprar um carro", "compra");
classifier.addDocument("gostaria de ver veículos", "compra");

classifier.addDocument("preciso de ajuda", "suporte");
classifier.addDocument("estou com problema no carro", "suporte");

classifier.addDocument("qual o preço do carro", "preco");
classifier.addDocument("quanto custa", "preco");

classifier.train();

const pergunta = "preciso achar meu carro";

const resposta = classifier.classify(pergunta);

console.log("Pergunta do usuário:", pergunta);
console.log("Intenção detectada:", resposta);

if (resposta === "compra") {
    console.log("Bot: Vou te mostrar os carros disponíveis.");
}

if (resposta === "suporte") {
    console.log("Bot: Vou encaminhar você para o suporte.");
}

if (resposta === "preco") {
    console.log("Bot: Vou verificar os preços para você.");
}