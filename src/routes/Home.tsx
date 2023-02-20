import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RooteState, AppDispatch } from "../redux/config/configStore";
import {
  DiaryTitleBox,
  DiaryBox,
  DiaryOutBox,
  DiaryTextbox,
  DiaryDarkButtom,
  DiaryBoxButton,
} from "../style/styled";
import { useDispatch, useSelector } from "react-redux";
import { __getDiary } from "../redux/module/diarylLst";
import { move } from "../redux/module/dark";
import Button from "../components/Button";
import { __deleteDiary } from "../redux/module/delete";
import isLogin from "../util/isLogin";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { diary, isLoading, error } = useSelector(
    (sate: RooteState) => sate.diarylist
  );
  const [isDark, setIsDark] = useState(false);
  const darkLight = useSelector((state: RooteState) => state.darklight);

  const loginChcek = () => {
    if (isLogin() === false) {
      alert("로그인 먼저 해주세요!");
      navigate("/login");
    }
  };

  useEffect(() => {
    loginChcek();
    dispatch(__getDiary());
  }, []);

  const onCLickDelete = async (id: number) => {
    loginChcek();
    await dispatch(__deleteDiary(id));
    await dispatch(__getDiary());
  };

  const clicKBtn = () => {
    setIsDark(!isDark);
    dispatch(move(isDark));
  };

  if (isLoading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <span>{error.message}</span>
      </div>
    );
  }

  return (
    <>
      <DiaryDarkButtom>
        <Button btn={() => clicKBtn()}>
          {darkLight ? "라이트모드" : "다크모드"}
        </Button>
      </DiaryDarkButtom>
      <DiaryTitleBox>
        <DiaryTextbox>
          <h1>나만의 일기장</h1>
          <Button btn={() => navigate("/WriteTodo")}>일기장 작성하기</Button>
        </DiaryTextbox>
      </DiaryTitleBox>
      <DiaryOutBox>
        {diary?.map((a) => {
          return (
            <DiaryBox key={a.id}>
              <Link to={`/Detail/${a.id}`}>
                <h2>주제: {a.title}</h2>
                <h4>날짜: {a.date}</h4>
                <h5>작성자 ID: {a.id}</h5>
              </Link>
              <DiaryBoxButton>
                <Button btn={() => navigate(`/${a.id}`)}>수정</Button>
                <Button btn={() => onCLickDelete(a.id)}>삭제</Button>
              </DiaryBoxButton>
            </DiaryBox>
          );
        })}
      </DiaryOutBox>
    </>
  );
}

export default Home;
