/* __placeholder__ */
export default (await import("vue")).defineComponent({
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    plus() {
      if (this.counter === 10) {
        return;
      }
      this.counter += 1;
    },
    minus() {
      if (this.counter === 0) {
        return;
      }
      this.counter -= 1;
    },
  },
});
