<template>
    <h2> Job Details </h2>
    <div v-for="job in jobs" :key="job.id">
    <h4> <span> {{job.id}}</span> <span> {{job.dept}}</span> <span> {{job.desig}} </span> </h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs =data)
            .catch(err => console.log(err.message))
    }
}
</script>