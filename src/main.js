import { createApp } from 'vue';
import VueSmoothScroll from 'vue3-smooth-scroll';

import App from './App.vue';

const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
            // here I check that click was outside the el and his children
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted: (el) => {
        document.removeEventListener('click', el.clickOutsideEvent);
    }
};

const app = createApp(App);

app.use(VueSmoothScroll, {
    duration: 400,
    offset: -90,
    updateHistory: false
});

app.directive('click-outside', clickOutside);

app.mount('#app');
