<template>
  <router-link :to="to" v-slot="{ isExactActive, href, navigate }">
    <li class="inline md:flex">
      <a :href="href" @click="navigate" class="">
        <font-awesome-icon
          :icon="icon"
          class="md:text-md text-lg w-10 font-bold"
          :class="isExactActive ? 'text-hit-pink' : 'text-casper'"
        />
        <span
          class="hidden md:inline ml-2 font-montserrat font-medium text-md"
          :class="isExactActive ? 'text-big-stone font-medium' : 'text-casper'"
        >
          {{ text }}
        </span>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    to: String,
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
