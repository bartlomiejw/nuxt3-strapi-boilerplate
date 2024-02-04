<script lang="ts" setup>
const themes = ['system', 'light', 'dark'];
</script>
<template>
    <form>
        <Dropdown id="themes" v-model="$colorMode.preference" :options="themes" aria-label="themes" optionLabel="name" class="border-1 border-l-3 mx-1 inline-block border-gray-900 bg-inherit text-sm">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center">
                    <Icon name="gg:dark-mode" size="1.5em" class="mr-2" />
                    <div>{{ $t('themes.' + slotProps.value) }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="option">
                <div :aria-label="$t('themes.' + option.option)">
                    {{ $t('themes.' + option.option) }}
                </div>
            </template>
        </Dropdown>
    </form>
</template>
