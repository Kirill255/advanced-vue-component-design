<script>
export default {
  model: {
    prop: "tags",
    event: "update"
  },
  props: ["tags"],
  render() {
    return this.$scopedSlots.default({
      tags: this.tags
    })
  }
}
</script>
