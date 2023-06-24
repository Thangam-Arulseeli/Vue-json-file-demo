<template>
    <h2> Job Descriptions of {{ id }}</h2>
    <h3> Routing Parameter :  {{ this.$route.params.id }}</h3>
    <div v-if='job'>
        <h1> {{ job.dept }} </h1>
        <h3> {{ job.desig }} </h3>
        <h3> {{ job.location }} </h3>
        <!-- <p> The Job ID id {{ id }}</p> -->
    </div>
     <div v-else>
        <p> Job Data Not Found .........</p>
    </div> 

    <div class="container">
        <label> Enter the Regular Customer Name </label>
        <input type="text" name="searchId" v-model="searchId" />
    </div>
    <div>
         <button type="button" @click="printCustomerDetails"> Print Customer Details </button> 
    </div>

</template>

<script>
export default{
    props: ['id'],
    data(){
        return {
            job: null,
            searchId: ''
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job =data)
            .catch(err => console.log(err.message))
    },
    methods: {
        printCustomerDetails(){
         // this.$router.push({ path: '..http://localhost:8080/customer/'+ this.searchId }); // URL string --N/W 
        //this.$router.push({ path: 'customer' })   // Navigate using Path
        //Navigate using name and passing parameter 
       this.$router.push({ name: 'customerdetails', params: { customerName: this.searchId } })
         
         // route by route path
         //this.$router.push('/customer')

        // object
        // this.$router.push({ path: '/customer' })

        // named route navigation with parameters
       // this.$router.push({ name: 'customerdetails', params: { customerName: this.searchId } })

      // with query params, resulting in /profile?info=some-info
      //this.$router.push({ path: 'profile', query: { info: 'some-info' } })
        
         /*When we add Vue router to our Vue application we get access to a 
         special $route object inside the global scope of our application. 
         This object holds all the router information of our application. 
         We can access $route object by simply calling this.$route. 
         The params information is also available within this $route object. 
         We can access the params object inside of the Profile component through the $route object.
          {{ this.$route.params.username }}
         */
        }
    }
}
</script>



<!-- <template>
    <div class="container">
        <label> Enter the Job ID </label>
        <input type="text" name="searchId" v-model="searchId" />
    </div>
    <div>
         <button type="button" @click="printJobDetails">printJobDetails </button> 
    </div>
</template>

<script>
  export default{
    data(){
        return{
            searchId: ''
        }
    },
    methods: {
        printJobDetails(){
           // router.push({ path: 'http://localhost:8080/customer' });
           router.push({ path: '/customer' })
        }
    }
  }
</script> -->