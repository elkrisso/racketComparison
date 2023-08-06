<template>
  <v-data-table
    :headers="[
      { title: '', align: 'start', sortable: false, key: 'attribute' },
      { title: 'Racket 1', align: 'start', sortable: false, key: 'racket1' },
      { title: 'Racket 2', align: 'start', sortable: false, key: 'racket2' },
      { title: 'Racket 3', align: 'start', sortable: false, key: 'racket3' },
    ]"
    :items="comparisonItems"
    item-value="name"
    class="elevation-1"
  >
    <template v-slot:headers="{ columns }">
      <tr>
        <template v-for="(column, index) in columns" :key="column.key">
          <td class="table-border">
            <v-autocomplete
              v-if="column.title"
              :label="'Racket ' + index"
              :items="racketNames"
              @update:modelValue="racketSelectionChanged(column.key, $event)"
            ></v-autocomplete>
          </td>
        </template>
      </tr>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="table-border custom-height">
          {{ item.raw.title }}
        </td>
        <td class="table-border custom-height">
          {{ item.raw.racket1 }}
        </td>
        <td class="table-border custom-height">
          {{ item.raw.racket2 }}
        </td>
        <td class="table-border custom-height">
          {{ item.raw.racket3 }}
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { BadmintonRacket } from "@/main";
import { computed, reactive, readonly, ref } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";
import jsonRacketList from "../assets/rackets.json";
const rackets: Array<BadmintonRacket> = jsonRacketList;
const racketNames = rackets.map((racket) => racket.name);

let comparisonItems = reactive([
  {
    title: "Racket Name",
    key: "name",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Manufacturer",
    key: "manufacturer",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Balance",
    key: "balance",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Weight",
    key: "weight",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Stiffness",
    key: "stiffness",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Color",
    key: "color",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Weight Class",
    key: "weighU",
    racket1: "",
    racket2: "",
    racket3: "",
  },
  {
    title: "Grip Sizes",
    key: "gripSize",
    racket1: "",
    racket2: "",
    racket3: "",
  },
]);

function racketSelectionChanged(racketSlot: string, racketName: string) {
  const racket = findRacketInJson(racketName);
  if (racket) {
    setRacketValue(racketSlot, racket);
  }
  console.log(comparisonItems);
}

function setRacketValue(racketSlot: string, racket: BadmintonRacket) {
  comparisonItems.forEach((slot: any) => {
    const value = racket[slot.key as keyof BadmintonRacket];
    slot[racketSlot] = value;
  });
}

function findRacketInJson(
  racketName: string
): BadmintonRacket | null | undefined {
  return rackets.find((racket: BadmintonRacket) => {
    return racket.name === racketName;
  });
}
</script>

<style>
.table-border {
  border-right: 1px solid black;
}

.custom-height {
  height: 72px;
}
</style>