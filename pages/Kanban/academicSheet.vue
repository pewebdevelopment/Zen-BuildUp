<template>
  <NuxtLayout name="zen">
    <!-- Main Content Wrapper -->
    <div class="main-content kanban-app w-full">
      <!-- Header -->
      <div class="flex justify-between max-w-[90vw] mr-10">
        <div class="flex items-center justify-start py-1 transition-all">
          <div class="flex items-center">
            <h3
              class="text-lg min-w-max px-4 font-medium text-slate-700 w-full dark:text-gray-200"
            >
              Academic Sheet
            </h3>
          </div>
          <label class="relative w-full sm:flex">
            <input
              class="form-input peer h-8 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Search on boards"
              type="text"
            />
            <span
              class="pointer-events-none absolute flex h-full w-9 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                />
              </svg>
            </span>
          </label>
        </div>
        <div
          id="new-category"
          class="w-96 sm:w-72 sm:pr-5 pr-32 flex justify-end"
        >
          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-gray-700 dark:text-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              Add Category
            </span>
          </button>
        </div>
      </div>
      <div
        class="h-full flex flex-row max-w-[100vw] overflow-x-auto scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded kanban-scrollbar w-full items-start overflow-y-hidden transition-all duration-[.25s] scrollbar-none"
      >
        <draggable
          id="tasks-group"
          :list="taskCategories"
          group="Categories"
          :itemKey="`${taskCategories.categoryID}`"
          class="flex flex-row w-full items-start relative p-0.5 transition-all"
        >
          <template #item="{ element, index }">
            <div
              class="draggable flex relative max-w-full shrink-0 pr-3 overflow-x-auto"
            >
              <div
                class="draggable board-draggable relative flex max-h-full max-w-full shrink-0 flex-col"
              >
                <div
                  class="board-draggable-handler p-2 rounded-b-lg flex items-center justify-between pb-3 sticky top-0 z-10 bg-slate-50 dark:bg-gray-800 dark:text-gray-300"
                >
                  <div class="flex items-center">
                    <div
                      class="flex h-8 w-8 mr-2 items-center justify-center rounded-lg bg-info/10 text-info"
                    >
                      <i class="fa fa-spinner text-base"></i>
                    </div>
                    <h3
                      class="text-base text-slate-700 dark:text-navy-100 dark:text-gray-200"
                    >
                      In Progress
                      {{ element.name + index }}
                    </h3>
                  </div>

                  <div id="tasks-progress-menu" class="inline-flex">
                    <PopperOptions />
                  </div>
                </div>
                <div
                  id="tasks-progress-list"
                  class="max-h-[90vh] is-scrollbar-hidden relative overflow-y-auto p-0.5 scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded scrollbar-none"
                >
                  <draggable
                    class="categoris-group overflow-x-scroll scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded scrollbar-none"
                    :list="element.tasksList"
                    group="Tasks"
                    @change="log"
                    :itemKey="`${element.tasksList[index]?.id}`"
                  >
                    <template #item="{ element, index }">
                      <AcadSheetSingle :data="element" />
                    </template>
                  </draggable>
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import draggable from "vuedraggable";
import PopperOptions from "@/components/Kanban/PopperOptions.vue";
import AcadSheetSingle from "@/components/Kanban/AcadSheetSingle.vue";

onMounted(() => {
  console.log("Mounted Kanban");
});

const list1 = reactive([
  { id: 133, name: "One" },
  { id: 2434, name: "Two" },
  { id: 33, name: "Three" },
  { id: 44, name: "Four" },
  { id: 53334, name: "Five" },
]);

const list2 = reactive([
  {
    Chapter: "Mole Concept",
    "Teaching Status": "done",
    assignments: [
      {
        name: "module1",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module2",
        link: "https://www.google.com",
        status: "on progress",
      },
      {
        name: "module3",
        link: "https://www.google.com",
        status: "not done",
      },
      {
        name: "module4",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module5",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module6",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module7",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module8",
        link: "https://www.google.com",
        status: "done",
      },
    ],
  },
]);

const list3 = reactive([
  {
    Chapter: "Solid State",
    "Teaching Status": "done",
    assignments: [
      {
        name: "module1",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module2",
        link: "https://www.google.com",
        status: "on progress",
      },
      {
        name: "module3",
        link: "https://www.google.com",
        status: "not done",
      },
      {
        name: "module4",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module5",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module6",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module7",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module8",
        link: "https://www.google.com",
        status: "done",
      },
    ],
  },
]);

const list4 = reactive([
  {
    Chapter: "Vector",
    "Teaching Status": "done",
    assignments: [
      {
        name: "module1",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module2",
        link: "https://www.google.com",
        status: "on progress",
      },
      {
        name: "module3",
        link: "https://www.google.com",
        status: "not done",
      },
      {
        name: "module4",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module5",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module6",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module7",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module8",
        link: "https://www.google.com",
        status: "done",
      },
    ],
  },
]);

const list5 = reactive([
  {
    Chapter: "Trignometry",
    "Teaching Status": "done",
    assignments: [
      {
        name: "module1",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module2",
        link: "https://www.google.com",
        status: "on progress",
      },
      {
        name: "module3",
        link: "https://www.google.com",
        status: "not done",
      },
      {
        name: "module4",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module5",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module6",
        link: "https://www.google.com",
        status: "done",
      },
      {
        name: "module7",
        link: "https://www.google.com",
        status: "unassigned",
      },
      {
        name: "module8",
        link: "https://www.google.com",
        status: "done",
      },
    ],
  },
]);

const studentTasks = reactive({
  data: [
    {
      Chapter: "kinematics",
      "Teaching Status": "done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "NLM",
      "Teaching Status": "on progress",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "Work poer energy",
      "Teaching Status": "not done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "Rotaion",
      "Teaching Status": "done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "Circular Motion",
      "Teaching Status": "done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "Fluids",
      "Teaching Status": "done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
    {
      Chapter: "Electrostatics",
      "Teaching Status": "done",
      assignments: [
        {
          name: "module1",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module2",
          link: "https://www.google.com",
          status: "on progress",
        },
        {
          name: "module3",
          link: "https://www.google.com",
          status: "not done",
        },
        {
          name: "module4",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module5",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module6",
          link: "https://www.google.com",
          status: "done",
        },
        {
          name: "module7",
          link: "https://www.google.com",
          status: "unassigned",
        },
        {
          name: "module8",
          link: "https://www.google.com",
          status: "done",
        },
      ],
    },
  ],
});

const taskCategories = reactive([
  { categoryID: 0, name: "CatOne", tasksList: studentTasks.data },
  { categoryID: 1, name: "CatTwo", tasksList: list2 },
  { categoryID: 2, name: "CatThree", tasksList: list3 },
  { categoryID: 4, name: "CatFour", tasksList: list4 },
  { categoryID: 5, name: "CatFive", tasksList: list5 },
]);

const log = () => {};
</script>

<style src="@/assets/css/kanban.css"></style>
