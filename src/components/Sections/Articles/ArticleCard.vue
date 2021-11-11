<template>
    <article>
        <img :src="require(`@/assets/images/${article.image}`)" alt="Article image" />
        <div class="content">
            <h3 class="title">{{ article.title }}</h3>
            <p>{{ restrictString(300, article.content) }}</p>

            <button class="btn--primary">Read more</button>
        </div>
    </article>
</template>

<script>
import { getBaseUrl } from '../../../modules/utils';
export default {
    name: 'Article Card',
    props: {
        article: {
            type: Object,
            required: true,
            description: 'Object containing the properties of the article'
        }
    },
    methods: {
        getBaseUrl,
        restrictString(maxStringLength, stringToBeTrimmed) {
            return stringToBeTrimmed.length >= maxStringLength
                ? `${stringToBeTrimmed.substring(0, maxStringLength - 3)}...`
                : stringToBeTrimmed;
        }
    }
};
</script>

<style lang="scss" scoped>
article {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 5px #00000029;
    max-width: 540px;
    border-radius: 15px;
    opacity: 1;
    img {
        height: 357px;
        width: 100%;
        object-fit: cover;
    }

    .content {
        height: 250px;
        padding: 35px;
        position: relative;
        p {
            max-width: 100%;
        }
        div {
            display: flex;
            justify-content: flex-end;
        }
    }
    button {
        position: absolute;
        bottom: 35px;
        right: 35px;
    }
}
</style>
