<template>
  <div class="card cursor-pointer shadow-sm mb-4">
    <div class="flex px-2 pb-2 pt-2 m-4">
      <div class="w-10 shrink-0 py-1">
        <img
          class="w-full"
          src="@/assets/lineone-images/illustrations/creativedesign-char.svg"
          alt="image"
        />
      </div>
      <div class="flex-1">
        <p
          class="font-medium text-center text-lg tracking-wide text-slate-600 dark:text-gray-200"
        >
          {{ props.data.Chapter }}
          <!-- {{ index + element.id + ":" + element.name  }} -->
        </p>
        <div class="flex flex-wrap ml-2">
          <div
            v-if="props.data['Teaching Status'] == 'done'"
            class="badge bg-green-400 pt-1 px-1.5 text-white min-w-min"
          >
          <BaseIcon :path="mdiHumanMaleBoard" />
            <span> {{ props.data["Teaching Status"] }}</span>
          </div>

          <div
            v-else-if="props.data['Teaching Status'] == 'not done'"
            class="badge bg-red-400 pt-1 px-1.5 text-white min-w-min"
          >
          <BaseIcon :path="mdiHumanMaleBoard" />
            <span> {{ props.data["Teaching Status"] }} </span>
          </div>

          <div
            v-else-if="props.data['Teaching Status'] == 'on progress'"
            class="badge bg-orange-400 pt-1 px-1.5 text-white min-w-min"
          >
          <BaseIcon :path="mdiHumanMaleBoard" />
            <span> {{ props.data["Teaching Status"] }} </span>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 pt-2 ml-2">
          <template v-for="item in props.data.assignments">
            <div
              v-if="item.status == 'done'"
              class="badge bg-green-400 pt-1 px-1.5 text-white min-w-min"
            >
              <BaseIcon :path="mdiCheck" />
              <span> {{ item.name }} </span>
            </div>

            <div
              v-else-if="item.status == 'unassigned'"
              class="badge bg-slate-200 pt-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100 min-w-min"
            >
              <BaseIcon :path="mdiTimerCancel" />
              <span> {{ item.name }} </span>
            </div>

            <div
              v-else-if="item.status == 'not done'"
              class="badge bg-red-400 pt-1 px-1.5 text-white min-w-min"
            >
              <BaseIcon :path="mdiClose" />
              <span> {{ item.name }} </span>
            </div>

            <div
              v-else-if="item.status == 'on progress'"
              class="badge bg-orange-400 pt-1 px-1.5 text-white min-w-min"
            >
              <BaseIcon :path="mdiClose" />
              <span> {{ item.name }} </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  mdiAbTesting,
  mdiArrowRight,
  mdiCheck,
  mdiClose,
  mdiHumanMaleBoard,
  mdiTimerCancel,
} from "@mdi/js";
import BaseIcon from "../Display/BaseIcon.vue";

const props = defineProps({
  data: Object,
});
</script>
