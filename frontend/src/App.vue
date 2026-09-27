<script setup>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
</script>

<template>
  <AppHeader />

  <div class="layout">
    <AppSidebar />

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: calc(100vh - 64px);
}

.content {
  flex: 1;
  padding: 32px;
  background: #f5f6f8;
}
</style>
