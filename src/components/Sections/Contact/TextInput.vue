<template>
    <div class="input--group">
        <label v-if="label" :for="id">{{ label }}</label>
        <input v-bind="$attrs" v-model="inputValue" @change="onChangeHandler" />
    </div>
</template>

<script>
export default {
    name: 'Input group',
    data() {
        return {
            inputValue: ''
        };
    },
    props: {
        emitMessage: {
            type: String,
            required: true,
            description: 'The name of the event that is going to be emitted'
        },
        label: {
            type: String,
            description: 'Label for the input group'
        }
    },
    methods: {
        onChangeHandler() {
            this.$emit(this.emitMessage, this.inputValue);
        }
    }
};
</script>

<style lang="scss" scoped>
.input--group {
    label {
        color: #000000;
        margin-left: 5px;
        font: normal normal 300 18px/22px Helvetica Neue;
        opacity: 1;
        text-align: left;
    }
    input {
        background: #ffffffd1;
        border: none;
        border-radius: 15px;
        height: 40px;
        margin-top: 10px;
        opacity: 1;
        padding: 10px;
        width: 100%;
    }
}
</style>
