<script lang="ts" setup>
const { locale, locales, t, setLocale } = useI18n();

// Get available locales as simple array
const localeOptions = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>
<template>
    <form>
        <Dropdown v-model="locale"
                  :options="localeOptions"
                  aria-label="language"
                  class="bg-red w-full md:w-[14rem]"
                  @change="setLocale(locale.code)">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <Icon name="prime:language" size="1.5em" class="mr-2" />
                    <div>{{ t(`locale.${slotProps.value}`) }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="option">
                {{ t(`locale.${option.option.code}`) }}
            </template>
        </Dropdown>
    </form>
</template>
