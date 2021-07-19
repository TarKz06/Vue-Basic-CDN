new Vue({
    el:"#vue-app",
    data:{
        name: "Khematat Suphamittanont",
        job: "Student",
        age: 20,
        status: false,
        website:'https://www.youtube.com/'
    },
    methods:{
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name = n
        },
        addAge:function(){
            this.age++;
            console.logl(this.age)
        },
        subtractAge:function(){
            this.age--;
            console.logl(this.age)
        }
    }
})