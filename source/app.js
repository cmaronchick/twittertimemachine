var React = require('react');
var ReactDOM = require('react-dom');

// var h1 = React.createElement('h1', { className: 'header' }, 'This is React');
// var p = React.createElement('p', {className: 'content', key: 'content' }, 'And that\'s how it works.');
var listOfItems = <ul className="list-of-items">
                    <li className="item-1">Item 1</li>
                    <li className="item-2">Item 2</li>
                    <li className="item-3">Item 3</li>
                  </ul>;
// var reactFragment = { h1, p };
// var section = React.createElement('section', { className: 'container' }, reactFragment);
ReactDOM.render(listOfItems, document.getElementById('react-application'));