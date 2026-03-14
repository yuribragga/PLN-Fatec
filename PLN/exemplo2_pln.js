const natural = require("natural");

const classifier = new natural.BayesClassifier();

classifier.addDocument("ganhe dinheiro rápido", "spam");
classifier.addDocument("promoção imperdível clique agora", "spam");

classifier.addDocument("reunião amanhã às 10h", "normal");
classifier.addDocument("segue o relatório solicitado", "normal");

classifier.train();

const mensagem = "ganhe dinheiro agora clicando aqui";

const resultado = classifier.classify(mensagem);

console.log("Mensagem:", mensagem);
console.log("Classificação:", resultado);

if (resultado === "spam") {
    console.log("Esta mensagem foi marcada como SPAM.");
} else {
    console.log("Mensagem considerada segura.");
}