<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>전자결재</h2>
        <p>결재 문서를 확인하고 관리합니다.</p>
      </div>

      <button class="primary-button">결재 작성</button>
    </div>

    <div class="tabs">
      <button class="active">결재 대기</button>
      <button>내가 작성한 문서</button>
      <button>완료된 문서</button>
    </div>

    <div class="panel">
      <table>
        <thead>
          <tr>
            <th>문서번호</th>
            <th>제목</th>
            <th>신청자</th>
            <th>상태</th>
            <th>작성일</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>10004</td>
            <td>연차 휴가 신청</td>
            <td>홍길동</td>
            <td><span class="status waiting">결재 대기</span></td>
            <td>2026-09-27</td>
          </tr>

          <tr>
            <td>10003</td>
            <td>개발 장비 구매 요청</td>
            <td>김민수</td>
            <td><span class="status waiting">결재 대기</span></td>
            <td>2026-09-26</td>
          </tr>

          <tr>
            <td>10002</td>
            <td>소프트웨어 구매 요청</td>
            <td>박철수</td>
            <td><span class="status approved">승인</span></td>
            <td>2026-09-25</td>
          </tr>

          <tr>
            <td>10001</td>
            <td>외근 신청</td>
            <td>홍길동</td>
            <td><span class="status rejected">반려</span></td>
            <td>2026-09-24</td>
          </tr>
        </tbody>
      </table>
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

.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.tabs button {
  padding: 10px 4px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;
  color: #777;
  cursor: pointer;
}

.tabs button.active {
  border-color: #222;
  color: #222;
  font-weight: 600;
}

.panel {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  text-align: left;
  font-size: 14px;
}

th {
  background: #fafafa;
  color: #666;
}

tr:last-child td {
  border-bottom: 0;
}

.status {
  font-size: 13px;
}

.waiting {
  color: #555;
}

.approved {
  color: #16803c;
}

.rejected {
  color: #c0392b;
}
</style>
