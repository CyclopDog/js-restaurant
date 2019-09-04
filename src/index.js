/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */

// eslint-disable-next-line no-unused-vars
const docSetup = (() => {
  const content = document.querySelector('#content');

  const tabs = document.createElement('DIV');
  const tabList = document.createElement('UL');

  tabs.classList.add('tabs');
  tabs.classList.add('is-boxed');

  content.appendChild(tabs);
  tabs.appendChild(tabList);

  return { tabList, content };
})();

// eslint-disable-next-line no-unused-vars
const tabMenuSetup = (() => {
  const canvas = document.createElement('DIV');

  const tabMenu = ['Home', 'Menu', 'About'];

  canvas.classList.add('canvas');

  docSetup.content.appendChild(canvas);

  tabMenu.forEach((tab) => {
    const li = document.createElement('LI');
    const aLink = document.createElement('A');
    const tabElement = document.createElement('DIV');

    tabElement.classList.add('hidden');
    tabElement.classList.add(tab.toLowerCase().replace(/\s/g, '-'));

    aLink.innerHTML = tab;

    li.appendChild(aLink);
    canvas.appendChild(tabElement);
    docSetup.tabList.appendChild(li);

    li.addEventListener('click', () => {
      canvas.childNodes.forEach((nod) => {
        nod.classList.add('hidden');
      });
      docSetup.tabList.childNodes.forEach((nod) => {
        nod.classList.remove('is-active');
      });
      tabElement.classList.remove('hidden');
      li.classList.add('is-active');
    });
  });
  docSetup.tabList.firstChild.classList.add('is-active');
  canvas.firstChild.classList.remove('hidden');
})();

// eslint-disable-next-line no-unused-vars
const pageHome = (() => {
  const home = document.querySelector('.home');
  const hero = document.createElement('DIV');
  const heroBody = document.createElement('DIV');
  const container = document.createElement('DIV');
  const title = document.createElement('H1');
  const subtitle = document.createElement('H2');

  hero.classList.add('hero');
  hero.classList.add('is-fullheight');
  hero.classList.add('hero-img');
  heroBody.classList.add('hero-body');
  container.classList.add('container');
  container.classList.add('has-text-centered');
  title.classList.add('title');
  title.classList.add('is-white');
  subtitle.classList.add('subtitle');
  subtitle.classList.add('is-white');

  title.innerHTML = 'La Mafia di JavaScript';
  subtitle.innerHTML = 'A most excellent tradicional italian cuisine!';

  home.appendChild(hero);
  hero.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(title);
  container.appendChild(subtitle);
})();

// eslint-disable-next-line no-unused-vars
const pageMenu = (() => {
  const menu = document.querySelector('.menu');
  let columns = document.createElement('DIV');
  columns.classList.add('columns');
  columns.classList.add('is-tablet');
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
})();

// eslint-disable-next-line no-unused-vars
const pageAbout = (() => {
  const about = document.querySelector('.about');

  const ancestor = document.createElement('DIV');

  ancestor.classList.add('tile');
  ancestor.classList.add('is-ancestor');

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
})();
