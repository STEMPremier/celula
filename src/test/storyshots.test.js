import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  test: () => {
    const $el = document.createElement('div');
    $el.setAttribute('id', 'modal-root');

    document.body.appendChild($el);
  },
});
