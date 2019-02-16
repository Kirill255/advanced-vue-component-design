<template>
  <div class="min-h-screen bg-grey-lighter p-8">

    <div class="text-center p-8 my-8">
      <primary-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        Download
      </primary-button>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img slot="image" src="https://images.unsplash.com/photo-1495835788122-ca48931258be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc48b0187b28f7a221362b843f15755&auto=format&fit=crop&w=3450&q=80" alt="">
        <template slot="heading">
          The Long Road to Mastering the Perfect Cartwheel
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <template slot="heading">
          Crossing the Street for Dummies
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
        <img slot="image" src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60" alt="">
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos accusantium minima architecto natus sequi quisquam incidunt dolorem, adipisci accusamus facere dicta magni, qui consectetur, omnis quis, voluptas tempore quo!</p>
        <img slot="image" src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60" alt="">
      </media-card>
    </div>
  </div>
</template>

<script>
import PrimaryButton from './components/PrimaryButton.vue'
import MediaCard from './components/MediaCard.vue'

export default {
  components: {
    PrimaryButton,
    MediaCard,
  },
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/app.css"/>