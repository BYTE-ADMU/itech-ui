<template>
    <a href="#" to="">
        <div class='bg-gray-400 feature-height mx-2 rounded-lg relative tg'>
            <div class="px-5 py-3 absolute w-full h-full group rounded-lg z-30">
                <p class='text-white text-xl uppercase
                font-objectivity py-3 w-48 relative hover:opacity-100'>
                    Featured
                </p>
                <p class='text-white text-3xl py-3 font-objectivity
                w-full relative font-medium hover:opacity-100'>
                    {{ articleTitle }}
                </p>
                <p class='text-white text-lg font-objectivity py-1 w-48 relative hover:opacity-100'>
                    Author
                </p>
                <p class="text-white font-objectivity py-3 absolute bottom-0 font-light hover:opacity-100">
                    The description is placed here.
                </p>
            </div>
            <img :src="resource" class="object-cover w-full h-full rounded-lg tg relative" />
        </div>
    </a>
</template>

<script>
export default {
    name: 'featureEntry',
    props: {
        resource: {
            type: String,
            default: 'https://picsum.photos/960/350'
        },
        articleTitle: {
            type: String,
            default: 'Title of the Article',
        }
    },
};
</script>

<style scoped>
.feature-height {
    height: 350px;
}
</style>