<script setup lang="ts">
useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
});
</script>
<template>
    <div class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
        <div class="container mx-auto max-w-screen-xl px-8">
            <header class="mb-5">
                <nav class="align- flex flex-row items-center justify-between pb-5 pt-10">
                    <NuxtLink to="/" aria-label="Home" class="min-w-fit">
                        <nuxt-img class="h-6 dark:hidden sm:ml-3 lg:ml-0" src="nuxt/full-logo-green-dark.svg" densities="x1 x2" alt="nuxt-logo" style="height: 44px; width: 140px" />
                        <nuxt-img class="hidden h-6 dark:block" src="nuxt/full-logo-green-light.svg" densities="x1 x2" alt="nuxt-logo" style="height: 44px; width: 140px" />
                    </NuxtLink>
                    <div class="flex flex-col space-x-3 space-y-4 sm:flex-row sm:space-y-0 rtl:space-x-reverse">
                        <ThemeSwitcher class="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />

                        <LanguageSelector class="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white" />
                    </div>
                </nav>
                <Menu />
            </header>
            <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
                <slot />
            </div>
            <footer class="dark:text-300 py-20 text-center text-sm text-gray-600 dark:bg-slate-900">
                <p>© {{ new Date().getFullYear() }} - {{ $t('site.name') }}</p>
            </footer>
        </div>
    </div>
</template>
<style lang="postcss">
ul .router-link-exact-active {
    @apply border-slate-400 bg-slate-500 text-white hover:border-slate-500 hover:bg-slate-500 dark:border-slate-600 dark:bg-slate-700;
}
</style>
