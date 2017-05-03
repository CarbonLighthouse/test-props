const createReactClass = require('create-react-class');

module.exports = {
  /**
   * Returns a function which when called will generate
   * an object to be used as props for a react element.
   *
   * e.g.
   *
   * const defaultProps = {foo: 'bar'}
   * const createMyProps = propsFactory(defaultProps)
   *
   * const props = createMyProps({beep: 'boop'})
   * // {foo: 'bar', beep: 'boop'}
   *
   * @param defaultProps
   * @returns {function}
   */
  propsFactory: defaultProps => customProps => {
    return Object.assign({}, defaultProps, customProps);
  },

  /**
   * Returns a function which when called produces a React element
   * of the given type with default prop values.
   *
   * e.g.
   *
   * const Greeting = (props) => <div>{props.greeting} {props.toWhat}</div>
   *
   * const defaultProps = {greeting: 'Hello', toWhat: 'Buddy'}
   * const createElement = elementFactory(React, Greeting, defaultProps)
   *
   * const [el, props] = createElement({greeting: 'Salam'});
   * // el: <div>Salam Buddy</div>
   * // props: {greeting: 'Salam', toWhat: 'Buddy'}
   *
   * @param {object} React
   * @param {function} Component
   * @param {object} defaultProps
   * @returns {function}
   */
  elementFactory: (React, Component, defaultProps) => customProps => {
    const props = Object.assign({}, defaultProps, customProps);
    return [React.createElement(Component, props), props];
  }
};
