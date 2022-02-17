<template>
  <article class="flex flex-col items-end mb-2 p-4 rounded-lg bg-athens-gray gap-2">
    <custom-button
      :icon="userMode ? 'fa-regular fa-trash-can' : 'fa-regular fa-bookmark'"
      type="custom"
      size="small"
      :class="textColor"
      @click="userMode ? toogleToCollectionWithConfirmation() : toogleToCollection()"
      :disabled="isLoading"
      :title="quote.added ? 'In your collection' : 'Add to your collection'"
    ></custom-button>
    <p class="text-justify md:text-md font-medium text-casper font-montserrat text-md">
      {{ quote.quote }}
    </p>
    <span class="md:text-md text-md font-medium font-montserrat text-big-stone">{{ quote.author }}</span>
  </article>
</template>

<script>
import CustomButton from '../components/CustomButton.vue'
import QuoteService from '../services/QuoteService'

export default {
  components: { CustomButton },
  props: {
    quote: Object,
    userMode: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    textColor () {
      if (this.userMode) {
        return 'text-red-500'
      }

      if (this.quote.added) {
        return 'text-azure-radiance'
      }

      return 'text-periwinkle-gray'
    }
  },
  methods: {
    toogleToCollectionWithConfirmation () {
      this.$confirm(
        {
          message: 'Are you sure you want delete this quote of your collection?',
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: async confirm => {
            if (confirm) {
              await this.toogleToCollection()
            }
          }
        }
      )
    },
    async toogleToCollection () {
      this.isLoading = true

      const userId = this.$store.getters['auth/user'].id

      const data = {
        user_id: userId,
        quote_id: this.quote.id
      }

      if (this.quote.added) {
        await QuoteService.removeQuoteToUser(data).then((data) => {
          this.quote.added = false
          this.$emit('removeThisItem')
          this.$notify({
            group: 'success',
            text: 'Quote removed of your collection!'
          })
        })

        this.isLoading = false
        return
      }

      await QuoteService.addQuoteToUser(data).then((data) => {
        this.quote.added = true
        this.$notify({
          group: 'success',
          text: 'Quote added to your collection!'
        })
      })

      this.isLoading = false
    }
  }
}
</script>
