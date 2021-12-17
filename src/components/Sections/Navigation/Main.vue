<template>
    <header class="navbar" v-click-outside="closeDropdown">
        <img src="@/assets/images/Valtech-Logo-black@2x.png" alt="Valtech logo" />
        <navbar-links v-if="windowWidth > 978" :sections="sections" />
        <div v-if="windowWidth > 978" class="search__container">
            <input type="text" placeholder="Type text here" />
            <button>Search</button>
        </div>
        <button v-if="windowWidth <= 978" class="button__toggle--links" @click="toggleShowList">
            <i class="fas fa-bars"></i>
        </button>
        <keep-alive>
            <div v-if="windowWidth <= 978 && showList" class="navbar--dropdown" :class="{ show: showList }">
                <div class="search__container">
                    <input type="text" placeholder="Type text here" />
                    <button>Search</button>
                </div>
                <navbar-links :sections="sections" />
            </div>
        </keep-alive>
    </header>
</template>

<script>
import { sections } from '../../../modules/dummyData';
import NavbarLinks from './NavbarLinks.vue';

export default {
    components: { NavbarLinks },
    name: 'Navigation Bar',
    data() {
        return {
            sections: sections,
            selected: '#landing',
            windowWidth: 1200,
            showList: false
        };
    },
    created() {
        this.windowWidth = document.body.clientWidth;

        let onresize = () => {
            this.windowWidth = document.body.clientWidth;
        };
        window.addEventListener('resize', onresize);
    },
    methods: {
        toggleShowList() {
            this.showList = !this.showList;
        },
        closeDropdown() {
            this.showList = false;
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

    .button__toggle--links {
        border: none;
        padding: 0;
        background: transparent;
        color: #000000;
        font-size: 42px;
        cursor: pointer;
    }

    &--dropdown {
        display: none;
        flex-direction: column;
        border: 1px solid gray;
        &.show {
            display: flex;
        }
    }
}

.search__container {
    width: max-content;
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

@media screen and (max-width: 978px) {
    .navbar {
        &--dropdown {
            flex-direction: column;
            position: absolute;
            bottom: -242px;
            right: 0;
            width: 360px;
            background: #ffffffd2;
            padding: 10px;
            align-items: center;
        }
    }
}
</style>
