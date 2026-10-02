<script setup>
import { onMounted, ref } from 'vue'
import { getBoards } from '@/api/board'

const boards = ref([])

const loadBoards = async () => {
  const { data } = await getBoards()
  boards.value = data
}

onMounted(loadBoards)
</script>

<template>
  <div class="page">
    <div class="page-header">
      <div>
        <h2>게시판</h2>
        <p>사내 게시글을 확인합니다.</p>
      </div>

      <button class="primary-button">글쓰기</button>
    </div>

    <div class="search">
      <select>
        <option>전체</option>
        <option>제목</option>
        <option>내용</option>
      </select>

      <input type="text" placeholder="검색어를 입력하세요" />

      <button>검색</button>
    </div>

    <div class="panel">
      <table>
        <thead>
          <tr>
            <th width="80">번호</th>
            <th>제목</th>
            <th width="120">작성자</th>
            <th width="120">조회수</th>
            <th width="140">작성일</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="board in boards" :key="board.id">
            <td>{{ board.id }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.author }}</td>
            <td>{{ board.views }}</td>
            <td>{{ board.createdAt }}</td>
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

.search select,
.search input {
  height: 38px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.search button {
  padding: 0 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
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
