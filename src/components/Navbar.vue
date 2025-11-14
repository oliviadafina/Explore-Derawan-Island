<template>
  <nav class="absolute top-0 left-0 w-full z-50 bg-transparent">
    <div class="mx-auto max-w-7xl px-4">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <img src="/public/logo.png" class="h-24 w-auto" />
        </div>
        <div class="hidden sm:flex space-x-12">
          <router-link
            to="/"
            class="text-white hover:underline hover:underline-offset-8 hover:decoration-white transition"
          >
            Home
          </router-link>

          <router-link
            to="/contact"
            class="text-white hover:underline hover:underline-offset-8 hover:decoration-white transition"
          >
            Contact
          </router-link>
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            command="--toggle"
            commandfor="mobile-menu"
            class="p-2 rounded-md text-white hover:bg-white/20"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <el-disclosure
      id="mobile-menu"
      hidden
      class="sm:hidden bg-transparent px-4 pb-4 space-y-1"
    >
      <a class="block text-white py-2">Home</a>
      <a class="block text-white py-2">Destination</a>
      <a class="block text-white py-2">Activity</a>
      <a class="block text-white py-2">Tips & Info</a>
      <a class="block text-white py-2">Gallery</a>
    </el-disclosure>
  </nav>
</template>
