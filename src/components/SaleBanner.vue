<script setup lang="ts">
const props = defineProps<{
   title: string
   description: string
}>()
</script>

<template>
   <div>
      <h2>{{ title }}</h2>
      <h3>{{ description }}</h3>
   </div>
</template>
