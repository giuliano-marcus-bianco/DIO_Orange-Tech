// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço da etiqueta e a escolha de condição de pagamento.

// Utilize os códigos da tabela a seguir para ler qual o condição de pagamento escolhida e efetuar o cálculo adequado.

// Código de condições de pagamento:
// 1 - À vista no 'Débito' = recebe 10% de desconto;
// 2 - À vista no 'Dinheiro' ou 'PIX' = recebe 15% de desconto;
// 3 - Em '2x' = preço normal, sem juros.
// 4 - Acima de '2x' = preço normal da etiqueta mais juros de 10%

let precoEtiqueta = 200;
let condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    console.log(precoEtiqueta * 0.9)
} else if (condicaoPagamento === 2) {
    console.log(precoEtiqueta * 0.85)
} else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log((precoEtiqueta * 1.1).toFixed(0))
}

