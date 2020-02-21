This is information about our radio component.

```jsx
import RadioGroup from './RadioGroup';
import Radio from './Radio';

const myChangeHandler = event => {
  console.log(event.target);
};

<div>
  <RadioGroup
    label="Label Goes Here"
    name="radioGroupName"
    handleChange={myChangeHandler}
    form="formName"
  >
    <Radio
      label="Option 1 unselected"
      className="radioContainer"
      value="option1"
      id="option1"
    />
    <Radio
      label="Option 2 unselected disabled"
      value="option2"
      id="option2"
      className="radioContainer"
      disabled
    />
    <Radio
      label="Option 3 selected disabled"
      value="option3"
      id="option3"
      className="radioContainer; ce-radio--disabled"
      checked
      disabled
    />
    <Radio
      label="Option 4 checked"
      value="option4"
      className="radioContainer"
      id="option4"
      checked
    />
  </RadioGroup>
  <Radio
    label="Outside of RadioGroup"
    value="option4"
    className="radioContainer"
    id="option4"
    checked
  />
</div>;
```
