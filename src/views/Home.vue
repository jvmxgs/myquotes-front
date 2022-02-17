<template>
  <article>
    <quote-list
      title="Daily Quotes"
      :quotes="quotes"
    ></quote-list>
    <quote-list
      title="Explore"
      :quotes="otherQuotes"
    ></quote-list>
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
      otherQuotes: [],
      params: {
        page: 1
      }
    }
  },
  async beforeMount () {
    await QuoteService.dailyQuotes().then((data) => {
      this.quotes = data
    })
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
      await QuoteService.quotes(this.params).then((data) => {
        console.log(data.length, this.params.page)
        if (data.length === 0) {
          return
        }

        this.otherQuotes.push(...data)
        this.params.page++
      })
    }
  }
}
</script>
