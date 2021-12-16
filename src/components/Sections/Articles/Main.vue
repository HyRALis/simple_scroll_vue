<template>
    <section id="articles">
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
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 90px 0;
    width: 100%;
}
div {
    display: grid;
    column-gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 50px;
}
</style>
