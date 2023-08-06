<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-title>Racket Comparison</v-card-title>
        <v-card-subtitle>Select a racket form the list and compare it</v-card-subtitle>

        <v-card-item>
          <CompareTable />
        </v-card-item>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import CompareTable from "@/components/CompareTable.vue";
</script>
