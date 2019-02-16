<template>
  <portal to="modals" v-if="show">
    <div class="modal-backdrop" v-show="show">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    dismiss() {
      this.$emit("close")
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden")
        } else {
          document.body.style.removeProperty("overflow")
        }
      }
    }
  },
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.dismiss()
      }
    }
    document.addEventListener("keydown", escapeHandler)
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler)
    })
  }
}
</script>
