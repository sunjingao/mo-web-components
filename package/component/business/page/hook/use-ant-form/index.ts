import { ref } from 'vue';
export function useAntForm() {
  const formCompRef = ref(null);

  return {
    formCompRef
  };
}
