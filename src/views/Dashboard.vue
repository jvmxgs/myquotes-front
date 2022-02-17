<template>
  <div class="flex-col md:flex-row flex justify-center md:gap-6 gap-2 pt-4">
    <Menu />
    <article class="rounded-xl shadow-md bg-white md:w-144 w-full mx-1">
      <router-view name="content"/>
    </article>
  </div>
</template>

<script>
import Menu from '../components/Menu'

export default {
  name: 'Dashboard',
  components: {
    Menu
  }
}
</script>
