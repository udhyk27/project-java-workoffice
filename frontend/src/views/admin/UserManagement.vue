<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>사원 관리</h2>
        <p>사원 정보를 관리합니다.</p>
      </div>

      <button class="primary-button">사원 등록</button>
    </div>

    <div class="search">
      <input type="text" placeholder="이름 또는 이메일 검색" />
      <button>검색</button>
    </div>

    <div class="panel">
      <table>
        <thead>
          <tr>
            <th>사원 ID</th>
            <th>이름</th>
            <th>이메일</th>
            <th>부서</th>
            <th>직급</th>
            <th>권한</th>
            <th>상태</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>홍길동</td>
            <td>hong@workoffice.com</td>
            <td>개발팀</td>
            <td>대리</td>
            <td>USER</td>
            <td>정상</td>
          </tr>

          <tr>
            <td>2</td>
            <td>김민수</td>
            <td>kim@workoffice.com</td>
            <td>개발팀</td>
            <td>과장</td>
            <td>USER</td>
            <td>정상</td>
          </tr>

          <tr>
            <td>3</td>
            <td>이영희</td>
            <td>lee@workoffice.com</td>
            <td>인사팀</td>
            <td>대리</td>
            <td>USER</td>
            <td>정상</td>
          </tr>

          <tr>
            <td>4</td>
            <td>박철수</td>
            <td>park@workoffice.com</td>
            <td>경영지원팀</td>
            <td>부장</td>
            <td>ADMIN</td>
            <td>정상</td>
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

.search {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 16px;
}

.search input {
  width: 250px;
  height: 38px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.search button {
  padding: 0 16px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 5px;
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
