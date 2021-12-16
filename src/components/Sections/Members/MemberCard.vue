<template>
    <article :class="cardClass">
        <h2>
            <span>{{ fullName }}</span>
            <strong>
                <i class="fa fa-fw fa-star"></i>
                {{ memberDetails.occupation }}
            </strong>
        </h2>
        <div class="mc-content">
            <div class="img-container">
                <img class="img-responsive" :src="memberDetails.img" />
            </div>
            <div class="mc-description">
                {{ memberDetails.description }}
            </div>
        </div>
        <a class="mc-btn-action" @click="toggleContent">
            <i :class="iconClass"></i>
        </a>
        <div class="mc-footer">
            <h4>Skills</h4>
            <a v-for="(skill, index) in memberDetails.skills" :key="index">
                <i :class="generateSkillIconClass(skill)"></i>
            </a>
        </div>
    </article>
</template>

<script>
export default {
    name: 'MemberCard',
    props: {
        memberDetails: {
            type: Object,
            required: true,
            description: 'Object containing the details of the member'
        }
    },
    data() {
        return {
            state: 'idle',
            stateTypes: {
                idle: 'idle',
                loading: 'loading',
                active: 'active'
            },
            isActive: false
        };
    },
    computed: {
        fullName() {
            return `${this.memberDetails.firstname} ${this.memberDetails.lastname}`;
        },
        iconClass() {
            switch (this.state) {
                case this.stateTypes.idle:
                    return 'fa fa-bars';
                case this.stateTypes.loading:
                    return 'fa fa-bars fa-spin-fast';
                case this.stateTypes.active:
                    return 'fa fa-arrow-left';

                default:
                    return 'fa fa-bars';
            }
        },
        cardClass() {
            switch (this.state) {
                case this.stateTypes.idle:
                case this.stateTypes.loading:
                    return 'material-card';
                case this.stateTypes.active:
                    return 'material-card mc-active';

                default:
                    return 'material-card';
            }
        }
    },
    methods: {
        toggleContent() {
            if (this.isActive) {
                this.state = this.stateTypes.loading;

                window.setTimeout(() => {
                    this.state = this.stateTypes.idle;
                    this.isActive = false;
                }, 800);
            } else {
                this.state = this.stateTypes.loading;

                window.setTimeout(() => {
                    this.state = this.stateTypes.active;
                    this.isActive = true;
                }, 800);
            }
        },
        generateSkillIconClass(skill) {
            switch (skill) {
                case 'js':
                    return 'fab fa-js';
                case 'php':
                    return 'fab fa-php';
                case 'python':
                    return 'fab fa-python';

                default:
                    return '';
            }
        }
    }
};
</script>

<style>
@import url('../../../assets/css/card.css');
@import url('../../../assets/css/card-autoheight.css');
</style>
