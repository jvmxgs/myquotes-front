<template>
  <nav class="rounded-xl shadow-md bg-white md:w-64 wf-full mx-1 md:h-auto h-12 md:py-8 md:px-4 grid md:content-start content-center">
    <ul class="flex md:flex-col flex-row justify-around">
      <menu-item
        :icon="item.icon"
        :text="item.text"
        :to="item.path"
        v-for="(item, key) in items"
        :key="key"
        :selected="key == selected"
      />
    </ul>
  </nav>
</template>

<script>
import MenuItem from '../components/MenuItem'

export default {
  components: {
    MenuItem
  },
  props: {

  },
  data () {
    return {
      items: {
        home: {
          text: 'Home',
          icon: 'fa-solid fa-house',
          path: '/'
        },
        quotes: {
          text: 'My quotes',
          icon: 'fa-regular fa-comment-dots',
          path: '/myquotes'
        },
        user: {
          text: 'Account',
          icon: 'fa-regular fa-user',
          path: '/account'
        },
        login: {
          text: 'Logout',
          icon: 'fa-regular fa-user',
          path: '/logout'
        }
      },
      selected: 'user'
    }
  }
}
</script>
