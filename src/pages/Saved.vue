<template>
    <Layout>
    <!-- ROOT -->
    <div class="flex flex-col container mx-auto min-h-screen w-screen py-20">
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
import bitbotFeature from '../components/auth/dashboard/bitbotFeature';
import articleHeader from '../components/auth/dashboard/articleHeader';

export default {
    name: 'SavedArticles',
    components: {
        articleEntry,
        bitbotFeature,
        articleHeader,
    }
}
</script>
<style>
</style>
