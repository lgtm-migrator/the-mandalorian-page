const app = new Vue({
    el: '#app',
    data: {
        lightTheme: 'colors-light',
    },
    methods: {
        setTheme(){
            const app = this.$refs.app
            app.classList.toggle(this.lightTheme)
        }
    },
})