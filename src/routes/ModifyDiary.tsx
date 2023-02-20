import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import useInputs from "../hooks/useInputs";
import { AppDispatch, RooteState } from "../redux/config/configStore";
import { __getDiary } from "../redux/module/diarylLst";
import { __modifyDiary } from "../redux/module/modify";
import {
  ModifyDiaryBox,
  ModifyDiarybody,
  ModifyDiaryTitle,
} from "../style/styled";
import isLogin from "../util/isLogin";

interface DataTyep {
  title: string;
  body: string;
  date: string;
  id: number;
}

function ModifyDiary() {
  const [{ title, body }, setDiary] = useInputs({
    title: "",
    body: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const diary = useSelector((sate: RooteState) => sate.diarylist.diary);
  const dispatch = useDispatch<AppDispatch>();

  const submitValue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const diaryToEdit = diary.find((d) => d.id === Number(id));
    if (!diaryToEdit) return;
    if (!title && !body) return;
    const updatedData: DataTyep = {
      id: diaryToEdit.id,
      title: title || diaryToEdit.title,
      body: body || diaryToEdit.body,
      date: diaryToEdit.date,
    };
    await dispatch(__modifyDiary({ modiform: updatedData, id: Number(id) }));
    dispatch(__getDiary());
    navigate("/");
  };

  return (
    <>
      <Button btn={() => navigate("/")}>뒤로가기</Button>
      <ModifyDiaryBox>
        <form onSubmit={submitValue}>
          <ModifyDiaryTitle
            onChange={setDiary}
            value={title}
            name="title"
            type="text"
            placeholder="수정할 제목을 입력하세요."
          />
          <ModifyDiarybody
            onChange={setDiary}
            value={body}
            name="body"
            placeholder="수정할 내용을 입력하세요."
          />
          <Button>수정</Button>
        </form>
      </ModifyDiaryBox>
    </>
  );
}

export default ModifyDiary;
