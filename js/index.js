const app = new Vue({
    el: '#app',
    data: {
        lightTheme: 'colors-light',
        rotateIcon: 'rotate'
    },
    methods: {
        setTheme(){
            this.$refs.app.classList.toggle(this.lightTheme)
            this.$refs.icon.classList.toggle(this.rotateIcon)
            this.$refs.image.classList.toggle('character-image-dark')
        }
    },
})