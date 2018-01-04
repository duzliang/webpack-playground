import _ from 'lodash';
import print from './print.js';
import show from './show.js';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
  ].join('\n\n');

  let button = document.createElement('button');
  button.innerHTML = '点击我';
  button.onclick = print;

  let input = document.createElement('input');
  input.value = show(4);

  element.appendChild(button);
  element.appendChild(input);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}