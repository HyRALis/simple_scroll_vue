<template>
    <landing />
    <articles />
    <contact />
    <footer-component />
</template>

<script>
// import Nav from './components/Sections/Navigation/Main.vue';
import Landing from './components/Sections/Landing/Main.vue';
// import Members from './components/Sections/Members/Main.vue';
import Articles from './components/Sections/Articles/Main.vue';
import Contact from './components/Sections/Contact/Main.vue';
import FooterComponent from './components/Footer/Main.vue';

export default {
    name: 'App',
    components: {
        Landing,
        FooterComponent,
        // Nav,
        // Members,
        Articles,
        Contact
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

.btn--primary {
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: #ffffff;
    opacity: 1;
    padding: 12px 40px;
    text-align: center;
    &.lg {
        padding: 15px 75px;
    }
}
</style>
