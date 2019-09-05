// eslint-disable-next-line no-unused-vars
const pageAbout = () => {
  const canvas = document.querySelector('.canvas');

  const about = document.createElement('DIV');
  const ancestor = document.createElement('DIV');

  about.classList.add('about');
  ancestor.classList.add('tile');
  ancestor.classList.add('is-ancestor');

  canvas.appendChild(about);
  about.appendChild(ancestor);

  // eslint-disable-next-line no-unused-vars
  const image = (() => {
    const parent = document.createElement('DIV');
    const child = document.createElement('DIV');
    const figure = document.createElement('FIGURE');
    const img = document.createElement('IMG');

    parent.classList.add('tile');
    parent.classList.add('is-parent');
    parent.classList.add('is-3');
    child.classList.add('tile');
    child.classList.add('is-child');
    figure.classList.add('image');
    figure.classList.add('is-square');
    img.setAttribute('src', 'imgs/galaxy.jpg');

    ancestor.appendChild(parent);
    parent.appendChild(child);
    child.appendChild(figure);
    figure.appendChild(img);
  })();

  // eslint-disable-next-line no-unused-vars
  const text = (() => {
    const parent = document.createElement('DIV');
    const child = document.createElement('ARTICLE');
    const content = document.createElement('DIV');

    parent.classList.add('tile');
    parent.classList.add('is-parent');
    child.classList.add('tile');
    child.classList.add('is-child');
    content.classList.add('content');

    ancestor.appendChild(parent);
    parent.appendChild(child);
    child.appendChild(content);

    // eslint-disable-next-line no-unused-vars
    const makeTxt = (() => {
      const title = document.createElement('P');
      const aboutText = document.createElement('DIV');

      title.classList.add('title');
      aboutText.classList.add('content');

      title.innerHTML = 'La Mafia di JS Ristorante';
      aboutText.innerHTML = 'Situated in a far, far away galaxy, La Mafia di JS Ristorante is a very specialized traditional italian cuisine.';
      aboutText.innerHTML += '<br>Our history begins many years ago, when young Lucas Skywalkeri used to lunch at his nonna every sunday.';
      aboutText.innerHTML += '<br>He watched her cooking and was amused by her techniques and passion.';
      aboutText.innerHTML += '<br>Every day thoughts of becoming a great cook came to Lucas\'s mind.';
      aboutText.innerHTML += '<br>One day he asked his nonna to teach him how to become a master cook.';
      aboutText.innerHTML += '<br>She took his wish to the great cook concil, which wasn\'t found of the idea because of his temper.';
      aboutText.innerHTML += '<br>Arguing she would be held responsible for the kid, was able to get permission to at last teach the young boy.';
      aboutText.innerHTML += '<br>Lucas grew to become a great master cook and invested all his funds and efforts on what would become the greatest fictional restaurant ever.';

      content.appendChild(title);
      content.appendChild(aboutText);
    })();
  })();
};

// eslint-disable-next-line import/prefer-default-export
export { pageAbout };
