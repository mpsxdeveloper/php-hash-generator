const { createApp, ref } = Vue
    
const app = {
    setup() {
        const password = ref('')
        const hash = ref()
        const loading = ref(false)        
        return {
            password, hash, loading
        }
    },
    methods: {
        async gerarHash() {
            if(this.password.length > 0) {                
                this.loading = true
                this.hash = ""
                const formData = new FormData()
                formData.append("password", this.password)
                try {
                    await fetch('./password.php', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                        }
                    })
                    .then((res) => res.json())
                    .then(json => {                
                        this.hash = json
                        this.loading = false
                    })
                }
                catch(error) {
                    console.log(error)
                }
            }
        }
    }
}

createApp(app).mount("#app")