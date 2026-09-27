<template>
  <div class="dashboard">
    <!-- 페이지 제목 -->
    <div class="page-title">
      <h2>대시보드</h2>
      <p>안녕하세요, 홍길동님.</p>
    </div>

    <!-- 요약 -->
    <section class="summary">
      <div class="card">
        <span>오늘 일정</span>
        <strong>3</strong>
        <small>건</small>
      </div>

      <div class="card">
        <span>결재 대기</span>
        <strong>2</strong>
        <small>건</small>
      </div>

      <div class="card">
        <span>읽지 않은 알림</span>
        <strong>5</strong>
        <small>건</small>
      </div>
    </section>

    <!-- 상세 정보 -->
    <section class="content-grid">
      <!-- 오늘의 일정 -->
      <div class="panel">
        <div class="panel-header">
          <h3>오늘의 일정</h3>
          <button>더보기</button>
        </div>

        <div class="list">
          <div class="list-item">
            <span>09:00</span>
            <p>개발팀 주간 회의</p>
          </div>

          <div class="list-item">
            <span>14:00</span>
            <p>프로젝트 진행 회의</p>
          </div>

          <div class="list-item">
            <span>16:00</span>
            <p>코드 리뷰</p>
          </div>
        </div>
      </div>

      <!-- 결재 대기 -->
      <div class="panel">
        <div class="panel-header">
          <h3>결재 대기</h3>
          <button>더보기</button>
        </div>

        <div class="list">
          <div class="list-item">
            <span>휴가</span>
            <p>연차 휴가 신청</p>
          </div>

          <div class="list-item">
            <span>지출</span>
            <p>개발 장비 구매 요청</p>
          </div>
        </div>
      </div>

      <!-- 공지사항 -->
      <div class="panel">
        <div class="panel-header">
          <h3>공지사항</h3>
          <button>더보기</button>
        </div>

        <div class="list">
          <div class="list-item">
            <span>09.27</span>
            <p>추석 연휴 휴무 안내</p>
          </div>

          <div class="list-item">
            <span>09.25</span>
            <p>사내 시스템 점검 안내</p>
          </div>

          <div class="list-item">
            <span>09.23</span>
            <p>그룹웨어 이용 안내</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1400px;
}

.page-title {
  margin-bottom: 24px;
}

.page-title h2 {
  margin: 0 0 8px;
  font-size: 24px;
}

.page-title p {
  margin: 0;
  color: #777;
  font-size: 14px;
}

/* 요약 카드 */

.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.card {
  padding: 24px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.card span {
  display: block;
  margin-bottom: 12px;
  color: #666;
  font-size: 14px;
}

.card strong {
  font-size: 28px;
}

.card small {
  margin-left: 4px;
  color: #777;
}

/* 패널 */

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.panel {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #eee;
}

.panel-header h3 {
  margin: 0;
  font-size: 16px;
}

.panel-header button {
  border: 0;
  background: none;
  color: #666;
  cursor: pointer;
}

.list-item {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 14px;
}

.list-item:last-child {
  border-bottom: 0;
}

.list-item span {
  width: 50px;
  flex-shrink: 0;
  color: #888;
}

.list-item p {
  margin: 0;
}
</style>
