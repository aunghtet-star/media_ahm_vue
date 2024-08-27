<template>
    <div class="d-flex justify-content-center align-items-center" style="min-height: 600px;">
        <div class="text-center">
            <h1 class="text-danger">404 Not Found</h1>
        <button type="button" class="btn bg-dark" @click="home()" >Home</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: "404_page",

        methods: {
            home() {
                this.$router.push({ name: "home" });
            }
        }
    }
</script>