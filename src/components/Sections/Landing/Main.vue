<template>
    <section class="header-main">
        <div class="header-content">
            <button class="header-cta" @click="clickHandler">CONTACT</button>
            <p class="descrition">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Header section',
    methods: {
        clickHandler() {
            this.$emit('scroll-to', { sectionNo: 4 });
        }
    }
};
</script>

<style lang="scss" scoped>
.header-main {
    background-image: url('../../../assets/images/Intersection 2.png');
    align-content: center;
    display: flex;
    flex-direction: column;
    height: 800px;
    justify-content: center;
    width: 100%;
}
.header-content {
    background: #ffffff 0% 0% no-repeat padding-box;
    height: 250px;
    opacity: 0.82;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header-cta {
    background: #221f1f 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 0px #00000033;
    border-radius: 30px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    height: 60px;
    opacity: 1;
    width: 280px;
}

p.descrition {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
}
</style>
