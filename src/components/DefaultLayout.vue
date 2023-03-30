<script setup lang="ts">
import HeaderVue from "./Header.vue"
</script>

<template>
   <div>
      <HeaderVue />
      <main>
         <router-view></router-view>
      </main>
   </div>
</template>

<style scoped></style>
