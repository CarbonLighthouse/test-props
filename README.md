# test-props

> Testing utility for creating flexible react props

### Why?

Because I have duplicated the same `createProps` function over and over again in every React component
test I've written for 2 years.

**testProps.propsFactory**

defaultProps -> customProps -> Object

Make props and

```js
import {propsFactory} from 'test-props';

const createMyProps = propsFactory({foo: 'bar', beep: 'boop'})

// Make default props all you want
createMyProps()
// {foo: 'bar', beep: 'boop'}

// Customize them when you need to.
createMyProps({foo: 'baz'});
// {foo: 'baz', beep: 'boop'}
```

**testProps.elementFactory**

(React, Component, defaultProps) -> customProps -> ReactElement

```js
import $ from 'teaspoon';
import assert from 'assert';
import React from 'react';
import {elementFactory} from 'test-props';

const Greeting = (props) => <div>{props.greeting} {props.toWhat}</div>

// You get to reuse this in all your tests until you want to customize
// the props you pass to the element.
const createGreeting = elementFactory(React, Greeting, {greeting: 'Hello', toWhat: 'Buddy'});

describe('Greeting', () => {
  it('should display greeting', () => {
    const el = createGreeting({greeting: 'Salam'});

    const actual = $(el)
        .shallowRender()
        .text();
    const expected = 'Salam Buddy'

    assert.equal(actual, expected);
  });
});
```
