<template>
  <aside class="sidebar">
    <nav>
      <RouterLink to="/" class="menu"> 대시보드 </RouterLink>

      <RouterLink to="/schedule" class="menu"> 일정 </RouterLink>

      <RouterLink to="/approval" class="menu"> 전자결재 </RouterLink>

      <RouterLink to="/board" class="menu"> 게시판 </RouterLink>

      <RouterLink to="/organization" class="menu"> 조직도 </RouterLink>

      <div class="divider"></div>

      <RouterLink to="/admin/users" class="menu"> 사원 관리 </RouterLink>

      <RouterLink to="/admin/departments" class="menu"> 부서 관리 </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  min-height: calc(100vh - 64px);
  padding: 24px 16px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu {
  padding: 12px 14px;
  border-radius: 6px;
  color: #555;
  font-size: 14px;
  text-decoration: none;
}

.menu:hover,
.menu.router-link-active {
  background: #f0f2f5;
  color: #111;
  font-weight: 600;
}

.divider {
  height: 1px;
  margin: 16px 0;
  background: #eee;
}
</style>
