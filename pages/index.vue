<template>
  <div>
    <form @submit.prevent="add(wishlistItem)">
      <input v-model='wishlistItem' type="text">
      <input type="submit" value="Add">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Wishlist</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li v-for="wishlistItem of wishlist" class=" flex items-center ph3 pv3 bb b--light-silver">
          <span v-bind:class="{strike: wishlistItem.done}" class="flex-auto">{{wishlistItem.id}}. {{wishlistItem.name}}</span>
          <button @click="toggle(wishlistItem)"><img src="https://icon.now.sh/check"/></button>
          <button @click="remove(wishlistItem)"><img src="https://icon.now.sh/trash"/></button>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import axios from 'axios'
  export default {
    async fetch ({store, redirect}) {
      try {
        const res = await axios.get('http://localhost:3010/wishlist')
        store.commit('init', res.data)
      } catch (err) {
        redirect('/error')
      }
    },
    data () {
      return {
        wishlistItem: 'new item'
      }
    },
    computed: {
      ...mapState({
        wishlist: state => state.wishlist
      })
    },
    methods: {
      ...mapActions([
        'add', 'remove', 'toggle'
      ])
    }
  }
</script>
