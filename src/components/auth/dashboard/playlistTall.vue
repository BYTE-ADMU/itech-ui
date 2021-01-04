<template>
    <div class='w-3/12 heighter self-center'>
        <div class="flex flex-col justify-between h-full mx-2 rounded-lg">
            <h2 class='text-5xl font-neuemachina'>
                Topic of the Week ✨
            </h2>
            <div class="h-tall bg-gray-800 rounded-lg relative">
                <div class="px-5 text-white py-3 absolute bottom-0 z-30 w-full">
                    <p class="font-objectivity text-2xl">
                        {{ playlistTitle }}
                    </p>
                    <p class="font-objectivity text-md font-thin">
                        {{ itemAmt }} Items
                    </p>
                </div>
                <img :src="playlistImage" class="object-cover rounded-lg tg" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'playlistTall',
    props: {
        playlistImage: {
            type: String,
            default: 'https://picsum.photos/304/400'
        },
        itemAmt: {
            type: String,
            default: '100',
        },
        playlistTitle: {
            type: String,
            default: 'Title',
        }
    }
};
</script>
<style scoped>
.heighter {
    height: 592px;
}
.h-tall {
    height: 400px;
}
</style>