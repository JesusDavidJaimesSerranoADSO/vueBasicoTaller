export default{
    data(){
        return{
            arrays:null,
            nuevaTarea:``
        }
    },
    methods:{
        crearArray(){
            this.arrays=[]
        },
        crearObjeto(){
            this.arrays.push(this.nuevaTarea)
            this.nuevaTarea=``
        }
    }
}