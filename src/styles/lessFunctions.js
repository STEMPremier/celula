COLOR.prototype = {
  lighten(ratio) {
    const { hsl } = this.values;
    hsl[2] += hsl[2] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },

  darken(ratio) {
    const { hsl } = this.values;
    hsl[2] -= hsl[2] * ratio;
    this.setValues('hsl', hsl);
    return this;
  },
};
