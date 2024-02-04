<script setup lang="ts">
const { t } = useI18n();

useHead({
    title: t('pages.contact.meta.title'),
    meta: [{ name: 'description', content: t('pages.contact.meta.description') }]
});
useSeoMeta({
    title: t('pages.contact.meta.title'),
    description: t('pages.contact.meta.description')
});
</script>
<template>
    <div class="p-5">
        <h1 class="text-4xl">{{ $t('pages.contact.title') }}</h1>
        <main class="mt-4 text-slate-500 dark:text-slate-400 [&>*]:mb-4">
            <p>
                {{ $t('pages.contact.p') }}
            </p>
            <p>
                {{ $t('pages.contact.p') }}
            </p>
            <p>{{ $t('pages.contact.p') }} {{ $t('pages.contact.p') }}</p>
            <p>
                {{ $t('pages.contact.p') }}
            </p>
        </main>
    </div>
</template>
