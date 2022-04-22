let nomeEmpresa = "LuizaLabs";
let anosExperiencia =10;

//Sem template string
let textoComum = "Oi, somos a " +nomeEmpresa +"! Um grupo de pessoas apaixonadas pelo digital e queremos te convidar para fazer parte desta revolução!";
                "\n\nCom mais de " +anosExperiencia+ "anos de experiência em cursos de performance digital, nos tornamos refrência no Brasil.";
                "\n\nA gente acredita na troca de conhecimento e em  conexões verdadeiras para dar mais poder às pessoas e às empresas no desenolvimento de negócios.";
                "\n\nVamos juntos?";

console.log("Sem template string:");
console.log(textoComum);

//Com template string;
let textoTemplateString = `Oi, somos a ${nomeEmpresa}! Um grupo de pessoas apaixonadas pelo digital e queremos te convidar para fazer parte desta revolução!"

Com mais de ${anosExperiencia} anos de experiência em cursos de performance digital, nos tornamos refrência no Brasil."

A gente acredita na troca de conhecimento e em  conexões verdadeiras para dar mais poder às pessoas e às empresas no desenolvimento de negócios."

Vamos juntos?"`;


console.log("");
console.log("Com template string:");
console.log(textoTemplateString);
