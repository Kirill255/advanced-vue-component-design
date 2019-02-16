<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <date-picker class="form-input" v-model="date" format="D MMM YYYY" :options="{ firstDay: 1 }"></date-picker>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "./components/DatePicker.vue"

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      date: "2018-04-12"
    }
  }
}
</script>

<style src="./assets/css/app.css"/>