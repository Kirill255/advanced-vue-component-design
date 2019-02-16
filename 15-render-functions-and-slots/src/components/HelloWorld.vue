<script>
export default {
  render(createElement) {
    return this.$scopedSlots.default({
      subject: "world"
    })
  }
}
</script>
