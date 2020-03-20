<template>
    <div class="runtime-container">
        <input type="text" placeholder="URL" v-model="url"/>
        <button @click="getdetails">Submit</button>
        <p class="error-text" v-if="showError">An error occured please check url</p>
        <p v-if="details.title.length!==0">{{details.title}}</p>
        <p v-if="details.duration.length!==0">{{details.duration}}</p>
        <p v-if="details.totalCount!==0">{{details.totalCount}}</p>
        <p v-if="details.by.length!==0">{{details.by}}</p>
        <img v-if="details.img.length!==0" :src="details.img" alt="thumbnail preview"/>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data:function(){
        return {
            url: "",
            showError: false,
            details:{
                title: "",
                duration:"",
                totalCount:0,
                img:"",
                by:""
            }
        }
    },
    methods:{
        getdetails:async function(){
            //by: "BB Ki Vines"
            //img: "https://i.ytimg.com/vi/_ey_1I1aJ5w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAYGdWBfE4oBVeCJa_FHPJAMQiFXA"
            //time: "01:21:15"
            //title: "Angry Masterji Series"
            //totalResults: 14
            let response = await axios.get(`http://localhost:4000/api/getruntime?url=${this.url}`);
            this.showError = false;
            if(response.data === "error"){
                this.showError = true;
            }
            else{
                this.details.title = response.data.title;
                this.details.duration = response.data.time;
                this.details.img = response.data.img;
                this.details.by = response.data.by;
                this.details.totalCount = response.data.totalResults;
                console.log(response.data);
            }
            
        }
    }
}
</script>
<style scoped>
    .error-text{
        color: red;
    }
</style>