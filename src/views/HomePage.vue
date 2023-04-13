<script setup lang="ts">
import type { Sale } from "@/interfaces"
import { onMounted, ref } from "vue"
import { getAllSales } from "../API"
import SaleBanner from "../components/SaleBanner.vue"
import ItemsCards from "../components/ItemsCards.vue"

const sales = ref<Sale[]>()

onMounted(async () => {
   let res = await getAllSales()
   sales.value = res.data
})
</script>

<template>
   <div>
      <h1>Nos ventes en cours</h1>
      <div v-for="sale in sales" :key="sale.id">
         <SaleBanner :title="sale.title" :description="sale.description" />
         <ItemsCards :items="sale.items" />
      </div>
   </div>
</template>
