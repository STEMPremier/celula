/* Copyright 2020 Tallo Inc.,
 *
 * This file is part of Celula.
 *
 * Celula is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/*
 * The Modal is a little different. Instead of just _exporting_ the Modal,
 * we (react-modal) have to know what DOM element is the root of your app, for accessibilitys
 * sake. Since Celula is made to be used by a consuming app, we don't know
 * the app root. So we export a function that returns the Modal component
 * aware of the consuming app's root element.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';

import Button from '../button';
import Container from '../container';
import { SystemIcon } from '../icon';

import { SIZES } from '../../utils/constants';

import './modal.less';

const modalSizes = ['default', ...SIZES];

// A custom prop validator for the Modal.
// We need to check and see if a prop contains a value of undefined, (vs being undefined itself), or a function.
function functionOrUndef(props, propName, componentName = 'Modal') {
  let error;

  if (
    typeof props[propName] !== 'undefined' &&
    typeof props[propName] !== 'function'
  ) {
    error = new Error(
      `Invalid prop ${propName} supplied to ${componentName} Validation failed.`,
    );
  }

  return error;
}

// The modal itself.
/**
 * Standard modals can contain a heading, description text, inputs, various content blocks and a button. Modals are
 * fixed position to the parent page and horizontally centered. These modals also have an option to scroll within
 * the modal.
 */
const Modal = ({
  actionFn = undefined,
  actionLabel = 'Close',
  actionSize = 'large',
  children,
  className = '',
  disabled = false,
  isOpen = false,
  parentEl = '',
  size = 'default',
  style,
  title,
  triggerColor = 'primary',
  triggerLabel,
  triggerSize = 'large',
  triggerType = 'solid',
}) => {
  const [visible, setVisibility] = useState(isOpen);
  const classes = cx(
    'ce-modal',
    {
      [`ce-modal--${size}`]: modalSizes.includes(size.toString().toLowerCase()),
    },
    className,
  );

  useEffect(() => {
    setVisibility(isOpen);
  }, [isOpen]);

  const showModal = () => setVisibility(true);
  const hideModal = () => setVisibility(false);
  const modalAction = () => {
    const action = actionFn || hideModal;

    action();
    hideModal();
  };

  const findParent = parentEl
    ? () => document.getElementById(parentEl)
    : () => document.body;

  return (
    <>
      <ReactModal
        className={classes}
        contentLabel={title}
        isOpen={visible}
        parentSelector={findParent}
        shouldFocusAfterRender
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
        style={{ content: style }}
      >
        <button
          className="ce-modal__close"
          onClick={hideModal}
          type="button"
          aria-label="Close"
        >
          <SystemIcon
            color="black"
            name="close"
            size="jumbo"
            title="Close Modal"
          />
        </button>
        <Container className="ce-modal__container" gap="padding">
          <h4 className="ce-modal__header">{title}</h4>
          <div className="ce-modal__body">{children}</div>
          <div className="ce-modal__footer">
            <Button handleClick={modalAction} size={actionSize}>
              {actionLabel}
            </Button>
            <Button
              className="ce-modal__cancel"
              color="secondary"
              handleClick={hideModal}
              size={actionSize}
              type="text"
            >
              Cancel
            </Button>
          </div>
        </Container>
      </ReactModal>
      <Button
        color={triggerColor}
        disabled={disabled}
        handleClick={showModal}
        size={triggerSize}
        type={triggerType}
      >
        {triggerLabel}
      </Button>
    </>
  );
};

Modal.propTypes = {
  /**
   * The action (function) the action button in the footer of the `<Modal />` triggers.
   */
  actionFn: functionOrUndef,
  /**
   * The label for the action button in the footer of the `<Modal />`.
   */
  actionLabel: PropTypes.string,
  /**
   * The size of the `<Modal />` action button. Same options as `<Button />`.
   */
  actionSize: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * The `<Modal />` body. This can be a string, a component, or anything else React can render.
   */
  children: PropTypes.node.isRequired,
  /**
   * A class name, or string of class names, to add to the `<Modal />`.
   */
  className: PropTypes.string,
  /**
   * Disables the `<Modal />`.
   */
  disabled: PropTypes.bool,
  /**
   * Allows you to close the `<Modal />` from out side the `<Modal />`.
   */
  isOpen: PropTypes.bool,
  /**
   * The id of the element that the `<Modal />` will be rendered to. If no id is given, the modal will be rendered to the body.
   *
   * You might use this if you need to add custom styles to the container the modal renders to.
   */
  parentEl: PropTypes.string,
  /**
   * The size of the `<Modal />`.
   */
  // size: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(['default', 'small', 'large', 'jumbo']),
  /**
   * Any inline styles you would like to add to the `<Modal />`. See the React [docs](https://reactjs.org/docs/faq-styling.html) for more.
   */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * The title of the `<Modal />`.
   */
  title: PropTypes.string.isRequired,
  /**
   *  The `<Modal />` trigger button color.
   */
  triggerColor: PropTypes.string,
  /**
   * The `<Modal />` trigger button label.
   */
  triggerLabel: PropTypes.string.isRequired,
  /**
   * The size of the `<Modal />` trigger. Same options as `<Button />`.
   */
  triggerSize: PropTypes.oneOf(['small', 'large', 'jumbo']),
  /**
   * The type of trigger `<Button />` the `<Modal />` will have.
   */
  triggerType: PropTypes.oneOf(['solid', 'outline', 'text']),
};

Modal.defaultProps = {
  actionFn: undefined,
  actionLabel: 'Close',
  actionSize: 'large',
  className: '',
  disabled: false,
  isOpen: false,
  parentEl: '',
  size: 'default',
  style: {},
  triggerColor: 'primary',
  triggerSize: 'large',
  triggerType: 'solid',
};

// The function that does the magic.
export default (root = '#app-root') => {
  // Tell `react-modal` where it can Portal into.
  ReactModal.setAppElement(root);

  // Then just return the component. You can then just use it; like any other compnent.
  return Modal;
};

// this export does not make it to the outside world. It is so we can expose the component directly to Storybook.
export { Modal as ModalDocs };
