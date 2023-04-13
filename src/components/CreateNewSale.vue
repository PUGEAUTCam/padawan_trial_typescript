<script setup lang="ts">
import type { Sale } from "@/interfaces"
import type { Item } from "@/interfaces"
import { ref } from "vue"
import { createNewSale } from "@/API"
import { createNewItem } from "@/API"

const newSale = ref<Sale>({
   title: "",
   description: "",
})

const items = ref<Item[]>([])

const item = ref<Item>({
   description: "",
})

const errorMessage = ref("")
const loader = ref(false)

const addItem = () => {
   if (item.value.description.trim().length < 5) {
      return (errorMessage.value =
         "Votre lot doit contenir au moins 5 caracteres")
   }
   errorMessage.value = ""
   items.value.push({ description: item.value.description })
   item.value.description = ""
}

const handleSubmit = async () => {
   if (
      !newSale.value.title ||
      !newSale.value.description ||
      items.value.length === 0
   )
      return null
   loader.value = true
   let res = await createNewSale(newSale.value)
   const itemsPromises = items.value.map((item) =>
      createNewItem(item, res.data.id)
   )
   await Promise.all(itemsPromises)
   newSale.value = {
      title: "",
      description: "",
   }
   items.value = []
   loader.value = false
}
</script>

<template>
   <div>
      <h2>Titre de la vente</h2>
      <textarea
         type="text"
         placeholder="Ex: Ventes de vins et spiritueux"
         autoFocus="{true}"
         v-model.trim="newSale.title"
      >
      </textarea>
      <h2>Description de la vente</h2>
      <textarea
         type="text"
         placeholder="Ex: Ensemble de vins bourguignons..."
         v-model.trim="newSale.description"
      >
      </textarea>

      <h2>Les lots</h2>
      <textarea
         type="text"
         placeholder="Ex: Corton Charlemagne 1992 Niveau haute epaule..."
         v-model.trim="item.description"
      >
      </textarea>
      <button @click="addItem">Ajouter le lot</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>

      <div v-for="(item, index) in items" :key="index">
         <h3>Lot {{ index + 1 }}</h3>
         <p>{{ item.description }}</p>
      </div>

      <br />
      <button @click="handleSubmit">Créer la vente</button>
      <br />
      <div v-if="loader">Loading...</div>
   </div>
</template>
