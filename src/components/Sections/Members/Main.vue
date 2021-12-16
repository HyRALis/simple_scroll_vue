<template>
    <section id="members">
        <div class="filter__container">
            <input ref="filterInput" type="text" placeholder="Filter users" @keydown.enter="setFilter"/>
            <button @click="setFilter">FILTER</button>
        </div>
        <div class="grid active-with-click">
            <member-card v-for="(member, index) in filteredMembers" :key="member.id" :member-details="member" :class="cardColors[index]" />
        </div>
    </section>
</template>

<script>
import { users, cardColors} from '../../../modules/dummyData';
import { getFullNameLowercase } from '../../../modules/utils';

import MemberCard from './MemberCard.vue';

export default {
    components: { MemberCard },
    name: 'Team Section',
    data() {
        return {
            teamMembers: users,
            cardColors: cardColors,
            filter: '',
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
        setFilter () {
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
        height: 65px;
        opacity: 1;
        outline: none;
    }

    input {
        border-radius: 15px 0px 0px 15px;
        width: 350px;
    }

    button {
        border-left: none;
        border-radius: 0px 15px 15px 0px;
        width: 170px;
    }
}
div.grid {
    background: #ffffff;
    box-shadow: 0px 8px 2px #00000029;
    column-gap: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    opacity: 1;
    padding: 40px;
    row-gap: 50px;
    width: 1130px;
}
</style>
