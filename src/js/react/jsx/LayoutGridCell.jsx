var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
    render: function() {
        return(
			<div className="mdc-layout-grid__cell">{this.props.children}</div>
        );
    }
});