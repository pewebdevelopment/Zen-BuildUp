<template>
  <!-- Main Content Wrapper -->
  <div class="main-content kanban-app w-full">
    <!-- Header -->
    <div class="flex justify-between max-w-[90vw] mr-10">
      <div class="flex items-center justify-start py-1 transition-all">
        <div class="flex items-center">
          <h3
            class="text-lg min-w-max px-4 font-medium text-slate-700 w-full dark:text-gray-200"
          >
            Banking App
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
      class="h-full flex flex-row max-w-[100vw] overflow-x-auto scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded kanban-scrollbar w-full items-start overflow-y-hidden transition-all duration-[.25s]"
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
                  <h3 class="text-base text-slate-700 dark:text-navy-100">
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
                class="max-h-[90vh] is-scrollbar-hidden relative overflow-y-auto p-0.5 scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
              >
                <draggable
                  class="categoris-group overflow-x-scroll scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
                  :list="element.tasksList"
                  group="Tasks"
                  @change="log"
                  :itemKey="`${element.tasksList[index]?.id}`"
                >
                  <template #item="{ element, index }">
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
                            class="font-medium tracking-wide text-slate-600 dark:text-navy-100"
                          >
                            Update Design
                            {{ element }}
                            <!-- {{ index + element.id + ":" + element.name  }} -->
                          </p>
                          <div class="flex flex-wrap">
                            <div
                              class="badge bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span> Sep 12 </span>
                            </div>
                            <div
                              class="badge bg-secondary/10 py-1 px-1.5 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                            >
                              Update
                            </div>
                            <div
                              class="badge bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>4/5</span>
                            </div>
                          </div>
                          <div class="flex items-end justify-between pt-1">
                            <div class="flex flex-wrap">
                              <div class="avatar h-5 w-5 hover:z-10">
                                <div
                                  class="is-initial rounded-full bg-info text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                                >
                                  jd
                                </div>
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/lineone-images/200x200.png"
                                  alt="avatar"
                                />
                              </div>

                              <div class="avatar h-5 w-5 hover:z-10">
                                <img
                                  class="rounded-full ring-1 ring-white dark:ring-navy-700"
                                  src="@/assets/lineone-images/200x200.png"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div
                              class="flex items-center text-xs text-slate-400 dark:text-navy-300"
                            >
                              <div class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                  />
                                </svg>
                                <span>3</span>
                              </div>
                              <div class="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-3.5 w-3.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                  />
                                </svg>
                                <span>1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { API, DataStore } from "aws-amplify";
import { listTasks } from "@/graphql/queries";
import { Task } from "@/models";
import { reactive, onMounted } from "vue";
import draggable from "vuedraggable";
import PopperOptions from "@/components/Kanban/PopperOptions.vue";

onMounted(() => {
  console.log("Mounted Kanban");
  getTasks();
});

const getTasks = async () => {
  try {
    // const tasksDataStore = await DataStore.query(Task);
    // console.log(tasksDataStore);
    const tasks = await API.graphql({ query: listTasks });
    console.log(tasks);
    return tasks;
  } catch (err) {
    console.log("error fetching tasks:", err);
  }
};

const list1 = reactive([
  { id: 133, name: "One" },
  { id: 2434, name: "Two" },
  { id: 33, name: "Three" },
  { id: 44, name: "Four" },
  { id: 53334, name: "Five" },
]);

const list2 = reactive([
  { id: 13434, name: "One" },
  { id: 2434, name: "Two" },
  { id: 4343, name: "Three" },
  { id: 4344, name: "Four" },
  { id: 34345, name: "Five" },
]);

const list3 = reactive([
  { id: 122, name: "One" },
  { id: 23434, name: "Two" },
  { id: 34343, name: "Three" },
  { id: 43434, name: "Four" },
  { id: 53443, name: "Five" },
]);

const list4 = reactive([
  { id: 1223, name: "One" },
  { id: 234334, name: "Two" },
  { id: 34366643, name: "Three" },
  { id: 434434, name: "Four" },
  { id: 4453443, name: "Five" },
]);

const list5 = reactive([
  { id: 1223, name: "One" },
  { id: 234654654334, name: "Two" },
  { id: 343333366643, name: "Three" },
  { id: 43422434, name: "Four" },
  { id: 3443, name: "Five" },
]);

const taskCategories = reactive([
  { categoryID: 0, name: "CatOne", tasksList: list1 },
  { categoryID: 1, name: "CatTwo", tasksList: list2 },
  { categoryID: 2, name: "CatThree", tasksList: list3 },
  { categoryID: 4, name: "CatFour", tasksList: list4 },
  { categoryID: 5, name: "CatFive", tasksList: list5 },
]);

const log = () => {};
</script>

<style></style>
