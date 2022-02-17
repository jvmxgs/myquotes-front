<template>
  <article>
    <quote-list
      title="My Quotes"
      :quotes="quotes"
      v-if="quotes.length"
      :userMode="true"
    ></quote-list>
    <div class="mt-8 flex flex-col" v-if="! quotes.length">
      <span class="text-periwinkle-gray text-lg font-bold font-montserrat">You dont have any quotes in your collection</span>
      <router-link to="/" class="font-montserrat">Explore Quotes</router-link>
    </div>
  </article>
</template>

<script>
import QuoteList from '../components/QuoteList.vue'
import QuoteService from '../services/QuoteService'

export default {
  components: { QuoteList },
  data () {
    return {
      quotes: [],
      params: {
        page: 1
      }
    }
  },
  async beforeMount () {
    await this.getInitialQuotes()
  },
  async mounted () {
    this.getNextQuotes()
  },
  methods: {
    async getInitialQuotes () {
      await this.getQuotes()
    },
    getNextQuotes () {
      window.onscroll = async () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          await this.getQuotes()
        }
      }
    },
    async getQuotes () {
      await QuoteService.userQuotes(this.params).then((data) => {
        if (data.length === 0) {
          return
        }

        this.quotes.push(...data)
        this.params.page++
      })
    }
  }
}
</script>
