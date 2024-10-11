<script setup lang="ts">
import FileUploadComponent from '@/components/FileUploadComponent.vue';
import Select from '@/components/Select.vue';
import Editor from '@tinymce/tinymce-vue';
import { computed, ref } from 'vue';
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const data = useCollection(collection(db, 'categories'));
//map the data
const categoriesCollection = computed(() => data.value?.map((category) => ({ ...category, id: category.id, label: category.name })));
const selectedOption = ref(null);

</script>
<template>
    <div class="p-6 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <!-- Page Header -->
        <h2 class="text-2xl font-semibold mb-6">Create Blog</h2>
  
        <hr class="mb-6" />
        <!-- Form Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div class="lg:col-span-2">
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2" for="product-title">Blog Title</label>
              <input
                type="text"
                id="product-title"
                placeholder="Enter blog Title"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
  
            <!-- Description -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2" for="description">Description</label>
              <Editor
              api-key="9l6lug40mtg10elrk1ncpkmwgmd9gmu8xggx0h2i8ad8xt82"
              :init="{
                plugins: 'lists link image table code help wordcount'
              }"
            />
            </div>
          </div>
  
          <div>
           
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Price</label>
              <Select :options="categoriesCollection" v-model="selectedOption"/>
            </div>
  
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Blog Image</label>
              <FileUploadComponent/>
            </div>
          </div>
        </div>
  
        <!-- Save Button -->
        <div class="flex justify-end">
          <button
            class="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </template>
  