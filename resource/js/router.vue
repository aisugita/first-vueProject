
import VueRouter from "vue-router"
import Vue from "vue"
let router = new VueRouter({
    routes:[
    {
        path:'/top',
        component:{
            template:'<div>top</div>'
        }
    },
    {
        path:'/users',
        component:{
            template:'<div>usersList</div'
        }
    }
    ],
})
let app = new Vue({
    router:router
}).$mount('#app')