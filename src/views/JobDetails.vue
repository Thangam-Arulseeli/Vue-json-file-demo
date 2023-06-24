<template>
    <h2> Job Details </h2>
    <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id"> 
    <h4>
      <router-link :to="{name: 'JobData', params: {id: job.id}}">  
         <span> {{job.id}}</span>  
      </router-link> 
      <span> {{job.dept}}</span> <span> {{job.desig}} </span>
     </h4>

    </div>
</div>
<div v-else>
    <h3> Loading Jobs..... </h3>
</div>
    
    
</template>

<script>
export default {
    data(){
        return{
            jobs: []
        }
    },
    mounted(){  // Life cycle hook 
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs =data)
            .catch(err => console.log(err.message))
    }
}
</script>