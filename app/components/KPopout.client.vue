<script setup lang="ts">
interface Props {
  image: string;
  alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: "Preview image",
});
</script>

<template>
  <UPopover class="popup" mode="hover" :prevent-overflow="false">
    <!-- Slot content with underline effect -->
    <span
      class="cursor-pointer border-b border-dotted border-gray-400 hover:border-gray-600"
    >
      <slot />
    </span>

    <template #panel>
      <div class="p-2 max-w-sm">
        <NuxtImg
          :src="image"
          :alt="alt"
          class="rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </template>
  </UPopover>
</template>

<style>
.popup div {
  display: inline !important;
}
</style>
