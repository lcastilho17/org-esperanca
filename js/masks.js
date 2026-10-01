document.addEventListener('DOMContentLoaded', () => {
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  // Máscara de CPF
  cpfInput?.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = value;
  });

  // Máscara de Telefone
  telefoneInput?.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    if (value.length > 13) {
      value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    } else {
      value = value.replace(/(\d{4})(\d{4})$/, '$1-$2');
    }

    e.target.value = value;
  });

  // Máscara de CEP
  cepInput?.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);

    value = value.replace(/^(\d{5})(\d)/, '$1-$2');

    e.target.value = value;
  });
});s