<template>
  <div class="home">
    <!-- <fet />
    <filters />
    <modal /> -->
    <todo />
  </div>
</template>

<script>
// import fet from '../components/fetch.vue'
// import modal from '../components/modal.vue'
// import filters from '../components/filters.vue'
import todo from '../components/todolist.vue'

export default {
  name: 'Home',
  components: {
    // fet,
    // modal,
    // filters,
    todo
  }
}
</script>
