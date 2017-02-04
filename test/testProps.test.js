const assert = require('assert');
const React = require('react');
const testProps = require('../lib/testProps');

describe('lib/testProps', () => {
  describe('propsFactory', () => {
    it('should make props with default values', () => {
      const actual = testProps.propsFactory({foo: 'bar', beep: 'boop'})();
      const expected = {foo: 'bar', beep: 'boop'};
      assert.deepEqual(actual, expected, 'makes default props');
    });

    it('should allow customization of props', () => {
      const defaultProps = {foo: 'bar', beep: 'boop'};
      const customProps = {beep: 'boing', bingo: 'bango'};

      const actual = testProps.propsFactory(defaultProps)(customProps);
      const expected = {foo: 'bar', beep: 'boing', bingo: 'bango'};

      assert.deepEqual(actual, expected, 'custom props can override defaults');
    });
  });

  describe('elementFactory', () => {
    it('should create component with customizable prop values', () => {
      const Greeting = React.createClass({
        render() {
          return React.createElement('div', null, `${this.props.greeting} ${this.props.toWhat}`);
        }
      });

      const defaultProps = {greeting: 'Hello', toWhat: 'Friend'};
      const customProps = {greeting: 'Salam'};

      const actual = testProps.elementFactory(React, Greeting, defaultProps)(customProps);
      const expected = React.createElement(Greeting, {greeting: 'Salam', toWhat: 'Friend'});

      assert.deepEqual(actual, expected, 'builds component element');
    });
  });
});
