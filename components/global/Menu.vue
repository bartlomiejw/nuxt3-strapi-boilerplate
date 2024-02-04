<script lang="ts" setup>
import useNavigation from '@/composables/useNavigation';
import type { MenuItem } from 'primevue/menuitem';

const router = useRouter();

const { mainNav } = useNavigation();

const items = ref<MenuItem[]>(mainNav);
</script>
<template>
    <Menubar
        :model="items"
        :pt="{
            action: ({ context }) => ({
                class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
            })
        }"
    >
        <template #item="{ item, label, hasSubmenu, root }">
            <NuxtLink v-if="!hasSubmenu" :to="item.route" custom>
                <a v-ripple :href="item.route" class="relative flex cursor-pointer items-center overflow-hidden px-3 py-2">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ $t(String(label)) }}</span>
                    <Badge v-if="item.badge" class="ml-2" :value="item.badge" />
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down dark:text-primary-400-500 text-primary-500 dark:text-primary-400', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </NuxtLink>
            <div v-else v-ripple class="relative flex cursor-pointer items-center overflow-hidden px-3 py-2">
                <span :class="item.icon" />
                <span class="ml-2">{{ $t(String(label)) }}</span>
                <Badge v-if="item.badge" class="ml-2" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto rounded-md border border-surface-200 bg-surface-100 p-1 text-xs dark:border-surface-500 dark:bg-surface-800">{{ item.shortcut }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down dark:text-primary-400-500 text-primary-500 dark:text-primary-400', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </div>
        </template>
    </Menubar>
</template>
<style lang="scss" scoped></style>
