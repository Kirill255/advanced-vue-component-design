<template>
  <div id="app" class="font-sans text-black min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto bg-white rounded shadow-lg p-8">
      <div class="mb-4">
        <label class="form-label mb-2">Favorite Thrash Band</label>
        <search-select></search-select>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-blue">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelect from './components/SearchSelect.vue'

export default {
  components: {
    SearchSelect
  },
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/app.css"/>
