<template>
  <section class="divide-y divide-catskill-white m-4 flex flex-col">
    <h2 class="text-xl font-montserrat font-bold self-start">{{ title }}</h2>
    <div class="pt-4">
      <quote
        v-for="(quote, i) in quotes"
        :key="i"
        :quote="quote"
        :userMode="userMode"
        @removeThisItem="removeItem(i)"
      ></quote>
    </div>
  </section>
</template>

<script>
import Quote from '../components/Quote.vue'

export default {
  components: { Quote },
  props: {
    title: String,
    quotes: Array,
    userMode: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    removeItem (i) {
      this.quotes.splice(i, 1)
    }
  }
}
</script>
