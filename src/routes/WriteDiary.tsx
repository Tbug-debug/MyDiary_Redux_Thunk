import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInputs from "../hooks/useInputs";
import { AppDispatch } from "../redux/config/configStore";
import { useDispatch } from "react-redux";
import { __getDiary } from "../redux/module/diarylLst";
import Button from "../components/Button";
import {
  WriteDiary,
  WriteDaiaryInputText,
  WriteDaiaryInputDate,
  WriteDaiaryInputbody,
} from "../style/styled";

import { __postDiary } from "../redux/module/post";
import isLogin from "../util/isLogin";

interface DataTyep {
  title: string;
  body: string;
  date: string;
  id: number;
}

function WriteTodo() {
  let [{ title, body, date }, setDiary, resetInput] = useInputs({
    title: "",
    body: "",
    date: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isLogin() === false) {
      alert("로그인 먼저 해주세요!");
      navigate("/login");
    }
  }, []);

  const sendDataToJson = async (data: DataTyep) => {
    await dispatch(__postDiary(data));
    await dispatch(__getDiary());
  };

  const submitValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title && !body && !date) {
      alert("날짜와 주제는 필수로 입력해야 합니다.");
    } else if (!title) {
      alert("날짜와 주제는 필수로 입력해야 합니다.");
    } else if (!date) {
      alert("날짜와 주제는 필수로 입력해야 합니다.");
    } else {
      sendDataToJson({ title, body, date, id: Date.now() });
      resetInput();
      navigate("/");
    }
  };

  return (
    <>
      <Button btn={() => navigate("/")}>뒤로가기</Button>
      <WriteDiary>
        <form onSubmit={submitValue}>
          <WriteDaiaryInputText
            onChange={setDiary}
            value={title}
            name="title"
            type="text"
            placeholder="주제를 입력하세요.."
          />
          <WriteDaiaryInputDate
            onChange={setDiary}
            value={date}
            name="date"
            type="date"
            placeholder="날짜를 입력하세요."
          />
          <WriteDaiaryInputbody
            onChange={setDiary}
            value={body}
            name="body"
            placeholder="내용을 입력하세요."
          />

          <Button>등록</Button>
        </form>
      </WriteDiary>
    </>
  );
}

export default WriteTodo;
