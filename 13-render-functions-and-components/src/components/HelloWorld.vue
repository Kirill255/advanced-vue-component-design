<script>
import PrimaryButton from "./PrimaryButton.vue"
import ToggleInput from "./ToggleInput.vue"

export default {
  props: [],
  data() {
    return {
      toggled: true
    }
  },
  render(createElement) {
    return createElement(ToggleInput, {
      props: {
        value: this.toggled
      },
      on: {
        input: newValue => (this.toggled = newValue)
      }
    })
  }
}
</script>
