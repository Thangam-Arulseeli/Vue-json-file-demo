<template>
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
</script>