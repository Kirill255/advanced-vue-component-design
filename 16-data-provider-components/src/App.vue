<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">

      <fetch-json url="/contacts.json" class="mb-8">
        <contact-list
          slot-scope="{ response: contacts }"
          :contacts="contacts"
        ></contact-list>
      </fetch-json>

      <fetch-json url="/albums.json">
        <div class="card" slot-scope="{ response: albums, loading }">
          <h1 class="text-2xl font-bold mb-6">Top Death Metal Albums</h1>
          <div v-if="loading" class="text-grey-darker">
            Loading...
          </div>
          <div v-else>
            <div class="album-grid">
              <div class="album-grid-item" v-for="album in albums">
                <img :src="album.artwork" class="" alt="">
                <h2 class="album-title">{{ album.title }}</h2>
                <p class="album-artist">{{ album.artist }}</p>
              </div>
            </div>
          </div>
        </div>
      </fetch-json>

    </div>
  </div>
</template>

<script>
import ContactList from "./components/ContactList.vue"
import FetchJson from "./components/FetchJson.vue"

export default {
  components: {
    ContactList,
    FetchJson
  },
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/app.css"/>
