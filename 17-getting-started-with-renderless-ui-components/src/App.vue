<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input</label>
      <renderless-tag-input>
        <div class="tag-input" slot-scope="{}">
          <span class="tag-input-tag">
            <span>sample tag</span>
            <button type="button" class="tag-input-remove"
            >&times;</button>
          </span>
          <input class="tag-input-text" placeholder="Add tag..."
          >
        </div>
      </renderless-tag-input>
    </div>
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"></tag-input>
    </div>
  </div>
</template>

<script>
import TagInput from './components/TagInput.vue'
import RenderlessTagInput from './components/RenderlessTagInput.vue'

export default {
  components: {
    TagInput,
    RenderlessTagInput,
  },
  data() {
    return {
      tags: ['awesome', 'excellent', 'amazing'],
    }
  }
}
</script>

<style src="./assets/css/app.css"/>
