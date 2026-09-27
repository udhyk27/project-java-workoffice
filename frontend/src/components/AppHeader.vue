<template>
  <header class="header">
    <div class="logo">WorkOffice</div>

    <div class="user-area">
      <button class="notification">알림</button>
      <span>{{ userName }}</span>
      <button class="logout" @click="logout">로그아웃</button>
    </div>
  </header>
</template>

<script setup>
const userName = '홍길동'

const logout = () => {
  console.log('로그아웃')
}
</script>

<style scoped>
.header {
  height: 64px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

.logo {
  font-size: 20px;
  font-weight: 600;
}

.user-area {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
}

button {
  border: 0;
  background: none;
  color: #555;
  cursor: pointer;
}

button:hover {
  color: #111;
}
</style>
