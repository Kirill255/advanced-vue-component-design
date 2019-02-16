<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal">
      <h1 class="text-center text-2xl font-bold mb-4">
        Exciting new features are here!
      </h1>
      <p class="text-center text-grey-darker mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
      </p>
      <div class="text-center">
        <button @click="dismiss" type="button" class="btn btn-blue">
          Dismiss
        </button>
      </div>
    </div>
  </div>
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
    const listener = document.addEventListener("keydown", e => {
      if (this.show && e.keyCode === 27) {
        this.dismiss()
      }
    })

    this.$once("hook:beforeDestroy", () => {
      console.log("removing listener")
      document.removeEventListener("keydown", listener)
    })
  }
}
</script>
