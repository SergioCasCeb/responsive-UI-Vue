<template>
  <div class="app">
    <Sidebar />
    <div class="main-content">
      <HeaderComponent />
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar.vue'
  import HeaderComponent from './components/Header.vue'
</script>

<style lang="scss">

.app{
  position: relative;
  display: flex;
  height: calc(100vh - 2rem);

  .main-content{
    flex: 1 1 0;
  }
}

@media screen and (min-width: 768px) {
  .app{
    height: calc(100vh - 4rem);

    .main-content{
      padding-left: 2rem;
    }
  }
}

</style>
