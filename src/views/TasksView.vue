<template>
    <div class="container">
        <SidebarComponent />
        <div class="tasks-page">
            <HeaderComponent @toggle-theme="$emit('toggle-theme')" class="header"/>
            <main class="tasks">
                
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/HeaderComponent.vue'
    import SidebarComponent from '../components/SidebarComponent.vue'
    
</script>

<style lang='scss' scoped>
.tasks-page{
    height: 100%;
    padding-bottom: 6rem;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .tasks{
        margin-top: 1rem;
        width: 100%;
        height: 100%;
    }
}


@media screen and (min-width: 1024px) {
    .dashboard-page{
        padding-bottom: 0;
    }
}
</style>