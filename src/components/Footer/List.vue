<template>
    <div>
        <h4>{{ title }}</h4>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <a :href="item.url">{{ item.label }}</a>
            </li>
        </ul>
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
        }
    }
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    h4 {
        text-align: left;
        color: #000000;
        font-size: 18px;
        font-family: 'Neue', Arial, Helvetica, sans-serif;
        opacity: 1;
    }
    a {
        text-align: left;
        text-decoration: underline;
        font-family: 'Neue', Arial, Helvetica, sans-serif;
        font-size: 14px;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
}
</style>