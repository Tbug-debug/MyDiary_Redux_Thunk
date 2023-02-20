import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useCookies } from "react-cookie";
import isLogin from "../util/isLogin";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logining } from "../util/axioslogin";
import {
  LoginFormDiv,
  LoginFormText,
  LoginIDInput,
  LoginPasswdInput,
} from "../style/styled";

interface OnToSubmit {
  userId: string;
  userPasswd: string;
}

interface ResponseData {
  token: string;
}

function Login() {
  const { register, handleSubmit, reset } = useForm<OnToSubmit>();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [now] = useState<Date>(new Date());
  const [after10m] = useState<Date>(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin() === true) {
      alert("로그인을 이미 하셨습니다.");
      navigate("/");
    }
  }, []);

  const loginSub: SubmitHandler<OnToSubmit> = (data) => {
    // 로그인 POST
    const datas = {
      id: data.userId,
      password: data.userPasswd,
    };

    logining
      .post<ResponseData>("login", datas)
      .then((response) => {
        const { token } = response.data;
        after10m.setMinutes(now.getMinutes() + 1);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setCookie("accessJWTToken", token, { path: "/", expires: after10m });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.response.data.message));
    reset();
  };

  return (
    <LoginFormDiv>
      <LoginFormText>My Diary 로그인</LoginFormText>
      <form onSubmit={handleSubmit(loginSub)}>
        <LoginIDInput
          {...register("userId", { required: true })}
          placeholder="아이디"
        />
        <LoginPasswdInput
          {...register("userPasswd", { required: true })}
          type="password"
          placeholder="비밀번호"
        />
        <Button>로그인</Button>
        <Button btn={() => navigate("/registor")}>회원가입</Button>
      </form>
    </LoginFormDiv>
  );
}

export default Login;
