import { defineStore } from 'pinia';
import { ref } from 'vue';
import { signInWithEmailAndPassword, type User } from 'firebase/auth';
import { useLocalStorage } from '@/composables/useLocalStorage';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  

  const user = ref<User | null>(null);
  
  const router = useRouter();

  const auth = useFirebaseAuth()

  const storedUser = useLocalStorage<User | null>('maz-user', null);

  const signIn = async (email: string, password: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;

      storedUser.value = userCredential.user;
      router.push('/dashboard-blogs');
    } catch (err) {
      error.value = 'Failed to login: ' + (err as Error).message;
      console.error(error.value);
    } finally {
      isLoading.value = false;
    }
  };

  // Log out method
  const logout = () => {
    user.value = null;
    storedUser.value = null; 
    router.push('/login'); 
  };

  const getUser = () => {
    const storedUser = useLocalStorage<User | null>('maz-user', null);
    user.value = storedUser.value;

    if (user.value) {
      return user.value;
    }
  };

  return {
    isLoading,
    error,
    user,
    signIn,
    logout,
    storedUser,
    getUser
  };
});
