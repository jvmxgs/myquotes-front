<template>
  <main class="w-full h-screen flex items-center justify-center border-2">
    <article class="rounded-xl shadow-md bg-white md:w-auto h-auto mx-1 p-8 divide-y divide-catskill-white">
      <section class="mb-2">
        <h3 class="text-big-stone text-3xl font-montserrat font-bold">Login</h3>
      </section>
      <section class="flex flex-col items-center gap-4 pt-4">
        <div
          class="flex flex-col"
          v-for="(input, key) in inputs"
          :key="key"
        >
          <input
            :placeholder="input.placeholder"
            :type="input.type"
            v-model="credentials[input.model]"
            class="bg-athens-gray outline-0 rounded-xl md:w-72 w-10/12 h-10 text-big-stone font-montserrat font-normal text-lg px-4"
          />
          <span class="text-red-400 text-sm font-montserrat mt-2">{{ input.error }}</span>
        </div>
        <button
          type="button"
          value="click"
          class="bg-azure-radiance px-8 py-25 rounded-full text-white font-montserrat font-medium text-lg md:w-32 w-10/12 h-10"
          @click="login"
          :disabled="isLoading"
        >
          Log In
        </button>
        <router-link to="/register" class="font-montserrat text-sm">Create your account</router-link>
      </section>
    </article>
  </main>
</template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'Login',
  data () {
    return {
      inputs: {
        username: {
          placeholder: 'username',
          type: 'text',
          model: 'username'
        },
        password: {
          placeholder: 'password',
          type: 'password',
          model: 'password'
        }
      },
      credentials: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async login () {
      this.isLoading = true

      await AuthService.login(this.credentials).then((response) => {
        this.$store.dispatch('auth/saveUserData', {
          token: response.token,
          user: response.user
        })
        this.$router.push({ name: 'Dashboard' })
      }).catch((error) => {
        if (error.response?.data?.message) {
          this.$notify({
            group: 'success',
            text: error.response.data.message
          })
        }

        const responseErrors = error.response.data.errors

        Object.keys(this.inputs).forEach(input => {
          this.inputs[input].error = ''
        })

        if (!responseErrors) {
          return
        }

        Object.keys(responseErrors).forEach(element => {
          this.inputs[element].error = responseErrors[element][0]
        })
      })

      this.isLoading = false
    }
  }
}
</script>
