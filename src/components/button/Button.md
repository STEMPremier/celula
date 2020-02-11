This is information about our button component.

```jsx
import Button from './Button';

const myAlert = () => {
  alert('I was clicked!');
};

<div>
  <div>
    <Button type="text" handleClick={myAlert} disabled>
      text button inactive
    </Button>
    <Button color="blue" size="small" type="text" handleClick={myAlert}>
      text button blue
    </Button>
    <Button color="red" type="text" handleClick={myAlert}>
      text button red
    </Button>
    <Button color="blue" size="large" type="text" handleClick={myAlert}>
      text button large
    </Button>
  </div>

  <div>
    <Button size="small" outline handleClick={myAlert} disabled>
      <span>outline inactive </span>
    </Button>
    <Button size="small" outline handleClick={myAlert}>
      <span>outline small</span>
    </Button>
    <Button size="large" outline handleClick={myAlert}>
      <span>outline large</span>
    </Button>
    <Button size="jumbo" outline handleClick={myAlert}>
      <span>outline jumbo</span>
    </Button>
  </div>

  <div>
    <Button size="small" type="solid" handleClick={myAlert} disabled>
      <span>solid inactive</span>
    </Button>
    <Button size="small" type="solid" handleClick={myAlert}>
      <span>solid small</span>
    </Button>
    <Button size="large" type="solid" handleClick={myAlert}>
      <span>solid large</span>
    </Button>
    <Button size="jumbo" type="solid" handleClick={myAlert}>
      <span>solid jumbo</span>
    </Button>
  </div>
</div>;
```

> This text comes from a markdown file in the `/src/components/button` dir.
