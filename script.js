function toogleMode(){
  const html = document.documentElement

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // O exemplo de cima faz a mesma coisa que a linha de baixo
  html.classList.toggle('light')

  // Altera a imagem 
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Raul Fernandes em formato carton, usando uma camisa verde, com os braços cruzados e uma paisagem com montanhas de fundo.')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Raul Fernandes, usando uma camisa verde, com os braços cruzados e uma paisagem com montanhas de fundo.')
  }
}