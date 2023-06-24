<template>
    <h2> Regular Customer : {{ customerName }}</h2>
<div> <h2> 
    Customer Details Using Template </h2>
    <ul>
        <li v-for="customer of customers" :key="customer.id"> {{customer.name}}</li>
    </ul>
</div>
Enter new Customer : <input type="text" v-model="cname" @keyup.enter="addCustomer()" />
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/customers"
export default{
    name: "customer",
    props: ['customerName'],
    data(){
        return{
            customers: [],
            cname: ''
        } 
        },

        async created(){
            try{
                const res= await axios.get(baseURL);
                this.customers = res.data;
            }
            catch(e){
                console.error(e);
            }
        },
        methods: {
            async addCustomer()
            {
                const res=await axios.post(baseURL, {name:this.cname});
                this.customers =[...this.customers, res.data];
                this.cname=''; 
            }
        }
    }

</script>