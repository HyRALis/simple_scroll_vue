<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'Footer list',
        props: {
            title: {
                type: String,
                required: true,
                description: 'Property for the Title above the list'
            },
            list: {
                type: Array,
                required: true,
                description: 'Prperty that sends the list of elements with all its properties'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>