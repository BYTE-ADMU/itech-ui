<template>
    <Layout>
    <!-- ROOT -->
    <div class="flex flex-col container mx-auto min-h-screen w-screen py-20">
        <div class="flex w-full justify-between items-start">
            <!-- Featured & New On ITECH -->
            <div class="flex flex-col w-9/12">
                <featureEntry />
                <h3 class="text-xl mt-4 font-objectivity mx-2 font-bold uppercase">
                    New On ITECH
                </h3>
                <div class="flex mt-1 justify-between">
                    <articleEntry />
                    <articleEntry />
                    <articleEntry />
                </div>
            </div>
            <!-- Topic of the Week -->
            <playlistTall />
        </div>
        <!-- Featured Courses & Playlists-->
        <div class="flex w-full mt-4">
            <div class="w-3/12">
                <h2 class="text-4xl font-neuemachina p-2 mx-auto">
                    Featured Courses & Playlists ✨
                </h2>
            </div>
            <playlistEntry />
            <playlistEntry />
            <playlistEntry />
        </div>
        <!-- Hacker -->
        <div class="flex w-full mt-4 items-center">
            <bitbotFeature bb3="hacker" />
            <div class="flex flex-col w-9/12">
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Articles
                </h5>
                <div class="flex justify-between">
                    <articleEntry />
                    <articleEntry />
                    <articleEntry />
                </div>
            </div>
        </div>
        <!-- Hipster -->
        <div class="flex w-full mt-4 items-center">
            <bitbotFeature bb3="hipster" />
            <div class="flex flex-col w-9/12">
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Articles
                </h5>
                <div class="flex justify-between">
                    <articleEntry />
                    <articleEntry />
                    <articleEntry />
                </div>
            </div>
        </div>
        <!-- Hustler -->
        <div class="flex w-full mt-4 items-center">
            <bitbotFeature bb3="hustler" />
            <div class="flex flex-col w-9/12">
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="text-md uppercase font-objectivity font-bold mx-2 mb-1">
                    Articles
                </h5>
                <div class="flex justify-between">
                    <articleEntry />
                    <articleEntry />
                    <articleEntry />
                </div>
            </div>
        </div>
        <!-- END COMPONENTS -->
    </div>
    </Layout>
</template>
<script>
import articleEntry from '../components/auth/dashboard/articleEntry';
import featureEntry from '../components/auth/dashboard/featureEntry';
import playlistEntry from '../components/auth/dashboard/playlistEntry';
import playlistTall from '../components/auth/dashboard/playlistTall';
import bitbotFeature from '../components/auth/dashboard/bitbotFeature';
import articleHeader from '../components/auth/dashboard/articleHeader';

export default {
    name: 'Catalogue',
    components: {
        articleEntry,
        featureEntry,
        playlistEntry,
        playlistTall,
        bitbotFeature,
        articleHeader,
    }
}
</script>

<style>
div > .tg {
    filter: brightness(80%)
}
</style>