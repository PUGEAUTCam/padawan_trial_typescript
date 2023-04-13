<script setup lang="ts">
import type { Item } from "@/interfaces"

const props = defineProps<{
   item: Item
   index: number
}>()
</script>

<template>
   <div>
      <div>
         <img
            src="../../public/galle_vase.jpeg"
            alt="Exemple d'objets mis aux enchères pour illustrer le lot"
         />
      </div>
      <div>
         <p>
            <strong>Lot {{ index + 1 }}</strong>
         </p>
         <p>{{ item.description }}</p>
      </div>
   </div>
</template>
