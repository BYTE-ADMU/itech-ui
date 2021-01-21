<template>
    <Layout>
    <!-- ROOT -->
    <div class="container flex flex-col w-screen min-h-screen py-20 mx-auto">
        <div class="flex items-start justify-between w-full">
            <!-- Featured & New On ITECH -->
            <div class="flex flex-col w-9/12">
                <featureEntry />
                <h3 class="mx-2 mt-4 text-xl font-bold uppercase font-objectivity">
                    New On ITECH
                </h3>
                <div class="flex justify-between mt-1">
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
                <h2 class="p-2 mx-auto text-4xl font-neuemachina">
                    Featured Courses & Playlists ✨
                </h2>
            </div>
            <playlistEntry />
            <playlistEntry />
            <playlistEntry />
        </div>
        <!-- Hacker -->
        <div class="flex items-center w-full mt-4">
            <bitbotFeature bb3="hacker" />
            <div class="flex flex-col w-9/12">
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
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
        <div class="flex items-center w-full mt-4">
            <bitbotFeature bb3="hipster" />
            <div class="flex flex-col w-9/12">
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
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
        <div class="flex items-center w-full mt-4">
            <bitbotFeature bb3="hustler" />
            <div class="flex flex-col w-9/12">
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
                    Topics
                </h5>
                <div class="flex justify-between mb-2">
                    <articleHeader />
                    <articleHeader />
                    <articleHeader />
                </div>
                <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
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