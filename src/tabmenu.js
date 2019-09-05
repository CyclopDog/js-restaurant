import { pageHome } from './home';
import { pageMenu } from './menu';
import { pageAbout } from './about';

// eslint-disable-next-line no-unused-vars
const tabMenuSetup = () => {
  const content = document.querySelector('#content');

  const tabs = document.createElement('DIV');
  const tabList = document.createElement('UL');

  const tabMenu = ['Home', 'Menu', 'About'];

  tabs.classList.add('tabs');
  tabs.classList.add('is-boxed');

  content.appendChild(tabs);
  tabs.appendChild(tabList);

  tabMenu.forEach((tab) => {
    const li = document.createElement('LI');
    const aLink = document.createElement('A');

    li.classList.add(`${tab.toLowerCase()}-link`);

    aLink.innerHTML = tab;

    li.appendChild(aLink);
    tabList.appendChild(li);

    li.addEventListener('click', () => {
      tabList.childNodes.forEach((nod) => {
        nod.classList.remove('is-active');
      });
      li.classList.add('is-active');
    });
  });
  tabList.firstChild.classList.add('is-active');
};

const navigation = () => {
  const canvas = document.querySelector('.canvas');
  const home = document.querySelector('.home-link');
  const menu = document.querySelector('.menu-link');
  const about = document.querySelector('.about-link');

  home.addEventListener('click', () => {
    canvas.childNodes.forEach((nod) => {
      canvas.removeChild(nod);
    });
    pageHome();
  });

  menu.addEventListener('click', () => {
    canvas.childNodes.forEach((nod) => {
      canvas.removeChild(nod);
    });
    pageMenu();
  });

  about.addEventListener('click', () => {
    canvas.childNodes.forEach((nod) => {
      canvas.removeChild(nod);
    });
    pageAbout();
  });
};

// eslint-disable-next-line import/prefer-default-export
export { tabMenuSetup, navigation };
