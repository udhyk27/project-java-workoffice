<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>부서 관리</h2>
        <p>회사 부서를 관리합니다.</p>
      </div>

      <button class="primary-button">부서 등록</button>
    </div>

    <div class="panel">
      <table>
        <thead>
          <tr>
            <th>부서 ID</th>
            <th>부서명</th>
            <th>사원 수</th>
            <th>생성일</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>개발팀</td>
            <td>2명</td>
            <td>2026-09-20</td>
          </tr>

          <tr>
            <td>2</td>
            <td>인사팀</td>
            <td>1명</td>
            <td>2026-09-20</td>
          </tr>

          <tr>
            <td>3</td>
            <td>경영지원팀</td>
            <td>1명</td>
            <td>2026-09-20</td>
          </tr>

          <tr>
            <td>4</td>
            <td>영업팀</td>
            <td>1명</td>
            <td>2026-09-20</td>
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
</style>
