const app = new Vue({
    el: '#app',
    data: {
        lightTheme: 'colors-light',
        hrLight: 'hr-light',
        preLight: 'pre-title-light',
        rotateIcon: 'rotate',
    },
    methods: {
        setTheme(){
            this.$refs.icon.classList.toggle(this.rotateIcon)
            this.$refs.app.classList.toggle(this.lightTheme)
            this.$refs.hr.classList.toggle(this.hrLight)
            this.$refs.pre.classList.toggle(this.preLight)
        }
    },
})