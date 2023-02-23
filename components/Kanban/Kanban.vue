<template>
  <!-- Page Wrapper -->
  <div id="root" class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
    <!-- Main Content Wrapper -->
    <div class="main-content kanban-app w-full">
      <div
        class="flex items-center justify-between space-x-2 px-[var(--margin-x)] py-5 transition-all duration-[.25s]"
      >
        <div class="flex items-center space-x-1">
          <h3
            class="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-50"
          >
            Banking App
          </h3>
          <button
            class="btn hidden h-8 w-8 rounded-full p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 sm:inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4.5 w-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </button>
        </div>
        <label class="relative hidden w-full max-w-[16rem] sm:flex">
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
        <div class="flex space-x-1">
          <div class="flex -space-x-2">
            <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
              <img
                class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                src="@/assets/lineone-images/200x200.png"
                alt="avatar"
              />
            </div>
            <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
              <img
                class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                src="@/assets/lineone-images/200x200.png"
                alt="avatar"
              />
            </div>
            <div class="avatar h-6 w-6 hover:z-10 sm:h-8 sm:w-8">
              <img
                class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                src="@/assets/lineone-images/200x200.png"
                alt="avatar"
              />
            </div>
            <div
              class="avatar hidden h-6 w-6 hover:z-10 sm:inline-flex sm:h-8 sm:w-8"
            >
              <img
                class="rounded-full border-2 border-slate-50 dark:border-navy-900"
                src="@/assets/lineone-images/200x200.png"
                alt="avatar"
              />
            </div>
            <div class="avatar h-6 w-6 sm:h-8 sm:w-8">
              <div
                class="is-initial rounded-full border-2 border-slate-50 bg-info text-xs uppercase text-white dark:border-navy-900"
              >
                +5
              </div>
            </div>
          </div>
          <button
            class="btn h-6 w-6 rounded-full p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25 sm:h-8 sm:w-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
              />
            </svg>
          </button>
          <div class="my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
          <div class="flex">
            <button
              class="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden sm:h-8 sm:w-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              class="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-8 sm:w-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>

            <button
              class="btn hidden h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:inline-flex sm:h-8 sm:w-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5.5 w-5.5 text-primary dark:text-accent"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </button>

            <button
              data-toggle="drawer"
              data-target="#kanban-setting-drawer"
              class="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:h-8 sm:w-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="flex h-[calc(100vh-8.5rem)] flex-grow flex-col">
        <div
          id="tasks-group"
          class="relative space-y-2.5 p-0.5 scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded kanban-scrollbar flex w-full items-start space-x-4 overflow-x-auto overflow-y-hidden px-[var(--margin-x)] transition-all duration-[.25s]"
        >
          <div
            class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
          >
            <div
              class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
            >
              <div class="flex items-center space-x-2">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10 text-info"
                >
                  <i class="fa fa-spinner text-base"></i>
                </div>
                <h3 class="text-base text-slate-700 dark:text-navy-100">
                  In Progress
                </h3>
              </div>

              <div id="tasks-progress-menu" class="inline-flex">
                <Popper>
                  <button
                    class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                  <template #content>
                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </Popper>
              </div>
            </div>
            <div
              id="tasks-progress-list"
              class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5 scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
            >
              <Sortable :list="list" :itemKey="list.id" @remove="onRemove">
                <template #item="{ element }">
                  <div class="card cursor-pointer shadow-sm">
                    <div class="flex space-x-3 px-2.5 pb-2 pt-1.5">
                      <div class="w-10 shrink-0 py-1">
                        <img
                          class="w-full"
                          src="@/assets/lineone-images/illustrations/creativedesign-char.svg"
                          alt="image"
                        />
                      </div>
                      <div class="flex-1 space-y-2">
                        <p
                          class="font-medium tracking-wide text-slate-600 dark:text-navy-100"
                        >
                          Update Design {{ element.name }}
                        </p>
                        <div class="flex flex-wrap space-x-1">
                          <div
                            class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
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
                            <span> Sep 12</span>
                          </div>
                          <div
                            class="badge bg-secondary/10 py-1 px-1.5 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light"
                          >
                            Update
                          </div>
                          <div
                            class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
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
                          <div class="flex flex-wrap -space-x-1.5">
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
                            class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                          >
                            <div class="flex items-center space-x-0.5">
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
                            <div class="flex items-center space-x-0.5">
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
              </Sortable>
            </div>
            <!-- New Task Div -->
            <div class="flex justify-center py-2">
              <button
                class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>New Task</span>
              </button>
            </div>
          </div>

          <div
            class="board-draggable relative flex max-h-full w-72 shrink-0 flex-col"
          >
            <div
              class="board-draggable-handler flex items-center justify-between px-0.5 pb-3"
            >
              <div class="flex items-center space-x-2">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-warning/10 text-warning"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-base text-slate-700 dark:text-navy-100">
                  Pending
                </h3>
              </div>

              <div id="tasks-pending-menu" class="inline-flex">
                <Popper>
                  <button
                    class="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                  <template #content>
                    <div class="popper-root">
                      <div
                        class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                          class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                              href="#"
                              class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                              >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </Popper>
              </div>
            </div>
            <div
              id="tasks-pending-list"
              class="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5 scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
            >
              <Sortable :list="list" :itemKey="list.id">
                <template #item="{ element }">
                  <div class="card cursor-pointer shadow-sm">
                    <div class="px-2.5 pb-2 pt-1.5">
                      <div>
                        <div class="flex justify-between">
                          <p
                            class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                          >
                            Create Students Module {{ element.name }}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-secondary dark:text-secondary-light"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>

                        <p
                          class="mt-px text-xs text-slate-400 dark:text-navy-300"
                        >
                          Online LMS
                        </p>
                      </div>

                      <div class="mt-2 flex flex-wrap space-x-1">
                        <div
                          class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
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
                          <span> Jun 05</span>
                        </div>
                      </div>

                      <div class="mt-3 flex items-end justify-between">
                        <div class="flex items-center space-x-2">
                          <div class="avatar h-6 w-6">
                            <img
                              class="rounded-full"
                              src="@/assets/lineone-images/200x200.png"
                              alt="avatar"
                            />
                          </div>
                          <p>Katrina W.</p>
                        </div>
                        <div
                          class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                        >
                          <div class="flex items-center space-x-0.5">
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
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card cursor-pointer shadow-sm">
                    <div class="rounded-lg bg-warning/10 px-2.5 pb-2 pt-1.5">
                      <div>
                        <div class="flex justify-between">
                          <p
                            class="font-medium tracking-wide text-warning line-clamp-2"
                          >
                            Pay App Wages [1200$]
                          </p>
                        </div>
                      </div>
                      <div class="mt-2 flex flex-wrap space-x-1">
                        <div
                          class="badge space-x-1 bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
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
                          <span> Sep 12</span>
                        </div>
                        <div
                          class="badge bg-secondary/10 py-1 px-1.5 text-secondary dark:bg-secondary/15 dark:text-secondary-light"
                        >
                          Performance
                        </div>
                      </div>
                      <div class="mt-3 flex items-end justify-between">
                        <div class="flex flex-wrap -space-x-1.5">
                          <div class="avatar h-5 w-5 hover:z-10">
                            <div
                              class="is-initial rounded-full bg-success text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
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
                          class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                        >
                          <div class="flex items-center space-x-0.5">
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
                            <span>2</span>
                          </div>
                          <div class="flex items-center space-x-0.5">
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
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card cursor-pointer shadow-sm">
                    <div class="flex space-x-3 px-2.5 pb-2 pt-1.5">
                      <div class="w-10 shrink-0 py-1">
                        <img
                          class="w-full"
                          src="@/assets/lineone-images/illustrations/invite-user.svg"
                          alt="image"
                        />
                      </div>
                      <div class="flex-1 space-y-2">
                        <div>
                          <div class="flex justify-between">
                            <p
                              class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                            >
                              Invite New Users
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-success"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>

                          <p
                            class="mt-px text-xs text-slate-400 dark:text-navy-300"
                          >
                            Invite new users to chatroom
                          </p>
                        </div>
                        <div class="flex flex-wrap space-x-1">
                          <div
                            class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
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
                            <span> Daily</span>
                          </div>

                          <div
                            class="badge space-x-1 bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
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
                            <span>7/10</span>
                          </div>
                        </div>
                        <div class="flex items-end justify-between pt-1">
                          <div class="flex items-center space-x-2">
                            <div class="avatar h-6 w-6">
                              <img
                                class="rounded-full"
                                src="@/assets/lineone-images/200x200.png"
                                alt="avatar"
                              />
                            </div>
                            <p>Raul B.</p>
                          </div>

                          <div
                            class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                          >
                            <div class="flex items-center space-x-0.5">
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
                              <span>2</span>
                            </div>
                            <div class="flex items-center space-x-0.5">
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
                              <span>4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </Sortable>

              <div id="New Task Pending" class="card cursor-pointer shadow-sm">
                <div class="px-2.5 pb-2 pt-1.5">
                  <div>
                    <div class="flex justify-between">
                      <p
                        class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
                      >
                        Daily New Post
                      </p>
                    </div>
                  </div>

                  <div class="mt-2 flex flex-wrap space-x-1">
                    <div
                      class="badge space-x-1 bg-slate-150 py-1 px-1.5 text-slate-800 dark:bg-navy-500 dark:text-navy-100"
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
                      <span> Apr 12</span>
                    </div>
                    <div
                      class="badge space-x-1 bg-info/10 py-1 px-1.5 text-info dark:bg-info/15"
                    >
                      <span>Blog</span>
                    </div>
                  </div>

                  <div class="mt-3 flex flex-col space-y-2">
                    <label class="inline-flex items-center space-x-2">
                      <input
                        checked
                        class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                        type="checkbox"
                      />
                      <span>Write Article</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                        class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                        type="checkbox"
                      />
                      <span>Review</span>
                    </label>
                    <label class="inline-flex items-center space-x-2">
                      <input
                        class="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                        type="checkbox"
                      />
                      <span>Publish</span>
                    </label>
                  </div>

                  <div class="mt-3 flex items-end justify-between">
                    <div class="flex flex-wrap -space-x-1.5">
                      <div class="avatar h-5 w-5 hover:z-10">
                        <div
                          class="is-initial rounded-full bg-success text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700"
                        >
                          jd
                        </div>
                      </div>

                      <div class="avatar h-5 w-5 hover:z-10">
                        <img
                          class="rounded-full ring-1 ring-white dark:ring-navy-700"
                          src="@/assets/lineone-images/200x200.png"
                          alt="avatar"
                          draggable="false"
                        />
                      </div>

                      <div class="avatar h-5 w-5 hover:z-10">
                        <img
                          class="rounded-full ring-1 ring-white dark:ring-navy-700"
                          src="@/assets/lineone-images/200x200.png"
                          alt="avatar"
                          draggable="false"
                        />
                      </div>
                    </div>
                    <div
                      class="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300"
                    >
                      <div class="flex items-center space-x-0.5">
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
                        <span>2</span>
                      </div>
                      <div class="flex items-center space-x-0.5">
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
                        <span>4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center py-2">
              <button
                class="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>New Task</span>
              </button>
            </div>
          </div>

          <div id="new-board-rhs" class="w-72 shrink-0">
            <button
              class="btn w-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              New Board
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sortable } from "sortablejs-vue3";
import Popper from "vue3-popper";

onMounted(() => {
  console.log("Mounted Kanban");
});

const list = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
];

const onMove = (event) => {
  console.log(event);
};

const onRemove = (event) => {
  console.log(event);
};

const onAdd = (event) => {
  console.log(event);
};
</script>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.dark {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.light {
  --popper-theme-background-color: #ffffff;
  --popper-theme-background-color-hover: #ffffff;
  --popper-theme-text-color: #333333;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: #eeeeee;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
