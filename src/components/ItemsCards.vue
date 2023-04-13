<script setup lang="ts">
import type { Item } from "@/interfaces"
import Card from "../components/Card.vue"

const props = defineProps<{
   items: Item[]
}>()
</script>

<template>
   <div v-for="(item, index) in items" :key="item.id">
      <Card :item="item" :index="index" />
   </div>
</template>
