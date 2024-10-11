<template>
    <div
      class="border-dashed border-2 border-gray-300 py-8 px-4 rounded-lg text-center"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      :class="{'border-blue-500 bg-blue-50': isDragging}"
    >
      <div class="text-blue-500 text-4xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="mx-auto h-12 w-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 16v-4a4 4 0 014-4h10a4 4 0 014 4v4m-4 4h-6m8 0h2m-8 0h-6m2-4h6m4-6h4m0 0L12 12m0 0l-8-8"
          />
        </svg>
      </div>
      <p class="text-sm text-gray-500 mb-2">
        Drag & Drop Your File(s) Here To Upload
      </p>
      <p class="text-sm text-gray-500">or</p>
      <button
        type="button"
        class="mt-2 text-blue-600 underline focus:outline-none hover:text-blue-800"
        @click="selectFiles"
      >
        select file to upload
      </button>
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        multiple
        @change="onFileChange"
      />
  
      <!-- Display selected files -->
      <div v-if="files.length" class="mt-4 text-left">
        <h3 class="text-gray-700 font-semibold mb-2">Selected Files:</h3>
        <ul class="list-disc ml-5">
          <li v-for="(file, index) in files" :key="index" class="text-sm">
            {{ file.name }} ({{ formatFileSize(file.size) }})
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  
  // Define reactive variables
  const isDragging = ref(false);
  const files = reactive<File[]>([]);
  
  // Function to handle drag over event
  const onDragOver = () => {
    isDragging.value = true;
  };
  
  // Function to handle drag leave event
  const onDragLeave = () => {
    isDragging.value = false;
  };
  
  // Function to handle drop event
  const onDrop = (event: DragEvent) => {
    isDragging.value = false;
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      addFiles(droppedFiles);
    }
  };
  
  // Function to open file dialog
  const selectFiles = () => {
    (fileInput.value as HTMLInputElement).click();
  };
  
  // Function to handle file input change
  const onFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      addFiles(input.files);
    }
  };
  
  // Function to add selected or dropped files
  const addFiles = (fileList: FileList) => {
    Array.from(fileList).forEach(file => files.push(file));
  };
  
  // Function to format file size
  const formatFileSize = (size: number): string => {
    const kb = size / 1024;
    const mb = kb / 1024;
    return mb > 1 ? `${mb.toFixed(2)} MB` : `${kb.toFixed(2)} KB`;
  };
  
  // Reference to file input element
  const fileInput = ref<HTMLInputElement | null>(null);
  </script>
  
  <style scoped>
  .border-blue-500 {
    border-color: #3b82f6;
  }
  .bg-blue-50 {
    background-color: #eff6ff;
  }
  </style>
  