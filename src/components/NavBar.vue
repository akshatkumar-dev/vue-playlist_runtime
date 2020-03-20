<template>
    <div class="navbar">
        <ul class="navbar-left-items">
            <li class="navbar-title"><h2>Playlist Runtime</h2></li>
            <li class="navbar-item">Runtime</li>
            <li class="navbar-item">Downloads</li>
        </ul>        
    </div>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>
    .navbar{
        background-color: lightseagreen;
        }
    .navbar-left-items{
        color: white;
        display: flex;
        list-style: none;
        align-items: center;
    }
    .navbar-item,.navbar-title{
        margin: 0.5rem;
        padding: 0.5rem;
        }
</style>