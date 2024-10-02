<template>
    <div class="max-w-7xl mx-auto p-6 bg-white mt-3">
      <!-- Blog List Title -->
      <header class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-gray-900 animate-fade-in">Latest Blog Posts</h1>
      </header>
  
      <!-- Blog List -->
      <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 animate-slide-up"
        >
          <!-- Blog Thumbnail -->
          <img :src="blog.image" alt="Blog image" class="w-full h-48 object-cover" />
  
          <!-- Blog Content -->
          <div class="p-6">
            <!-- Blog Title -->
            <h2 class="text-xl font-semibold text-gray-800 mb-3">{{ blog.title }}</h2>
  
            <!-- Blog Description -->
            <p class="text-gray-600 mb-4">{{ blog.description }}</p>
  
            <!-- Blog Date -->
            <p class="text-gray-400 text-sm">Published on: {{ blog.date }}</p>
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
        blogs: [
          {
            title: 'Understanding Vue.js Reactivity',
            description: 'Learn how Vue.js reactivity works and how you can take advantage of it in your applications.',
            date: 'October 1, 2024',
            image: '/vue-reactivity.PNG',
          },
          {
            title: 'Tailwind CSS: A Complete Guide',
            description: 'This blog covers the ins and outs of Tailwind CSS and how you can use it to build modern websites.',
            date: 'September 15, 2024',
            image: '/images/tailwind-guide.jpg',
          },
          {
            title: 'Building a Full-Stack App with Vue.js and Laravel',
            description: 'Step-by-step guide on how to build a powerful full-stack application using Vue.js and Laravel.',
            date: 'August 25, 2024',
            image: '/images/vue-laravel.jpg',
          },
          {
            title: 'JavaScript ES6 Features You Should Know',
            description: 'Explore the essential ES6 features in JavaScript that make development easier and more enjoyable.',
            date: 'July 30, 2024',
            image: '/images/es6-features.jpg',
          },
          {
            title: 'Mastering Git and GitHub',
            description: 'Learn advanced Git techniques and how to manage your repositories like a pro using GitHub.',
            date: 'June 18, 2024',
            image: '/images/git-github.jpg',
          },
          {
            title: 'Top Vue.js Plugins for Enhanced Development',
            description: 'Discover some of the best Vue.js plugins that can make your development process more efficient.',
            date: 'May 10, 2024',
            image: '/images/vue-plugins.jpg',
          },
        ],
      };
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
  