const natural = require("natural");

const classifier = new natural.BayesClassifier();

classifier.addDocument("ganhe dinheiro rápido", "spam");
classifier.addDocument("promoção imperdível clique agora", "spam");
classifier.addDocument("você foi selecionado para um prêmio", "spam");

classifier.addDocument("reunião amanhã às 10h", "normal");
classifier.addDocument("segue o relatório solicitado", "normal");
classifier.addDocument("vamos almoçar juntos?", "normal");

classifier.train();

const mensagem = "vamos comer algo";

const resultado = classifier.classify(mensagem);

console.log("Mensagem:", mensagem);
console.log("Classificação:", resultado);

if (resultado === "spam") {
    console.log("Esta mensagem foi marcada como SPAM.");
} else {
    console.log("Mensagem considerada segura.");
}

// Limitações da biblioteca Natural:
// - Suporte fraco para linguas diferentes do inglês
// - Modelos simples
// - Não entende contexto das frases
// - Precisa de muito treino
// - Dificuldade com linguagem real(gírias, erros de digitação)
// - Não tem uma boa escalabilidade