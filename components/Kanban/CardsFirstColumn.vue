<template>
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
        <p class="font-medium tracking-wide text-slate-600 dark:text-navy-100">
          Update Design
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
  <div class="card cursor-pointer shadow-sm">
    <div class="space-y-3 px-2.5 pb-2 pt-1.5">
      <div>
        <div class="flex justify-between">
          <p
            class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
          >
            Sync With Google Analytics
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-error"
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

        <p class="mt-px text-xs text-slate-400 dark:text-navy-300">
          Google Workspace
        </p>
      </div>
      <div class="flex items-end justify-between">
        <div class="flex items-center space-x-2">
          <div class="avatar h-6 w-6">
            <img
              class="rounded-full"
              src="@/assets/lineone-images/200x200.png"
              alt="avatar"
            />
          </div>
          <p>Travis F.</p>
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
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card cursor-pointer shadow-sm">
    <div class="space-y-2 px-2.5 pb-2 pt-1.5">
      <div>
        <div class="flex justify-between">
          <p
            class="font-medium tracking-wide text-slate-600 line-clamp-2 dark:text-navy-100"
          >
            Add New Products
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="-mr-1.5 h-3.5 w-3.5 shrink-0 text-info"
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
          <span> May 14</span>
        </div>
        <div class="badge bg-info/10 py-1 px-1.5 text-info dark:bg-info/15">
          Create
        </div>
        <div
          class="badge space-x-1 bg-error/10 py-1 px-1.5 text-error dark:bg-error/15"
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
      <div class="grid grid-cols-3 gap-2">
        <img
          src="@/assets/lineone-images/800x600.png"
          class="rounded-lg object-cover object-center"
          alt="image"
        />
        <img
          src="@/assets/lineone-images/800x600.png"
          class="rounded-lg object-cover object-center"
          alt="image"
        />
        <img
          src="@/assets/lineone-images/800x600.png"
          class="rounded-lg object-cover object-center"
          alt="image"
        />
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
  <div class="card cursor-pointer shadow-sm">
    <div class="space-y-3 rounded-lg bg-success/10 px-2.5 pb-2 pt-1.5">
      <div>
        <div class="flex justify-between">
          <p class="font-medium tracking-wide text-success line-clamp-2">
            Improve animation loader
          </p>
        </div>
      </div>
      <div class="flex flex-wrap space-x-1">
        <div
          class="badge space-x-1 bg-success/10 py-1 px-1.5 text-success dark:bg-success/15"
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
          class="badge bg-warning/10 py-1 px-1.5 text-warning dark:bg-warning/15"
        >
          Performance
        </div>
      </div>
      <div class="flex items-end justify-between">
        <div class="flex items-center space-x-2">
          <div class="avatar h-6 w-6">
            <img
              class="rounded-full"
              src="@/assets/lineone-images/200x200.png"
              alt="avatar"
            />
          </div>
          <p>Travis F.</p>
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
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
