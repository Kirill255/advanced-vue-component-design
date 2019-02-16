<template>
  <div class="search-select" :class="{ 'is-active': isOpen }">
    <button @click="open" type="button" class="search-select-input">
      <span v-if="value !== null">{{ value }}</span>
      <span v-else class="search-select-placeholder">Select a band...</span>
    </button>
    <div v-show="isOpen" class="search-select-dropdown">
      <input class="search-select-search">
      <ul class="search-select-options">
        <li class="search-select-option"
          v-for="option in options"
          :key="option"
          @click="select(option)"
        >{{ option }}</li>
      </ul>
      <!-- <div class="search-select-empty">No results found</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      value: null,
      options: [
        "Anthrax",
        "Dark Angel",
        "Death Angel",
        "Destruction",
        "Exodus",
        "Flotsam and Jetsam",
        "Kreator",
        "Megadeth",
        "Metallica",
        "Overkill",
        "Sepultura",
        "Slayer",
        "Testament"
      ]
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    select(option) {
      this.value = option
      this.close()
    }
  }
}
</script>
