<script lang="ts" setup>
const { locale } = useI18n();

// update local storage upon language change
const toggleLocale = () => {
    localStorage.setItem('nuxt-lang', locale.value);
};

// check for stored language on initial load.
onMounted(() => {
    const storedLanguage = localStorage.getItem('nuxt-lang');

    if (storedLanguage) {
        locale.value = storedLanguage;
    }
});
</script>
<template>
    <form>
        <Dropdown v-model="$i18n.locale" :options="$i18n.availableLocales" aria-label="language" optionLabel="name" class="bg-red w-full md:w-[14rem]" @change="toggleLocale">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <Icon name="prime:language" size="1.5em" class="mr-2" />
                    <div>{{ $t('locale.' + slotProps.value) }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="option">
                {{ $t('locale.' + option.option) }}
            </template>
        </Dropdown>
    </form>
</template>
