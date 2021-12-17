<template>
    <nav>
        <ul class="navlinks__container">
            <li
                v-for="(section, index) in sections"
                :class="{ selected: selected === section.href }"
                :key="index"
                @click="setSelected(section.href)"
            >
                <a v-smooth-scroll :href="section.href"> {{ section.label }} </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavbarLinks',
    props: {
        sections: {
            type: Array,
            required: true,
            description: 'List of objects that contain the information for the sections'
        }
    },
    data() {
        return {
            selected: '#landing'
        };
    },
    methods: {
        setSelected(href) {
            this.selected = href;
        }
    }
};
</script>

<style lang="scss" scoped>
nav {
    height: 100%;
}
.navlinks__container {
    display: flex;
    justify-content: space-evenly;
    height: 100%;

    li {
        align-items: center;
        display: flex;
        padding-right: 10px;
        height: 100%;
        position: relative;

        &.selected::after {
            content: '';
            background: #00d6ff;
            bottom: 0;
            left: 50%;
            height: 5px;
            position: absolute;
            transform: translateX(-50%);
            width: 45px;
            z-index: 9999999999;
        }
        &:last-child {
            padding-right: 0;
        }

        a {
            color: #00c8ff;
            align-items: center;
            display: flex;
            font-family: 'Neue', Arial, Helvetica, sans-serif;
            height: 100%;
            letter-spacing: 0px;
            text-align: left;
            text-decoration: none;
        }
    }
}

@media screen and (max-width: 978px) {
    nav {
        width: 100%;
    }
    .navlinks__container {
        flex-direction: column;
        width: 100%;
        li {
            width: 100%;
            justify-content: center;
            text-align: center;
            height: 45px;

            a {
                width: 100%;
                justify-content: center;
            }

            &.selected::before,
            &.selected::after {
                content: '';
                background: #00d6ff;
                top: 50%;
                height: 45px;
                position: absolute;
                transform: translateY(-50%);
                width: 5px;
                z-index: 9999999999;
            }

            &.selected::before {
                left: -10px;
            }

            &.selected::after {
                left: calc(100% + 5px);
            }
        }
    }
}
</style>
