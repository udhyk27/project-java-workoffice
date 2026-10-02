<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>일정</h2>
        <p>일정을 확인하고 관리합니다.</p>
      </div>

      <button class="primary-button">일정 등록</button>
    </div>

    <div class="calendar-header">
      <button>&lt;</button>
      <strong>2026년 9월</strong>
      <button>&gt;</button>
    </div>

    <div class="calendar">
      <div class="day-name">일</div>
      <div class="day-name">월</div>
      <div class="day-name">화</div>
      <div class="day-name">수</div>
      <div class="day-name">목</div>
      <div class="day-name">금</div>
      <div class="day-name">토</div>

      <div v-for="day in 30" :key="day" class="day">
        <span>{{ day }}</span>

        <div v-if="day === 28" class="event">개발팀 회의</div>

        <div v-if="day === 29" class="event">코드 리뷰</div>

        <div v-if="day === 30" class="event">프로젝트 회의</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1400px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

h2 {
  margin: 0 0 8px;
  font-size: 24px;
}

p {
  margin: 0;
  color: #777;
  font-size: 14px;
}

.primary-button {
  padding: 10px 16px;
  border: 0;
  border-radius: 6px;
  background: #222;
  color: white;
  cursor: pointer;
}

.calendar-header {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-bottom: 0;
}

.calendar-header button {
  border: 0;
  background: none;
  cursor: pointer;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: white;
  border: 1px solid #e5e7eb;
}

.day-name {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
  color: #666;
  font-size: 13px;
}

.day {
  min-height: 110px;
  padding: 10px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.event {
  margin-top: 12px;
  padding: 6px;
  border-radius: 4px;
  background: #f0f2f5;
  font-size: 12px;
}
</style>
