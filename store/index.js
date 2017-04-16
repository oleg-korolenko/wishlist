export const state = {
  wishlist: []
}
export const mutations = {
  init (state, wishlist) {
    state.wishlist = wishlist
  },
  add (state, wishlistItem) {
    state.wishlist = [...state.wishlist, wishlistItem]
  },
  remove (state, wishlistItem) {
    state.wishlist = state.wishlist.filter(item => item.id !== wishlistItem.id)
  },
  toggle (state, wishlistItem) {
    state.wishlist = state.wishlist
      .map(item => item.id === wishlistItem.id ? wishlistItem : item)
  }
}

import axios from 'axios'

export const actions = {
  async add ({commit}, wishlistItem) {
    const res = await axios.post('http://localhost:3010/wishlist', {name: wishlistItem, done: false})
    commit('add', res.data)
  },

  async remove ({commit}, wishlistItem) {
    await axios.delete(`http://localhost:3010/wishlist/${wishlistItem.id}`)
    commit('remove', wishlistItem)
  },
  async toggle ({commit}, wishlistItem) {
    const res = await axios.patch(`http://localhost:3010/wishlist/${wishlistItem.id}`, {
      done: !wishlistItem.done
    })
    commit('toggle', res.data)
  }
}
