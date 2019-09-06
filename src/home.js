const pageHome = () => {
  const canvas = document.querySelector('.canvas');

  const home = document.createElement('DIV');
  const heroBody = document.createElement('DIV');
  const container = document.createElement('DIV');
  const title = document.createElement('H1');
  const subtitle = document.createElement('H2');

  home.classList.add('home', 'hero', 'is-fullheight', 'hero-img');
  heroBody.classList.add('hero-body');
  container.classList.add('container', 'has-text-centered');
  title.classList.add('title', 'is-white');
  subtitle.classList.add('subtitle', 'is-white');

  title.innerHTML = 'La Mafia di JavaScript';
  subtitle.innerHTML = 'A most excellent tradicional italian cuisine!';

  canvas.appendChild(home);
  home.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(title);
  container.appendChild(subtitle);
};

// eslint-disable-next-line import/prefer-default-export
export { pageHome };
