function validarDataHabilitarCampos(input, id) {
  validarDataHora(input);
  controlarCamposGenerico(id, input.value);
}

function validarDataHora(input) {
  const msg = document.getElementById("mensagemErro");
  msg.textContent = "";

  let valor = input.value;
  if (!valor) return; //ignora se vazio

  let data = new Date(valor);

  // Valida data minima == hoje
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // como trabalha com data e date-local removemos a hora para primeiro validar a data
  let dataSelecionada = new Date(data.getFullYear(), data.getMonth(), data.getDate());

  if (dataSelecionada < hoje) {
    input.value = ""; // limpa o campo
    msg.textContent = "⚠️ A data não pode ser igual ou anterior a hoje.";
    return;
  }

  // Valida a hora dentro do range (não obrigatório)
  if (valor.includes("T")) { // só valida hora se o usuário digitou também
    let hora = data.getHours();
    if (hora < 9 || hora > 17) {
      input.value = ""; // limpa o campo
      msg.textContent = "⚠️ O horário permitido é entre 09:00 e 17:00.";
      return;
    }
  }
}

function emitirMensagemSucesso(event, formulario) {
  event.preventDefault(); // impede o envio automático
  alert("✅ Cadastro realizado com sucesso!");
  formulario.reset();
  window.location.href = "index.html";
}

function resetFormulario(idFormulario, idDesabitilar){
    const formulario = document.getElementById(idFormulario);
    formulario.reset(); // limpa os campos do formulário
    controlarCamposGenerico(idDesabitilar, false); // chama a função de controlar os campos passando checado como false

}

function controlarCamposGenerico(id, preenchido) {
  let componente = document.getElementById(id);

  if (preenchido) {
    componente.disabled = false; // habilita
  } else {
    componente.disabled = true; // desabilita
  }
}
