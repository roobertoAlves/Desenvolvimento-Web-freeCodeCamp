document.querySelector('button').addEventListener('click', calcularValores);

function calcularValores() {
    const salario = parseFloat(document.getElementById('salary').value);

    if (isNaN(salario) || salario <= 0) {
        alert('Por favor, insira um salário válido.');
        return;
    }

    let inss = 0;
    if (salario <= 1412) 
    {
        inss = salario * 0.075;

    } 
    else if (salario <= 2666.68) 
    {
        inss = (salario - 1412) * 0.09 + (1412 * 0.075);

    } 
    else if (salario <= 4000.03) 
    {
        inss = (salario - 2666.68) * 0.12 + (2666.68 - 1412) * 0.09 + (1412 * 0.075);

    } else if (salario <= 7786.02) 
    {
        inss = (salario - 4000.03) * 0.14 + (4000.03 - 2666.68) * 0.12 + (2666.68 - 1412) * 0.09 + (1412 * 0.075);
    } 
    else 
    {
        inss = (7786.02 - 4000.03) * 0.14 + (4000.03 - 2666.68) * 0.12 + (2666.68 - 1412) * 0.09 + (1412 * 0.075);
    }

    // Cálculo do FGTS
    const fgts = salario * 0.08;

    // Salário Líquido
    const salarioLiquido = salario - inss;

    // Exibindo os resultados
    document.getElementById('inss-value').textContent = `R$ ${inss.toFixed(2)}`;
    document.getElementById('fgts-value').textContent = `R$ ${fgts.toFixed(2)}`;
    document.getElementById('salario-liquido-value').textContent = `R$ ${salarioLiquido.toFixed(2)}`;
}
