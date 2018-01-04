import _ from 'lodash';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  let button = document.createElement('button');
  let br = document.createElement('br');
  button.innerHTML = '点击我';
  button.onclick = e => import(/* webpackChunkName: "print"*/ './print').then(module => {
    var print = module.default;
    print();
  });

  element.appendChild(br);
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    print();
  });
}