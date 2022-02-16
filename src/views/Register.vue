<template>
  <main class="w-full h-screen flex items-center justify-center border-2">
    <article class="rounded-xl shadow-md bg-white md:w-auto h-auto mx-1 p-8 divide-y divide-catskill-white">
      <section class="mb-2">
        <h3 class="text-big-stone text-3xl font-montserrat font-bold">Register</h3>
      </section>
      <section class="flex flex-col items-center gap-4 pt-4">
        <span v-if="showErrorsMessage">Fix the following errors</span>
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
        <div class="grid grid-cols-3 gap-2 w-full mt-2">
          <router-link to="/">
            <custom-button
              text="Login"
              type="secondary"
            >
            </custom-button>
          </router-link>
          <custom-button
            text="Create account"
            @click="register"
            type="primary"
            :disabled="isLoading"
          >
          </custom-button>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import CustomButton from '../components/CustomButton.vue'
import AuthService from '../services/AuthService'

export default {
  components: { CustomButton },
  name: 'Login',
  data () {
    return {
      inputs: {
        name: {
          placeholder: 'name',
          type: 'text',
          model: 'name'
        },
        username: {
          placeholder: 'username',
          type: 'text',
          model: 'username'
        },
        email: {
          placeholder: 'email',
          type: 'text',
          model: 'email'
        },
        password: {
          placeholder: 'password',
          type: 'password',
          model: 'password'
        },
        password_confirmation: {
          placeholder: 'confirm password',
          type: 'password',
          model: 'password_confirmation'
        }
      },
      credentials: {
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      showErrorsMessage: false,
      isLoading: false
    }
  },
  methods: {
    async register () {
      this.showErrorsMessage = false
      this.isLoading = true

      await AuthService.register(this.credentials).then((response) => {
        this.$store.dispatch('auth/saveToken', { token: response.token })
        this.$router.push({ name: 'Dashboard' })
      }).catch(error => {
        this.showErrorsMessage = true
        const responseErrors = error.response.data.errors

        Object.keys(this.inputs).forEach(input => {
          this.inputs[input].error = ''
        })

        Object.keys(responseErrors).forEach(element => {
          this.inputs[element].error = responseErrors[element][0]
        })
      })

      this.isLoading = false
    }
  }
}
</script>
