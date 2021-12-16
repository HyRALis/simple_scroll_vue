<template>
    <nav class="navbar">
        <img src="@/assets/images/Valtech-Logo-black@2x.png" alt="Valtech logo" />
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
        <div class="search__container">
            <input type="text" placeholder="Type text here" />
            <button>Search</button>
        </div>
    </nav>
</template>

<script>
import { sections } from '../../../modules/dummyData';
export default {
    name: 'Navigation Bar',
    data() {
        return {
            sections: sections,
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
.navbar {
    align-items: center;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-bottom: 2px solid gray;
    display: flex;
    height: 90px;
    justify-content: space-between;
    padding: 0 5%;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;

    img {
        height: 56px;
        width: 266px;
    }
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

.search__container {
    input {
        height: 39px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #195757;
        border-radius: 15px 0px 0px 15px;
        padding-left: 15px;
        outline: none;
        opacity: 1;
    }

    button {
        background: #00e0ff 0% 0% no-repeat padding-box;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 14px;
        height: 39px;
        padding: 0 13px;
        outline: none;
        opacity: 1;
    }
}
</style>
