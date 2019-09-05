// eslint-disable-next-line no-unused-vars
const pageMenu = () => {
  const canvas = document.querySelector('.canvas');

  const menu = document.createElement('DIV');
  let columns = document.createElement('DIV');

  menu.classList.add('menu');
  columns.classList.add('columns');
  columns.classList.add('is-tablet');

  canvas.appendChild(menu);
  menu.appendChild(columns);
  let counter = 0;

  const makeCard = (img = '', name = '', desc = '') => {
    const column = document.createElement('DIV');
    const card = document.createElement('DIV');
    const cardImg = document.createElement('DIV');
    const figure = document.createElement('FIGURE');
    const imgFile = document.createElement('IMG');
    const cardCont = document.createElement('DIV');
    const media = document.createElement('DIV');
    const mediaCont = document.createElement('DIV');
    const title = document.createElement('P');
    const content = document.createElement('DIV');

    column.classList.add('column');
    column.classList.add('is-3');
    card.classList.add('card');
    cardImg.classList.add('card-image');
    figure.classList.add('image');
    figure.classList.add('is-4by3');
    cardCont.classList.add('card-content');
    media.classList.add('media');
    mediaCont.classList.add('media-content');
    title.classList.add('title');
    content.classList.add('content');

    imgFile.setAttribute('src', `imgs/${img}.jfif`);
    imgFile.setAttribute('alt', `${name}`);

    title.innerHTML = `${name}`;
    content.innerHTML = desc;

    columns.appendChild(column);
    column.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardCont);
    cardImg.appendChild(figure);
    figure.appendChild(imgFile);
    media.appendChild(mediaCont);
    mediaCont.appendChild(title);
    mediaCont.appendChild(content);
    cardCont.appendChild(media);

    counter += 1;

    if (counter === 4) {
      columns = document.createElement('DIV');

      columns.classList.add('columns');
      columns.classList.add('is-tablet');

      menu.appendChild(columns);

      counter = 0;
    }
  };

  makeCard('lasagna', 'Lasagne Alla Bolognese', 'A traditional and triumphant lasagna prepared with selected ground beef.');
  makeCard('penne', 'Penne ai Funghi', 'A quite typical dish prepared with mushrooms, it idealy highlights the delicate funghi\'s flavor');
  makeCard('risotto', 'Risotto al Samone', 'Preapred with selected fresh salmon, this risotto is the perfect choice for a light meal accompanied by a good wine.');
  makeCard('scaloppine', 'Scaloppine al Vino Bianco', 'Cutlets of high grade meat carefully prepared with the house white wine and fine herbs.');
  makeCard('tiramisu', 'Tiramisù', '');
  makeCard('sorbetto', 'Sorbetto al Limone', '');
  makeCard('panna-cotta', 'Panna Cotta', '');
  makeCard('torta', 'Torta Caprese', '');
};

// eslint-disable-next-line import/prefer-default-export
export { pageMenu };
