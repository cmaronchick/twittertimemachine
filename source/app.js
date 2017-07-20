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
var ReactClass = React.createClass({
    getInitialState: function () {
        return {
            isHeaderHidden: false,
            title: 'Stateful React Component'
        };
    },

    handleClick: function () {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },

    render: function () {
        var headerElement = React.createElement('h1', { className: 'header', key: 'header'}, this.state.title);
        var buttonElement = React.createElement('button', { className: 'btn btn-defatul', onClick: this.handleClick, key: 'button' }, 'Toggle header');

        if (this.state.isHeaderHidden) {
            return React.createElement('div', null, { buttonElement });
        }
        return React.createElement('div', null, { buttonElement, headerElement });
    }
});

ReactDOM.render({ listOfItems, ReactClass }, document.getElementById('react-application'));



