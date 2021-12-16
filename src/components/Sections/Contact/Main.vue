<template>
    <section id="contact">
        <div class="form--container">
            <text-input
                id="first__name"
                name="first__name"
                type="text"
                label="First name"
                emitMessage="change:first_name"
                @change:first_name="setFormPropertyValue('firstName', $event)"
            />
            <text-input
                id="last__name"
                name="last__name"
                type="text"
                label="Last name"
                emitMessage="change:last_name"
                @change:last_name="setFormPropertyValue('lastName', $event)"
            />
            <text-input
                id="email__address"
                name="email__adress"
                type="email"
                label="Email address"
                emitMessage="change:email_address"
                @change:email_address="setFormPropertyValue('email', $event)"
            />
            <text-input
                id="prone__number"
                name="prone__number"
                type="text"
                label="Phone number"
                emitMessage="change:phone_number"
                @change:phone_number="setFormPropertyValue('phone', $event)"
            />
            <text-area
                id="message"
                name="message"
                label="Message"
                emitMessage="change:message"
                @change:message="setFormPropertyValue('message', $event)"
            />
            <div class="button__container">
                <button class="btn--primary lg">SEND</button>
            </div>
        </div>
    </section>
</template>

<script>
import TextArea from './TextArea.vue';
import TextInput from './TextInput.vue';

export default {
    name: 'Contact section',
    components: { TextInput, TextArea },
    data() {
        return {
            contactForm: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                message: ''
            },
            contactEmail: 'petar.trajanoski.pt@gmail.com'
        };
    },
    methods: {
        setFormPropertyValue(property, value) {
            this.contactForm[property] = value;
        }
    }
};
</script>

<style lang="scss" scoped>
section {
    background: transparent url('../../../assets/images/Intersection-1.png') 0% 0% no-repeat padding-box;
    background-size: cover;
    opacity: 1;
    padding: 250px 0;
    .form--container {
        background: #ffffffd2;
        border-radius: 15px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 50px;
        row-gap: 20px;
        margin: auto;
        max-width: 800px;
        padding: 20px 30px;
    }
    .button__container {
        display: flex;
        justify-content: flex-end;

        button {
            position: initial;
            width: 200px;
            height: 50px;
            padding: none;
        }
    }

    @media screen and (min-width: 768px) {
        .form--container {
            max-width: 620px;
        }
    }

    @media screen and (min-width: 1200px) {
        .form--container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 100px;
            padding: 40px 50px;
        }
        .button__container {
            position: relative;

            button {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
}
</style>
