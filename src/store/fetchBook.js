import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            home: null,
            title: "",
            description: "",
            image_url: "",
            condition: "",
            category: "",
        }
    },
    actions: {
        async fetchData() {
            let data = await fetch("https://effective-mobile.duckdns.org/api/ads/")
            let json = await data.json()
            this.home = json
        },
        async postData() {
            try {
                let fetchPost = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        category: this.category,
                        condition: this.condition,
                        title: this.title,
                        description: this.description,
                        image_url: this.image_url,
                    })
                })
                let post = await fetchPost.json();
            }catch(err) {
                console.log(err)
            }
        }
    }
})