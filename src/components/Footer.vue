<template>
  <footer class="bg-gray-900 text-white py-8 mt-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <!-- Left Section: Navigation Links -->
        <div class="text-center md:text-left">
          <h2 class="text-lg font-bold mb-4">Quick Links</h2>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="hover:text-teal-400">Home</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:text-teal-400">Blog</RouterLink></li>
            <li><RouterLink to="/utilities" class="hover:text-teal-400">Utilities</RouterLink></li>
            <li><RouterLink to="/documentation" class="hover:text-teal-400">Documentation</RouterLink></li>
            <li><RouterLink to="/sign-in" class="hover:text-teal-400">Sign In</RouterLink></li>
          </ul>
        </div>
        
        <!-- Center Section: About / Contact -->
        <div class="text-center">
          <h2 class="text-lg font-bold mb-4">Get In Touch</h2>
          <p>Email: <a href="mailto:mazisi@mrnlabs.com" class="text-teal-400 hover:underline">mazisi@mrnlabs.com</a></p>
          <p>Phone: +27 69 512 4059</p>
        </div>
        
        <!-- Right Section: Social Media Links -->
        <div class="text-center md:text-right">
          <h2 class="text-lg font-bold mb-4">Follow Us</h2>
          <div class="flex justify-center md:justify-end space-x-4">
            <a href="https://twitter.com" target="_blank" class="text-teal-400 hover:text-teal-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.865 9.865 0 01-3.127 1.195 4.922 4.922 0 00-8.385 4.482A13.978 13.978 0 011.671 3.15a4.922 4.922 0 001.523 6.57 4.902 4.902 0 01-2.229-.616v.062a4.925 4.925 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.924 4.924 0 004.6 3.417 9.868 9.868 0 01-6.102 2.105c-.398 0-.79-.023-1.175-.067a13.942 13.942 0 007.548 2.212c9.056 0 14.01-7.502 14.01-14.009 0-.214-.005-.428-.015-.64A10.024 10.024 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" class="text-teal-400 hover:text-teal-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.173c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.764-1.605-2.665-.305-5.466-1.334-5.466-5.933 0-1.312.467-2.382 1.235-3.221-.123-.304-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.872.118 3.176.77.839 1.233 1.909 1.233 3.221 0 4.609-2.803 5.625-5.475 5.921.431.371.815 1.103.815 2.222v3.293c0 .322.216.694.824.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <!-- Add more social media links here -->
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300"/>
      <div class="md:flex-1 text-center ">
        <h2 class="text-lg font-bold mb-4">Open Source</h2>
        <p>This website is open source and available for anyone to clone, modify, and use for personal or commercial projects.</p>
        <p>Feel free to visit our <a href="https://github.com/mrnlabs" class="text-teal-400 hover:underline">GitHub repository</a> to explore the codebase.</p>
      </div>

      <!-- Bottom Row: Copyright Text -->
      <div class="mt-8 text-center text-sm text-gray-400">
        © {{ new Date().getFullYear() }} <a href="https://mrnlabs.com" target="_blank" class="text-teal-400 hover:text-teal-300">mrnlabs</a>. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// You can add any specific JavaScript here if necessary
</script>