<template>
  <div class="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <div class="text-red-500 text-sm" v-for="error of v$.email.$errors" :key="error.$uid">
            <div class="text-danger">Email is required</div>
          </div>
        </div>

 
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
          <input
            v-model="form.password"
            id="password"
            type="password"
            class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
          <div class="text-red-500 text-sm" v-for="error of v$.password.$errors" :key="error.$uid">
            <div class="text-danger">Password is required</div>
          </div>
        </div>
        
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <LoaderPinwheel v-if="isLoading" class="w-8 h-8 mx-auto animate-spin" />
          {{ isLoading ? '' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { required, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';
import { LoaderPinwheel } from 'lucide-vue-next';

const isLoading = ref(false);

const auth = useFirebaseAuth()

const form = ref({
    email: '',
    password: ''
  });

const rules = { 
  email: { required, email },
  password: { required}
};
const v$ = useVuelidate(rules, form);

// Handle form submission
const handleSubmit = async () => {
  const isFormValid = await v$.value.$validate();
  if (!isFormValid) {
    return;
  }
  isLoading.value = true;
  signInWithEmailAndPassword(
    auth,
    form.value.email,
    form.value.password
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })

// console.log({form});

//   createUserWithEmailAndPassword(
//     auth,
//     form.value.email,
//     form.value.password
//   )
//     .then((userCredential) => {
//       isLoading.value = false;
//       const user = userCredential.user
//       console.log('user', user)
//       // ...
//     })
//     .catch((error) => {
//       isLoading.value = false;
//       error.value = 'An error occurred. Please try again.'
//       console.log('error', error.message)
//     })
};



</script>
