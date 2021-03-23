/* eslint-disable react/prop-types */
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
import ReactModal from 'react-modal';
import cx from 'classnames';

import Button from '../button';
import Container from '../container';
import { SystemIcon } from '../icon';

import { SIZES } from '../../utils/constants';

import './modal.less';

const modalSizes = ['default', ...SIZES];

const Modal = ({
  actionFn = undefined,
  actionLabel = 'Close',
  actionSize = 'large',
  children,
  className = '',
  disabled = false,
  isOpen = false,
  size = 'default',
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

  return (
    <>
      <ReactModal
        className={classes}
        contentLabel={title}
        isOpen={visible}
        shouldFocusAfterRender
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldReturnFocusAfterClose
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

export default Modal;
