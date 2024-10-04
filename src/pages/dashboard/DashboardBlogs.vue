<template>
  <div class="max-w-7xl mx-auto p-6 bg-white mt-3">
    <!-- Blog List Title -->
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 animate-fade-in">Dashboard Blog Posts</h1>
    </header>

    <!-- Categories Tab -->
    <div class="flex justify-center space-x-4 mb-8">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        :class="['px-4 py-2 rounded-full', selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300']"
        class="transition ease-in-out duration-300"
      >
        {{ category }}
      </button>
    </div>

    <!-- Blog List -->
    <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      

<div  v-for="(blog, index) in filteredBlogs"
:key="index" class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogListComponent',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'JavaScript', 'Vue.js', 'CSS', 'Git'],
      blogs: [
        {
          title: 'Understanding Vue.js Reactivity',
          description: 'Learn how Vue.js reactivity works and how you can take advantage of it in your applications.',
          date: 'October 1, 2024',
          image: '/images/vue-reactivity.jpg',
          category: 'Vue.js',
        },
        {
          title: 'Tailwind CSS: A Complete Guide',
          description: 'This blog covers the ins and outs of Tailwind CSS and how you can use it to build modern websites.',
          date: 'September 15, 2024',
          image: '/images/tailwind-guide.jpg',
          category: 'CSS',
        },
        {
          title: 'Building a Full-Stack App with Vue.js and Laravel',
          description: 'Step-by-step guide on how to build a powerful full-stack application using Vue.js and Laravel.',
          date: 'August 25, 2024',
          image: '/images/vue-laravel.jpg',
          category: 'Vue.js',
        },
        {
          title: 'JavaScript ES6 Features You Should Know',
          description: 'Explore the essential ES6 features in JavaScript that make development easier and more enjoyable.',
          date: 'July 30, 2024',
          image: '/images/es6-features.jpg',
          category: 'JavaScript',
        },
        {
          title: 'Mastering Git and GitHub',
          description: 'Learn advanced Git techniques and how to manage your repositories like a pro using GitHub.',
          date: 'June 18, 2024',
          image: '/images/git-github.jpg',
          category: 'Git',
        },
        {
          title: 'Top Vue.js Plugins for Enhanced Development',
          description: 'Discover some of the best Vue.js plugins that can make your development process more efficient.',
          date: 'May 10, 2024',
          image: '/images/vue-plugins.jpg',
          category: 'Vue.js',
        },
      ],
    };
  },
  computed: {
    // Filter the blog posts based on the selected category
    filteredBlogs() {
      if (this.selectedCategory === 'All') {
        return this.blogs;
      }
      return this.blogs.filter(blog => blog.category === this.selectedCategory);
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Keyframes for Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Applying animations */
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-in-out;
}

/* Card hover effect */
.transform {
  transition: transform 0.3s ease;
}
</style>
