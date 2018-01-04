import { cube } from './math.js';

import printMe from './print.js';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5),
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}