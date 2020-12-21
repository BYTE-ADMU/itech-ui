<template>
    <Layout>
    <!-- ROOT -->
    <div class="flex flex-col container mx-auto min-h-screen w-screen py-20">
        <div class="flex w-full justify-between items-center">
            <!-- Featured & New On ITECH -->
            <div class="flex flex-col w-9/12">
                <featureEntry />
                <div class="flex mt-4 justify-between">
                    <articleEntry />
                    <articleEntry />
                    <articleEntry />
                </div>
            </div>
            <!-- Topic of the Week -->
            <div class="flex flex-col w-3/12">
                <h2 class='text-4xl font-neuemachina mb-4 mx-2'>
                    Topic of the Week ✨
                </h2>
                <playlistTall />
            </div>
        </div>
        <!-- Featured Courses & Playlists-->
        <div class="flex justify-between">
            <div class="flex mt-4 justify-between space-x-4">
                <articleEntry />
                <articleEntry />
                <articleEntry />
            </div>
        </div>
        <!-- Hacker -->
        <div class="flex">
            <div class="flex mt-4 justify-between space-x-4">
                <articleEntry />
                <articleEntry />
                <articleEntry />
            </div>
        </div>
        <!-- Hipster -->
        <div class="flex">
            <div class="flex mt-4 justify-between space-x-4">
                <articleEntry />
                <articleEntry />
                <articleEntry />
            </div>
        </div>
        <!-- Hustler -->
        <div class="flex">
            <div class="flex mt-4 justify-between space-x-4">
                <articleEntry />
                <articleEntry />
                <articleEntry />
            </div>
        </div>
    </div>
    </Layout>
</template>
<script>
import articleEntry from '../components/auth/dashboard/articleEntry';
import featureEntry from '../components/auth/dashboard/featureEntry';
import playlistEntry from '../components/auth/dashboard/playlistEntry';
import playlistTall from '../components/auth/dashboard/playlistTall';

export default {
    name: 'Catalogue',
    components: {
        articleEntry,
        featureEntry,
        playlistEntry,
        playlistTall
    }
}
</script>