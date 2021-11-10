<template>
    <section>
        <div>
            <article-card v-for="(article, index) in articles" :key="index" :article="article" />
        </div>
    </section>
</template>

<script>
import { articles } from '../../../modules/dummyData';
import ArticleCard from './ArticleCard.vue';
export default {
    components: { ArticleCard },
    name: 'Arcticles section',
    data() {
        return {
            articles
        };
    }
};
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    padding: 90px;
}
div {
    width: 1360px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: px;
    grid-row-gap: 50px;
}
</style>
