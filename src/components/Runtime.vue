<template>
    <div class="runtime-container">
        <h1 class="title">Playlist Runtime</h1>
        <p>Youtube does not provide the total runtime of a playlist, therefore this app does it for you.</p>

        <div class="card">
        <input type="url" placeholder="https://www.youtube.com/playlist?list=PLBCF2DAC6FFB574DE" v-model="url"/> <br/>
        <p class="click-p" @click="getdetails">Get Details</p>
        <!-- <p v-if="details.title.length!==0">{{details.title}}</p>
        <p v-if="details.duration.length!==0">{{details.duration}}</p>
        <p v-if="details.totalCount!==0">{{details.totalCount}}</p>
        <p v-if="details.by.length!==0">{{details.by}}</p>
        <img v-if="details.img.length!==0" :src="details.img" alt="thumbnail preview"/> -->
        <div class="details">
        <img src="https://i.ytimg.com/vi/_ey_1I1aJ5w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAYGdWBfE4oBVeCJa_FHPJAMQiFXA" alt="sample" height="150px">
        <div class="details-text">
        <p class="details-element"><strong>Playlist Title:</strong> Angry Masterji Series jfakldf jakdlfja jkfaldjf ladfkjla d jkaldf jkaljdf klad jlka dsj</p>
        <p class="details-element"><strong>Owner:</strong> BB Ki Vines</p>
        <p class="details-element"><strong>Total Videos:</strong> 14</p>
        <p class="details-element"><strong>Total Runtime:</strong> 01:21:15</p>
        </div>
        </div>
        <p class="error-text" >An error occured please check url or try again later</p>
        <!-- <p class="error-text" v-if="showError">An error occured please check url or try again later</p> -->
        </div>
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
            if(this.url.length === 0){
                this.showError = true;
                return;
            }
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
#howto-click{
    color:lightseagreen;
}
#howto-click:hover{
    cursor: pointer;
}
.title{
    color: lightseagreen;
    margin-bottom: 1rem;
}
    .runtime-container{
        width:90%;
        margin: 2% auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 2rem;
    }
    .error-text{
        color: red;
        margin: 0.5rem;
        padding:0.5rem;
    }
    input{
        padding: 0.5em;
        font-size: 1.2rem;
        margin:1rem;
        width: 70%;
        border: none;
        background-color: #f1f1f1;
        }
    .click-p{
        padding:0.5rem;
        color: white;
        background-color: lightseagreen;
        width: 15%;
        text-align: center;
        }
    .click-p:hover{
        background-color: #26d9d0;
        cursor: pointer;
        box-shadow: 1px 1px 5px grey;
        }
    .card{
        width: 80%;
        box-shadow: 10px 10px 40px #e6e6e6;
        padding: 0.5rem;
        margin:1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .details{
        border:1px solid #e6e6e6;
        display: flex;
        padding:1rem;
        margin:1rem;
        align-items: center;
        }
    .details-element{
        
        margin:0.5rem;
        margin-left: 1rem;
        padding:0.5rem;
    }
    .card:hover{
        box-shadow: 20px 20px 40px #e6e6e6;
    }
    .details-text{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
    /* img{
        max-width: 100%;
    } */

    @media screen and (max-width: 900px){
        .card{
            width: 100%;
            }
        .details{
            width: 100%;
        }
    }
    @media screen and (max-width: 750px){
        .click-p{
            width: 50%;
        }
        input{
            width: 90%;
        }
    }
    @media screen and (max-width: 650px){
        .details{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 400px){
        img{
            max-width: 100%;
        }
    }
</style>