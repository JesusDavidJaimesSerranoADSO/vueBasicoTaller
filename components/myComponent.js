export default{
    data(){
        return{
            lista:false,
            arrays:null,
            nuevaTarea:``
        }
    },
    methods:{
        crearArray(){
            this.arrays=[],
            this.lista=true
        },
        crearObjeto2(){
            this.arrays.push(this.nuevaTarea)
            this.nuevaTarea=``
        },
        crearObjeto1(){
            this.arrays.unshift(this.nuevaTarea)
            this.nuevaTarea=``
        },
        elArray(){
            this.arrays=null
        },
        elObjeto(del){
            this.arrays.splice(del,1)
        }
    }
}