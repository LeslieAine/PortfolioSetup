const card1 = {
    title: 'Keeping track of hundreds  of components website',
    techList: [
        'html',
        'Bootstrap',
        'Ruby on rails'
    ],
    description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essent'`,
    link: [
      'https://LeslieAine.github.io/PortfolioSetup/',
      'https://github.com/LeslieAine/',
    ],
    image: 'images/card1.png',
  };
  
  const card2 = {
    title: 'Multi Post Stories',
    techList: [
        'html',
        'Bootstrap',
        'Ruby on rails'
    ],
    description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essent'`,
    link: [
        'https://LeslieAine.github.io/PortfolioSetup/',
        'https://github.com/LeslieAine/',
    ],
    image: 'images/card2.png',
  };
  
  const card3 = {
    title: 'Multi Post Stories',
    techList: [
        'html',
        'Bootstrap',
        'Ruby on rails'
    ],
    description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essent'`,
    link: [
        'https://LeslieAine.github.io/PortfolioSetup/',
        'https://github.com/LeslieAine/',
    ],
    image: 'images/card2.png',
  };
  
  const card4 = {
    title: 'Multi Post Stories',
    techList: [
        'html',
        'Bootstrap',
        'Ruby on rails'
    ],
    description: `'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essent'`,
    link: [
        'https://LeslieAine.github.io/PortfolioSetup/',
        'https://github.com/LeslieAine/',
    ],
    image: 'images/card2.png',
  };
  
  const projects = [card1, card2, card3, card4];
  function modal(number) {
    const card = document.querySelector('#card');
    card.classList.toggle('invisible');
    const title = document.querySelector('#card-title');
    
    const img = document.querySelector('.card-image');
    const desc = document.querySelector('#card-description');
    const techList = document.querySelector('#tech-list');
    techList.innerHTML = '';
    const buttonsrc = document.querySelector('#card-button-source');
    const buttonlive = document.querySelector('#card-button-live');
    title.innerHTML = projects[number].title;
    
    img.setAttribute('src', projects[number].image);
    for (let i = 0; i < projects[number].techList.length; i += 1) {
      const li = document.createElement('li');
      li.textContent = projects[number].techList[i];
      techList.appendChild(li);
    }
    desc.innerHTML = projects[number].description;
    buttonsrc.setAttribute('onclick', `window.open("${projects[number].link[1]}", "_blank");`);
    buttonlive.setAttribute('onclick', `window.open("${projects[number].link[0]}", "_blank");`);
  }
  function toggle() {
    const card = document.querySelector('#card');
    card.classList.toggle('invisible');
  }
  toggle();
  modal();
  