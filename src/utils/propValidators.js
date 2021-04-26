import { SECONDARY_ICONS } from './constants';

// We need to check and see if a prop contains a value of undefined, (vs being undefined itself), or a function.
export function functionOrUndef(props, propName, componentName) {
  let error;

  if (
    typeof props[propName] !== 'undefined' &&
    typeof props[propName] !== 'function'
  ) {
    error = new Error(
      `Invalid prop "${propName}" supplied to ${componentName} Validation failed.`,
    );
  }

  return error;
}

// For use primarily in `SecondaryIcons`; this validator checks for the presence of either a name or a text prop.
// And currently enforces a 2 character max on the text
export function nameOrText(props, propName, componentName) {
  const types = ['name', 'text'];
  const otherProp = types.filter(e => e !== propName)[0]; // filter returns an array, I just need the element.

  let error;

  // First make sure we have at least one of them.
  if (!props[propName] && !props[otherProp]) {
    error = new Error(
      `"${propName}" and "${otherProp}" supplied to ${componentName} are blank. You must provide one or the other.`,
    );
  }

  // If we have a name, we need to make sure it is in the list.
  if (props.name && !SECONDARY_ICONS.includes(props.name)) {
    error = new Error(
      `Invalid prop: "name" supplied to ${componentName}. Prop must be one of ${SECONDARY_ICONS.join(
        ', ',
      )}.`,
    );
  }

  // If we have text, it can't be longer than 2 characters.
  if (props.text && props.text.length > 2) {
    error = new Error(
      `Invalid prop: "text" supplied to ${componentName}. Prop cannot be longer than 2 characters.`,
    );
  }

  // And lastly, you can have one OR the other, not both.
  if (props[propName] && props[otherProp]) {
    error = new Error(
      `"${propName}" and "${otherProp}" supplied to ${componentName} both have values. You must provide one or the other, but not both`,
    );
  }

  return error;
}
