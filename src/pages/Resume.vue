<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-3 animate-fade-in">
      <!-- Resume Header with Photo -->
      <header class="flex flex-col items-center sm:flex-row sm:justify-between mb-8">
        <div class="text-center sm:text-left">
          <h1 class="text-4xl font-bold text-gray-900">Mazisi Msebele</h1>
          <p class="text-lg text-blue-500">Full Stack Developer</p>
          <div class="mt-4 text-gray-500">
            <p>Email: mazisi@mrnlabs.com</p>
            <p>Phone: +27 69 512 4059</p>
            <p>Location: Johannesburg, South Africa</p>
          </div>
        </div>
        <!-- Headshot Photo -->
        <img src="../assets/mazisi.jpg" alt="Mazisi Msebele" class="mt-6 sm:mt-0 w-32 h-32 object-cover rounded-full shadow-lg animate-bounce-in">
      </header>
  
      <!-- Profile Summary -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Profile</h2>
        <p class="mt-2 text-gray-700">
          Passionate and result-oriented full-stack developer with over 5 years of experience in building
          and scaling web applications. Adept in JavaScript frameworks like Vue.js and Laravel, with a focus
          on creating efficient, user-friendly interfaces and backend systems.
        </p>
      </section>
  
      <!-- Skills Section with Animated Pills -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Skills</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          <!-- Skill Pills with Different Backgrounds -->
          <span class="bg-blue-100 text-blue-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill">
            JavaScript
          </span>
          <span class="bg-green-100 text-green-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-100">
            Vue.js
          </span>
          <span class="bg-yellow-100 text-yellow-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-200">
            Laravel/PhP
          </span>
          <span class="bg-indigo-100 text-indigo-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-300">
            Tailwind CSS
          </span>
          <span class="bg-red-100 text-red-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-400">
            REST APIs
          </span>
          <span class="bg-purple-100 text-purple-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-500">
            Git & GitHub
          </span>
          <span class="bg-pink-100 text-pink-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-600">
            React Js
          </span>
          <span class="bg-gray-100 text-gray-500 py-2 px-4 rounded-full font-semibold text-sm text-center animate-fade-in-skill delay-700">
            HTML & CSS
          </span>
        </div>
      </section>
  
      <!-- Experience Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Experience</h2>
        <div class="mt-4 space-y-6">
          <!-- Job 1 -->
          <div>
            <h3 class="text-xl font-bold text-blue-500">Senior Full Stack Developer</h3>
            <p class="text-gray-500">Tech Solutions Inc. | 2019 - Present</p>
            <p class="mt-2 text-gray-700">
              Leading the development of scalable web applications, with a focus on frontend design using
              Vue.js and backend API development in Laravel. Managed a team of junior developers to deliver
              critical projects under tight deadlines.
            </p>
          </div>
  
          <!-- Job 2 -->
          <div>
            <h3 class="text-xl font-bold text-blue-500">Frontend Developer</h3>
            <p class="text-gray-500">Creative Agency | 2017 - 2019</p>
            <p class="mt-2 text-gray-700">
              Built and maintained interactive, responsive websites using modern frontend frameworks,
              primarily Vue.js. Worked closely with the design team to implement visually appealing
              UI/UX elements while ensuring cross-browser compatibility.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Education Section -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">Education</h2>
        <div class="mt-4 space-y-6">
          <!-- Education 1 -->
          <div>
            <h3 class="text-xl font-bold text-blue-500">BSc in Computer Science</h3>
            <p class="text-gray-500">University of California, Berkeley | 2013 - 2017</p>
            <p class="mt-2 text-gray-700">
              Graduated with honors, with a focus on software development and web technologies.
              Completed several projects involving web application development and system design.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResumeComponent',
  };
  </script>
  
  <style scoped>
  /* Animations */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes bounce-in {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  
  .animate-bounce-in {
    animation: bounce-in 1.5s ease-in-out infinite;
  }
  
  .animate-fade-in-skill {
    animation: fade-in 0.5s ease-in-out;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-400 {
    animation-delay: 0.4s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  </style>
  