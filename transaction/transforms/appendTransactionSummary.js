module.exports = {
  bindings: {
  },
  async transform({ batch }) {
    if (batch.length === 0) return;

    batch.forEach((o) => {
      o.transactions = Math.random();
    });
  },
};
