package com.ydh.workoffice.board.controller;

import com.ydh.workoffice.board.dto.BoardResponse;
import com.ydh.workoffice.board.service.BoardService;
import com.ydh.workoffice.common.response.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/boards")
public class BoardController {

    private final BoardService boardService;

    // 1. 목록 반환
    @GetMapping
    public ApiResponse<List<BoardResponse>> getBoards() {
        return ApiResponse.success(boardService.getBoards());
    }



    // 2. 단독 게시물

    // 3. 게시물 생성
    @PostMapping
    public ApiResponse<BoardResponse>> createBoard() {
        return ApiResponse.success(boardService.createBoard());
    }

    // 4. 게시물 삭제 (본인만)
}
