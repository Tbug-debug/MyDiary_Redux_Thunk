import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import useInputs from "../hooks/useInputs";
import { AppDispatch, RooteState } from "../redux/config/configStore";
import { __getDiary } from "../redux/module/diarylLst";
import {
  ModifyDiaryBox,
  ModifyDiarybody,
  ModifyDiaryTitle,
} from "../style/styled";
import { acuxios } from "../util/axiosbase";

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

  const sendDataToJson = async (data: DataTyep) => {
    const currentDate = diary.find((d) => d.id === Number(id))?.date || "";
    const updatedData: DataTyep = {
      ...data,
      date: currentDate,
    };
    acuxios.put(`https://mydiaryt.herokuapp.com/list/${id}`, updatedData);
    dispatch(__getDiary());
  };

  function submitValue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const diaryToEdit = diary.find((d) => d.id === Number(id));
    if (!diaryToEdit) return;
    diary.map((_, i) => {
      if (!title && !body) {
        return;
      } else if (title && body) {
        const updatedData: DataTyep = {
          id: diary[i].id,
          title: title,
          body: body,
          date: diary[i].date,
        };
        sendDataToJson(updatedData);
        navigate("/");
      } else {
        const updatedData: DataTyep = {
          id: diaryToEdit.id,
          title: title || diaryToEdit.title,
          body: body || diaryToEdit.body,
          date: diary[i].date,
        };
        sendDataToJson(updatedData);
        navigate("/");
      }
      return null;
    });
  }

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
