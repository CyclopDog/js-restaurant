// eslint-disable-next-line no-unused-vars
const pageHome = () => {
  const canvas = document.querySelector('.canvas');

  const home = document.createElement('DIV');
  const hero = document.createElement('DIV');
  const heroBody = document.createElement('DIV');
  const container = document.createElement('DIV');
  const title = document.createElement('H1');
  const subtitle = document.createElement('H2');

  home.classList.add('home');
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

  canvas.appendChild(home);
  home.appendChild(hero);
  hero.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(title);
  container.appendChild(subtitle);
};

// eslint-disable-next-line import/prefer-default-export
export { pageHome };
