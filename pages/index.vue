<template>
  <div>
    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Wishlist</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="wishlist_item of wishlist" class="ph3 pv3 bb b--light-silver">{{wishlist_item.name}}</li>
      </ul>
    </article>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    async fetch ({store}) {
      const res = await axios.get('http://localhost:3010/wishlist')
      store.commit('init', res.data)
    },
    computed: {
      ...mapState({
        wishlist: state => state.wishlist
      })
    },
    methods: {
      ...mapMutations([])
    }
  }
</script>
