<template>
    <div class="flex flex-col w-3/12 px-2">
        <div :class="botStyle">
            <h2 class="text-feature text-white font-neuemachina px-4 leading-tight select-none">
                {{ botWord }}
            </h2>
            <img :src="botImage" class="bitBot" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'bitbotFeature',
    props: {
        bb3: {
            type: String,
            default: 'hacker'
        }
    },
    data() {
        return {
        }
    },
    computed: {
        botWord() {
            const type = this.bb3;
            switch(type) {
                case 'hacker':
                    return 'hack er'
                case 'hipster':
                    return 'hips ter'
                case 'hustler':
                    return 'hust ler'
                default: 
                    return 'hack er'
            }
        },
        botStyle() {
            const type = this.bb3;
            const defaultStyle = 'w-full h-48 heighter rounded-xl relative';
            switch(type) {
                case 'hacker':
                    return `hackerStyle ${defaultStyle}`
                case 'hipster':
                    return `hipsterStyle ${defaultStyle}`
                case 'hustler':
                    return `hustlerStyle ${defaultStyle}`
                default: 
                    return `hackerStyle ${defaultStyle}`
            }
        },
        botImage() {
            const type = this.bb3;
            const hacker = require('../../../assets/img/bitbots/bbhacker.svg');
            const hipster = require('../../../assets/img/bitbots/bbhipster.svg');
            const hustler = require('../../../assets/img/bitbots/bbhustler.svg');
            switch(type) {
                case 'hacker':
                    return hacker
                case 'hipster':
                    return hipster
                case 'hustler':
                    return hustler
                default:
                    return hacker
            }
        }
    }
}
</script>
<style>
.bitBot {
    height: 140px;
    position: absolute;
    left: 40px;
}
.heighter {
    height: 350px;
}
.hackerStyle {
    background: linear-gradient(283.99deg, #4E6AFA 7.28%, #9298FF 100%);
}
.hipsterStyle {
    background: linear-gradient(283.99deg, #FF7B92 7.28%, #E13894 100%);
    border-radius: 10px
}
.hustlerStyle {
    background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);
    border-radius: 10px;
}
.text-feature {
    font-size: 90px;
}
</style>