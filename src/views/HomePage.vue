<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getAllSales } from "../API"

interface Sale {
   id: Number
   title: String
   description: String
}

const data = ref<Sale[]>()

onMounted(async () => {
   let res = await getAllSales()
   console.log(res.data)
   data.value = res.data
   console.log(data.value)
})
</script>

<template>
   <div>
      <h1>HOME PAGE</h1>
   </div>
</template>

<style scoped></style>
