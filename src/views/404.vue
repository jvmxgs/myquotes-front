<template>
  <main class="w-full h-screen flex items-center justify-center border-2">
    <article class="md:w-auto h-auto flex flex-col">
      <font-awesome-icon
          icon="fa-solid fa-heart-broken"
          class="text-4xl font-bold text-periwinkle-gray mb-2"
        />
      <span class="font-roboto font-medium text-xl mb-1 text-periwinkle-gray">404 | Page not found</span>
      <router-link to="/" class="font-roboto text-sm text-periwinkle-gray mb-2">Go home</router-link>
    </article>
  </main>
</template>

<script>

export default {

}
</script>
