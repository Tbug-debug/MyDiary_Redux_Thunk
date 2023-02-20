import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  RegistorFormDiv,
  RegistorFormText,
  RegistorIDInput,
  RegistorPasswdInput,
} from "../style/styled";
import { logining } from "../util/axioslogin";
import isLogin from "../util/isLogin";

interface OnToSubmit {
  id: string;
  passwd: string;
}

interface ResponseData {
  token: string;
}

function Reigistor() {
  const { register, handleSubmit, reset } = useForm<OnToSubmit>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin() === true) {
      alert("로그인을 이미 하셨습니다.");
      navigate("/");
    }
  }, []);

  const onResigseter: SubmitHandler<OnToSubmit> = (data) => {
    // 회원가입 POST
    const datas = {
      id: data.id,
      password: data.passwd,
    };
    logining
      .post<ResponseData>("register", datas)
      .then(() => {
        alert("회원가입 완료!");
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    reset();
  };

  return (
    <RegistorFormDiv>
      <RegistorFormText>My Diary 회원가입</RegistorFormText>
      <form onSubmit={handleSubmit(onResigseter)}>
        <RegistorIDInput
          {...register("id", { required: true })}
          placeholder="아이디"
        />
        <RegistorPasswdInput
          {...register("passwd", { required: true })}
          placeholder="비밀번호"
        />
        <Button>회원가입</Button>
        <Button btn={() => navigate("/login")}>로그인</Button>
      </form>
    </RegistorFormDiv>
  );
}

export default Reigistor;
