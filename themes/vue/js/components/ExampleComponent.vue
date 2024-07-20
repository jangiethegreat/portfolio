<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <div class="card-body">
                        I'm an example component.................
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
.card {
    background-color: #f8f9fa; /* Background color of the card */
    border: 1px solid #dee2e6; /* Border color of the card */
}

.card-header {
    background-color: #007bff; /* Background color of the card header */
    color: #fff; /* Text color of the card header */
}

.card-body {
    color: #333; /* Text color of the card body */
}
</style>
