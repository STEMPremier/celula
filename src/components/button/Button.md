This is information about our button component.

```jsx
import Button from './Button';

const myAlert = () => {
  alert('I was clicked!');
};

<div>
  <h4>button types and sizes</h4>
  <div>
    <Button handleClick={myAlert} size="small">
      normal small
    </Button>
    <Button handleClick={myAlert} size="large">
      normal large
    </Button>
    <Button handleClick={myAlert} size="jumbo">
      normal jumbo
    </Button>
  </div>

  <div>
    <Button handleClick={myAlert} size="small" type="outline">
      outline small
    </Button>
    <Button handleClick={myAlert} size="large" type="outline">
      outline large
    </Button>
    <Button handleClick={myAlert} size="jumbo" type="outline">
      outline jumbo
    </Button>
  </div>

  <div>
    <Button handleClick={myAlert} size="small" type="text">
      text small
    </Button>
    <Button handleClick={myAlert} size="large" type="text">
      text large
    </Button>
    <Button handleClick={myAlert} size="jumbo" type="text">
      text jumbo
    </Button>
  </div>

  <h4>button states</h4>
  <div>
    <Button handleClick={myAlert} size="small" disabled>
      small disabled
    </Button>
    <Button handleClick={myAlert} size="small" type="outline" disabled>
      small disabled outline
    </Button>
    <Button handleClick={myAlert} size="small" type="text" disabled>
      small disbaled text
    </Button>
  </div>

  <h4>button colors</h4>
  <div>
    <Button color="blue" handleClick={myAlert} size="small">
      blue normal
    </Button>
    <Button color="blue" handleClick={myAlert} size="small" type="outline">
      blue outline
    </Button>
    <Button color="blue" handleClick={myAlert} size="small" type="text">
      blue text
    </Button>
  </div>
  <div>
    <Button color="red" handleClick={myAlert} size="small">
      red normal
    </Button>
    <Button color="red" handleClick={myAlert} size="small" type="outline">
      red outline
    </Button>
    <Button color="red" handleClick={myAlert} size="small" type="text">
      red text
    </Button>
  </div>
  <div>
    <Button color="purple" handleClick={myAlert} size="small">
      purple normal
    </Button>
    <Button color="purple" handleClick={myAlert} size="small" type="outline">
      purple outline
    </Button>
    <Button color="purple" handleClick={myAlert} size="small" type="text">
      purple text
    </Button>
  </div>
  <div>
    <Button color="orange" handleClick={myAlert} size="small">
      orange normal
    </Button>
    <Button color="orange" handleClick={myAlert} size="small" type="outline">
      orange outline
    </Button>
    <Button color="orange" handleClick={myAlert} size="small" type="text">
      ornage text
    </Button>
  </div>
  <div>
    <Button color="green" handleClick={myAlert} size="small">
      green normal
    </Button>
    <Button color="green" handleClick={myAlert} size="small" type="outline">
      green outline
    </Button>
    <Button color="green" handleClick={myAlert} size="small" type="text">
      green text
    </Button>
  </div>
</div>
```
