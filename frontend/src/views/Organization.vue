<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>조직도</h2>
        <p>부서별 구성원을 확인합니다.</p>
      </div>
    </div>

    <div class="departments">
      <div class="department">
        <h3>개발팀</h3>

        <div class="member">
          <strong>김민수</strong>
          <span>과장</span>
        </div>

        <div class="member">
          <strong>홍길동</strong>
          <span>대리</span>
        </div>
      </div>

      <div class="department">
        <h3>인사팀</h3>

        <div class="member">
          <strong>이영희</strong>
          <span>대리</span>
        </div>
      </div>

      <div class="department">
        <h3>경영지원팀</h3>

        <div class="member">
          <strong>박철수</strong>
          <span>부장</span>
        </div>
      </div>

      <div class="department">
        <h3>영업팀</h3>

        <div class="member">
          <strong>최지훈</strong>
          <span>사원</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1400px;
}

.page-header {
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

.departments {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.department {
  padding: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.department h3 {
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
}

.member {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
}

.member span {
  color: #777;
}
</style>
