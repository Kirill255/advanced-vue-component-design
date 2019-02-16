<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <contact-list :pseudo-slot="({ contact }) => contact.name.first">
        <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
          {{ contact.name.first }}
        </a>
      </contact-list>
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue'

export default {
  components: {
    ContactList,
  },
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/app.css"/>
