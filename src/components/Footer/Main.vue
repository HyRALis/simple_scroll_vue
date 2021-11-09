<template>
    <footer>
        <img src="../../assets/images/Valtech-Logo-black.png" alt="Valtech logo">
        <list v-for="(list, index) in lists" :key="index" :title="titles[index]" :list="list" />
    </footer>
</template>

<script>
import { footerListOne, footerListTwo, footerListThree } from '../../modules/dummyData';

import List from './List.vue';

export default {
    components: { List },
    name: 'Footer',
    data() {
        return {
            lists: [footerListOne, footerListTwo, footerListThree],
            titles: ['Footer Section one', 'Footer Section Two', 'Footer Section Three']
        };
    }
};
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: space-evenly;
    padding: 65px 0;
    img {
        height: 26px;
    }
    ul {
        list-style: none;
    }
}
</style>
