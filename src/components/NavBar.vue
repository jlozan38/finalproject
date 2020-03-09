<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight"
        >HungryGhost<span class="font-light"> Records</span></span
      >
    </router-link>
    <div class="form flex">
      <input
        :value="searchItem"
        class="appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="newText"
        type="text"
        placeholder="Search for an Artist, Album or Genre"
        @click="setSearchItem"
      />
      <router-link class="link bg-red-800 hover:bg-red-600 rounded text-white font-bold py-2 px-4" to="/SearchPage" tag="button" >
        Search
      </router-link>
    </div>
    <div class="right text-white">
      <router-link class="link" to="/SignIn">Sign In</router-link>
      <router-link class="link" to="/Cart">Cart</router-link>
    </div>
  </nav>
</template> 

<script>
export default {
  name: "NavBar",
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem
    }
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch("setSearchItem", event.target.value)
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  @apply h-24 fixed px-12 flex justify-between items-center;
}
.link {
  @apply px-2 font-semibold;
  &:hover {
    @apply text-yellow-500;
  }
}
</style>