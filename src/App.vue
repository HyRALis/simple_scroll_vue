<template>
    <navbar />
    <main>
        <landing />
        <members />
        <articles />
        <contact />
    </main>
    <footer-component />
</template>

<script>
import Navbar from './components/Sections/Navigation/Main.vue';
import Landing from './components/Sections/Landing/Main.vue';
import Members from './components/Sections/Members/Main.vue';
import Articles from './components/Sections/Articles/Main.vue';
import Contact from './components/Sections/Contact/Main.vue';
import FooterComponent from './components/Footer/Main.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Landing,
        FooterComponent,
        Members,
        Articles,
        Contact
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

@font-face {
    font-family: 'Neue';
    src: local('Neue'), url(./assets/fonts/Helvetica_Neue_Medium_It.ttf) format('truetype');
}

/*
	Standard CSS Reset
	This is used to account for differences in browsers.
	Without a reset stylesheet there could be differences
	between browsers when loading your html website.
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
    padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
}

/* Set core body defaults */
body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
    list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

body {
    font-family: 'Neue', Arial, Helvetica, sans-serif;
}

.btn--primary {
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    opacity: 1;
    padding: 12px 40px;
    text-align: center;
    &.lg {
        padding: 15px 75px;
    }
}
</style>
