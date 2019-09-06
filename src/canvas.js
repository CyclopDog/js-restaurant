const canvasSetup = () => {
  const content = document.querySelector('#content');
  const canvas = document.createElement('DIV');

  canvas.classList.add('canvas');

  content.appendChild(canvas);
};

// eslint-disable-next-line import/prefer-default-export
export { canvasSetup };
