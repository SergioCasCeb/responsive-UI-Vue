<template>
  <div class="app" :class="`${darkMode ? 'dark-mode' : ''}`">
      <RouterView @toggle-theme="toggleTheme"></RouterView>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const darkMode = ref(false)
  function toggleTheme(){
    darkMode.value = !darkMode.value
  }
</script>

<style lang="scss" scoped>

.dark-mode{
  --clr-neutral-100: #000000;
  --clr-neutral-300: #6F6F6E;
  --clr-neutral-900: #FFFFFF;

  --clr-primary-dark-blue: #FFFFFF;
}

.app{
  height: 100%;
  background-color: var(--clr-neutral-300);

  .container{
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
}

@media screen and (min-width: 1024px){
  .app{
    overflow: hidden;
    height: 100vh;

    .container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-height: 100%;
    }
  }

}

</style>
