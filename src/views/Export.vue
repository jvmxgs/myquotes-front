<template>
  <div class="flex justify-center items-center pt-8">
    <article class="md:w-64 h-auto flex flex-col">
      <font-awesome-icon
          icon="fa-solid fa-file-export"
          class="text-4xl font-bold text-periwinkle-gray mb-2"
        />
      <span class="font-roboto font-medium text-md mb-1 text-periwinkle-gray">Export your quotes</span>
      <custom-button
        text="Download"
        type="primary"
        @click="downloadQuotes"
      ></custom-button>
    </article>
  </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue'
import QuoteService from '../services/QuoteService'

export default {
  components: { CustomButton },
  methods: {
    downloadQuotes () {
      const userId = this.$store.getters['auth/user'].id

      QuoteService.downloadQuotes({ user_id: userId }).then((response) => {
        var element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response))
        element.setAttribute('download', 'MyQuotes.txt')

        element.style.display = 'none'
        document.body.appendChild(element)

        element.click()

        document.body.removeChild(element)
      })
    }
  }
}
</script>
