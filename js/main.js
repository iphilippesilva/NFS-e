function gerarNota() {
  //pegar input usuario
  const valorVenda =
    parseFloat(document.querySelector("#valorVenda").value) || 0;
  const itens =
    document.querySelector("#itens").value || "Itens não especificados";
  const irpf = parseFloat(document.querySelector("#irpf").value) || 0;
  const pis = parseFloat(document.querySelector("#pis").value) || 0;
  const cofins = parseFloat(document.querySelector("#cofins").value) || 0;
  const inss = parseFloat(document.querySelector("#inss").value) || 0;
  const issqn = parseFloat(document.querySelector("#issqn").value) || 0;

  //calculo dos impostos

  const valorIRPF = (valorVenda * irpf) / 100;
  const valorPIS = (valorVenda * pis) / 100;
  const valorCOFINS = (valorVenda * cofins) / 100;
  const valorINSS = (valorVenda * inss) / 100;
  const valorISSQN = (valorVenda * issqn) / 100;
  const totalImpostos =
    valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
  const valorLiquido = valorVenda - totalImpostos;

  // Montagem da Nota Fiscal
  const resultDiv = document.querySelector("#resultado");

  resultDiv.innerHTML = `
  
    <h2>Nota Fiscal de Serviço</h2>
    <p><strong>Itens Vendidos:</strong> ${itens}</p>
    <p><strong>Valor Bruto:</strong> R$ ${valorVenda.toFixed(2)}</p>
    <p><strong>Impostos:</strong></p>
    <ul>
      <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
      <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
      <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
      <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
      <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
    </ul>
    <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
    <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>

  `;

  resultDiv.style.display = "block";
}
