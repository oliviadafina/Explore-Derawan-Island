<script setup>
import ModalSucces from './ModalSucces.vue';
import { ref } from 'vue';

const showModal = ref(false);

const name = ref("");
const email = ref("");
const phone = ref("");
const messageText = ref("");

function submitForm(e) {
  e.preventDefault();

  if (name.value && email.value && phone.value && messageText.value) {
    showModal.value = true;

    name.value = "";
    email.value = "";
    phone.value = "";
    messageText.value = "";
  } else {
    alert("Please fill out all fields before submitting.");
  }
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div class="w-full max-w-4xl mx-auto border border-white p-10 rounded-xl">
    <h2
      class="text-white text-4xl font-bold text-center mb-10"
      style="font-family: 'Montagu Slab', serif"
    >
      Any Question?
    </h2>
    <div class="bg-white rounded-xl shadow-xl p-8">
      <form @submit="submitForm" class="space-y-4">
        <input v-model="name"
          placeholder="Name"
          class="w-full p-3 rounded-md border border-[#004E94] placeholder-gray-400"
          style="font-family: 'Poppins', sans-serif"
        />
        <div class="relative">
          <input v-model="email"
            placeholder="Email"
            class="w-full p-3 rounded-md border border-[#004E94] pl-10 placeholder-gray-400"
            style="font-family: 'Poppins', sans-serif"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute left-3 top-1/2 -translate-y-1/2"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div class="flex">
          <select
            class="p-3 border border-[#004E94] rounded-l-md bg-white"
            style="font-family: 'Poppins', sans-serif"
          >
            <option>+62</option>
          </select>
          <input v-model="phone"
            placeholder="Telephone Number"
            class="w-full p-3 border border-[#004E94] rounded-r-md placeholder-gray-400"
            style="font-family: 'Poppins', sans-serif"
          />
        </div>
        <textarea v-model="messageText"
          placeholder="What Can We Help You With?"
          class="w-full p-3 border border-[#004E94] rounded-md h-32 placeholder-gray-400"
          style="font-family: 'Poppins', sans-serif"
        ></textarea>
        <div class="flex justify-end">
          <button
            class="px-10 py-2 rounded-md border border-[#004E94] text-[#004E94] hover:bg-[#004E94] hover:text-white transition"
            style="font-family: 'Poppins', sans-serif"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <ModalSucces :show="showModal" @close="closeModal" />
</template>
