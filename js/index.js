const app = new Vue({
    el: '#app',
    data: {
        lightTheme: 'colors-light',
        rotateIcon: 'rotate',
        imageDark: 'character-image-dark'
    },
    methods: {
        setTheme(){
            this.$refs.app.classList.toggle(this.lightTheme)
            this.$refs.icon.classList.toggle(this.rotateIcon)
            this.$refs.image.classList.toggle(this.imageDark)
        }
    },
})