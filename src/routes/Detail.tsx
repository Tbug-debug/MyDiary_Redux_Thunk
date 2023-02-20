import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RooteState } from "../redux/config/configStore";
import { __getDiary } from "../redux/module/diarylLst";
import {
  DetailBox,
  DetailText,
  DetailTitle,
  DetailBody,
  DetailIdDateBox,
  DetailTitleBodyBox,
} from "../style/styled";
import Button from "../components/Button";
import isLogin from "../util/isLogin";

function Detail() {
  const { id } = useParams();
  const diary = useSelector((sate: RooteState) => sate.diarylist.diary);
  const diarylist = diary.find((toDo) => toDo.id === parseInt(id ?? ""));
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getDiary());
  }, [dispatch]);

  return (
    <>
      <Button btn={() => navigate("/")}>뒤로가기</Button>
      <DetailBox>
        <DetailText>
          <DetailTitleBodyBox>
            <DetailTitle>주제: {diarylist?.title}</DetailTitle>
            <DetailBody>내용: {diarylist?.body}</DetailBody>
          </DetailTitleBodyBox>
          <DetailIdDateBox>
            <h4>날짜: {diarylist?.date}</h4>
            <h4>유저 ID: {diarylist?.id}</h4>
          </DetailIdDateBox>
        </DetailText>
      </DetailBox>
    </>
  );
}

export default Detail;
