<script setup lang="ts"></script>

<template>
   <header>
      <div>
         <router-link :to="{ name: 'home' }">
            <img src="./logo_ie.svg" alt="Logo de la societe Interencheres" />
            <!-- <img
               src="./logo_ie_mobile.svg"
               alt="Logo de la societe Interencheres"
            /> -->
         </router-link>
         <nav>
            <ul>
               <router-link :to="{ name: 'newSale' }">
                  <li>Créer une nouvelle vente</li>
               </router-link>
               <router-link :to="{ name: 'search' }">
                  <li>Rechercher</li>
               </router-link>
            </ul>
         </nav>
      </div>
   </header>
</template>

<style scoped></style>
