<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue';
</script>
<template>
    <div class="p-6 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <!-- Page Header -->
        <h2 class="text-2xl font-semibold mb-6">Create Blog</h2>
  
        <hr class="mb-6" />
  
        <!-- Form Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column: Product Title, Description, and Images -->
          <div class="lg:col-span-2">
            <!-- Product Title -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2" for="product-title">Product Title</label>
              <input
                type="text"
                id="product-title"
                placeholder="Enter product title"
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
  
            <!-- Product Images -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Product Images</label>
              <div class="border-dashed border-2 border-gray-300 py-8 px-4 rounded-lg text-center">
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
                <p class="text-sm text-gray-500 mb-2">Drag & Drop Your File(s) Here To Upload</p>
                <p class="text-sm text-gray-500">or</p>
                <button
                  type="button"
                  class="mt-2 text-blue-600 underline focus:outline-none hover:text-blue-800"
                >
                  select file to upload
                </button>
              </div>
            </div>
          </div>
  
          <!-- Right Column: Product Pricing and Details -->
          <div>
            <!-- Price & Compare at Price -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Price</label>
              <div class="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="00.00"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                  type="number"
                  placeholder="Compare at Price"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
  
            <!-- Cost Per Price & Star Points -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Cost Per Price</label>
              <div class="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="00.00"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                  type="number"
                  placeholder="Star Points"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
  
            <!-- Product Type -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Product Type</label>
              <select
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Product Type</option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </select>
            </div>
  
            <!-- Vendor -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Vendor</label>
              <select
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Vendor</option>
                <option value="1">Vendor 1</option>
                <option value="2">Vendor 2</option>
              </select>
            </div>
  
            <!-- Collection -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Collection</label>
              <select
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Collection</option>
                <option value="1">Collection 1</option>
                <option value="2">Collection 2</option>
              </select>
            </div>
  
            <!-- Product Tags -->
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">Product Tags</label>
              <input
                type="text"
                placeholder="Enter Product Tags"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        </div>
  
        <!-- Save Button -->
        <div class="flex justify-end">
          <button
            class="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  </template>
  