const pageAbout = () => {
  const canvas = document.querySelector('.canvas');

  const about = document.createElement('DIV');
  const ancestor = document.createElement('DIV');

  about.classList.add('about');
  ancestor.classList.add('tile');
  ancestor.classList.add('is-ancestor');

  canvas.appendChild(about);
  about.appendChild(ancestor);

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

  const text = (() => {
    const parent = document.createElement('DIV');
    const child = document.createElement('ARTICLE');
    const content = document.createElement('DIV');

    parent.classList.add('tile', 'is-parent');
    child.classList.add('tile', 'is-child');
    content.classList.add('content');

    ancestor.appendChild(parent);
    parent.appendChild(child);
    child.appendChild(content);

    const makeTxt = (() => {
      const title = document.createElement('P');
      const aboutText = document.createElement('DIV');

      title.classList.add('title');
      aboutText.classList.add('content');

      title.innerHTML = 'La Mafia di JS Ristorante';
      aboutText.innerHTML = `Situated in a far, far away galaxy, La Mafia di JS Ristorante is a very specialized traditional italian cuisine. <br> 
                             Our history begins many years ago, when young Lucas Skywalkeri used to lunch at his nonna every sunday. <br>
                             He watched her cooking and was amused by her techniques and passion. <br>
                             Every day thoughts of becoming a great cook came to Lucas's mind. <br>
                             One day he asked his nonna to teach him how to become a master cook. <br>
                             She took his wish to the great cook concil, which wasn't found of the idea because of his temper. <br>
                             Arguing she would be held responsible for the kid, was able to get permission to at last teach the young boy. <br>
                             Lucas grew to become a great master cook and invested all his funds and efforts on what would become the greatest fictional restaurant ever.`;

      content.appendChild(title);
      content.appendChild(aboutText);
    })();
  })();
};

export default pageAbout
