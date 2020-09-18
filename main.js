 function changeText(newText) {
    var phrase = document.getElementById('phrase');

    phrase.style.opacity = 0

    setTimeout(() => {
      phrase.innerText = newText
      phrase.style.opacity = 1
    }, 600)
 }

 function addParticles(index) {
    const particlesContainer = document.getElementsByClassName('particles_container')[0];
    let colors = ["#e72008", "#ced7e4", "#6de7e3", "#c6d44f", "#fbcfe3", "#faecd9"];
    let lefts = [25, 45, 65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285]
    let opacities = [0.3, 0.5, 0.7, 1]
    let element = document.createElement('div');
    let delays = [1, 2, 3, 4, 5]

    element.setAttribute('id', `${index}`);
    element.setAttribute('class', 'particles fadejs')
    
    element.style.top = `${index * 2}0px`
    element.style.borderColor = colors[Math.floor(Math.random() * colors.length)]
    element.style.left = `${lefts[Math.floor(Math.random() * lefts.length)]}px`
    element.style.opacity = opacities[Math.floor(Math.random() * lefts.opacities)]
    element.style.animationDelay = `${delays[Math.floor(Math.random() * delays.length)]}s`
    particlesContainer.appendChild(element)
 }
 
 function main() {
  const arr = Array(45);

  let phrases = [
    "Jun Seba foi um produtor musical e DJ japonês, mais conhecido pelo nome artístico Nujabes, inversão do seu nome verdadeiro.",
    "Era dono das lojas de discos de Shibuya e fundador do selo independente Hydeout Productions",
    "Em 26 de fevereiro de 2010, ele sofreu um acidente de trânsito na rodovia Shuto Expressway, tendo sido encaminhado ao hospital, onde não resistiu",
    "Uma das características mais marcantes no trabalho de Nujabes é a influência do jazz e do soul, usando samples de gravações de músicos como o pianista Bill Evans e renomado saxofonista Yusef Lateef",
    "Nujabes gravou apenas 3 discos de estúdio e teve diversos trabalhos inacabados, complementados por outros artistas mais tarde",
    "Graças à capacidade de compartilhamento da internet, o trabalho de Nujabes é indiscutivelmente mais influente em uma escala mais ampla hoje do que em toda a sua vida"
  ]
  
  for(let i = 0; i < arr.length; i++){
    addParticles(i)
  }

  setInterval( () => {
    actualPhrase = document.getElementById('phrase');
    nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    if(nextPhrase !== actualPhrase) {
      changeText(nextPhrase);
    } else {
        nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      }
  }, 6000)
}

window.onload = main;