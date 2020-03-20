<template>
    <div class="navbar">
        <ul class="navbar-left-items">
            <li ><router-link class="navbar-title" to="/runtime">Playlist Runtime</router-link></li>
            <li ><router-link class="navbar-item" to="/runtime">Runtime</router-link></li>
            <li ><router-link class="navbar-item" to="/downloads">Downloads</router-link></li>
        </ul>        
    </div>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color: white;
    }
    .navbar{
        background-color: lightseagreen;
        }
    .navbar-left-items{
        color: white;
        display: flex;
        list-style: none;
        align-items: center;
        padding: 1rem;
    }
    
    .navbar-title{
        margin: 0.5rem;
        padding: 0.5rem;
        font-size: 1.5em;
        } 
    .navbar-item{
        margin: 1rem;
        padding: 1rem;
        }
</style>