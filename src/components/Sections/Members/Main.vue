<template>
    <section id="members">
        <div class="filter__container">
            <input ref="filterInput" type="text" placeholder="Filter users" @keydown.enter="setFilter" />
            <button @click="setFilter">FILTER</button>
        </div>
        <div class="grid active-with-click">
            <member-card
                v-for="(member, index) in filteredMembers"
                :key="member.id"
                :member-details="member"
                :class="cardColors[index]"
            />
        </div>
    </section>
</template>

<script>
import { users, cardColors } from '../../../modules/dummyData';
import { getFullNameLowercase } from '../../../modules/utils';

import MemberCard from './MemberCard.vue';

export default {
    components: { MemberCard },
    name: 'Team Section',
    data() {
        return {
            teamMembers: users,
            cardColors: cardColors,
            filter: ''
        };
    },
    computed: {
        filteredMembers() {
            if (this.filter !== '') {
                return this.teamMembers.filter((member) => {
                    let fullName = getFullNameLowercase(member.firstname, member.lastname);
                    return fullName.includes(this.filter.toLowerCase());
                });
            }
            return this.teamMembers;
        }
    },
    methods: {
        setFilter() {
            this.filter = this.$refs.filterInput.value;
        }
    }
};
</script>

<style lang="scss" scoped>
section {
    background: #00e0ff;
    opacity: 1;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.filter__container {
    margin-bottom: 50px;

    input,
    button {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        height: 45px;
        opacity: 1;
        outline: none;
    }

    input {
        border-radius: 15px 0px 0px 15px;
        padding-left: 25px;
        width: 150px;
    }

    button {
        border-left: none;
        border-radius: 0px 15px 15px 0px;
        width: 70px;
    }
}
div.grid {
    background: #ffffff;
    box-shadow: 0px 8px 2px #00000029;
    column-gap: 50px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    opacity: 1;
    padding: 20px;
    row-gap: 50px;
    width: 100%;
}

@media screen and (min-width: 768px) {
    div.grid {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 100px;
        padding: 30px;
    }
    .filter__container {
        input {
            width: 250px;
        }

        button {
            width: 100px;
        }
    }
}
@media screen and (min-width: 1200px) {
    div.grid {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 100px;
        padding: 40px;
        width: 1130px;
    }

    .filter__container {
            input,
    button {
        height: 65px;
    }
        input {
            width: 350px;
        }

        button {
            width: 170px;
        }
    }
}
</style>
