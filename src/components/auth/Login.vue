<template>
    <div class="text-center login-wrapper">
        <div class="form-signin">
            <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <label class="sr-only">Email address</label>
            <input type="email" \class="form-control" placeholder="Email address" v-model="email" required autofocus>
            <label class="sr-only">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        login() {
            const formData = {
                email: this.email,
                password: this.password
            }
            
            this.$store.dispatch('login', formData)
        }
    },
    // created() {
    //     this.$store.dispatch('initToken')
        
    //     if(this.$store.state.idToken) {
    //         this.$router.push('/admin')
    //     }
    // }
}
</script>

<style scoped>
    .login-wrapper {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
        height: 100vh;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    
    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>