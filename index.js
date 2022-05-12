const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha1 = document.getElementById('senha1')
const senha2 = document.getElementById('senha2')

form.addEventListener('submit', e => {
  //evento de enviar, quando for enviado, tira o comporamento padrão do browser. Que no caso apagaria tudo digitado no input ao apertar o botão de submit
  e.preventDefault()

  checkInputs() // quando formulário for enviado, executa essa função, serve para a validação
})

function checkInputs() {
  const usernameValue = username.value.trim() //Trim é uma função do JS que retira todos espaços em brancos do texto, do início e fim.
  const emailValue = email.value.trim()
  const senha1Value = senha1.value.trim()
  const senha2Value = senha2.value.trim()

  if (usernameValue === '') {
    errorValidation(username, 'Preencha esse campo')
  } else if (usernameValue.length < 3 || usernameValue.length > 25) {
    errorValidation(username, 'Deve haver mais de 3 e menos de 25 caracteres')
  } else {
    successValidation(username)
  }

  if (emailValue === '') {
    errorValidation(email, 'Preencha esse campo')
  } else {
    successValidation(email)
  }

  if (senha1Value === '') {
    errorValidation(senha1, 'Preencha esse campo')
  } else if (senha1Value.length < 8) {
    errorValidation(senha1, 'deve conter no mínimo 8 caracteres')
  } else {
    successValidation(senha1)
  }

  if (senha2Value === '') {
    errorValidation(senha2, 'Preencha esse campo')
  } else if (senha1Value !== senha2Value) {
    errorValidation(senha2, 'Senhas diferentes')
  } else {
    successValidation(senha2)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function successValidation(input) {
  const formControl = input.parentElement

  formControl.className = 'form-control success'
}

function toggleButton() {
  if (username && email && senha1 && senha2) {
    document.querySelector('#login').disabled = false
    return
  }
  document.querySelector('#login').disabled = true
}
