<template>
    <a @click="emitOauthLogin('bitbucket')" class="btn btn-block btn-social btn-bitbucket">
      <span class="fa fa-bitbucket"></span> Sign in with Bitbucket
    </a> 
</template>

<script>

  export default {

    data () {
      return {
        context: '',
        data: {

        }
      }
    },

    beforeCreate () {

    },

    created () {

    },

    beforeMount () {

    },

    mounted () {

    },

    beforeUpdate () {

    },

    updated () {

    },

    beforeDestroy () {

    },

    destroyed () {

    },

    methods: {
      emitOauthLogin (provider) {
        this.$root.$options.EventBus.$emit('OAUTH_LOGIN', provider)
      },

      oauthLogin (provider) {
        this.$store.dispatch('auth/oauthLogin', provider).catch(function (error) {
          console.log(error)
        })
      }
    }

  }

</script>

<style @scoped>

.btn-bitbucket {
    color: #fff;
    background-color: #205081;
    border-color: rgba(0,0,0,0.2);
}

.btn-bitbucket:hover {
    color: #fff;
    background-color: #163758;
    border-color: rgba(0,0,0,0.2);
}

</style>
