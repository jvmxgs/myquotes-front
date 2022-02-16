<template>
  <button
    type="button"
    class="px-2 rounded-full font-montserrat font-medium text-lg h-10 col-span-2 flex justify-center items-center"
    :class="buttonType"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <svg v-if="disabled" class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill=""></path>
    </svg>
    {{ text }}
  </button>
</template>

<script>

export default {
  props: {
    text: String,
    type: String,
    disabled: Boolean
  },
  data () {
    return {
      types: {
        primary: 'bg-azure-radiance text-white',
        secondary: 'bg-gainsboro text-azure-radiance'
      }
    }
  },
  computed: {
    buttonType () {
      return this.types[this.type]
    }
  }
}
</script>
