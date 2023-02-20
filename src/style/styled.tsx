import styled from "styled-components";

export const display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiaryTitleBox = styled.div`
  //border: .0625rem solid black;
  height: 12.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DiaryTextbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
`;

export const DiaryOutBox = styled(display)`
  //border: .0625rem solid red;
  flex-direction: column;
`;

export const DiaryBox = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-between;
  border-radius: 1.25rem;
  padding: 20px;
  margin-top: 20px;
  min-width: 30%;
  color: ${(props) => props.theme.textColor};
`;

export const DiaryBoxButton = styled.div`
  //border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${(props) => props.theme.borderColor};
`;

export const DiaryDarkButtom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WriteDiary = styled(display)`
  //border: 1px solid black;
  height: 90vh;
  form {
    //border: .0625rem solid red;
    display: flex;
    flex-direction: column;
    padding: 6.25rem;
  }
  input {
    margin: 10px;
  }
`;

export const WriteDaiaryInputText = styled.input`
  padding: 1.25rem;
  width: 18.75rem;
  border-radius: 0.625rem;
  outline: none;
  border: 0;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const WriteDaiaryInputDate = styled.input`
  padding: 8px;
  border-radius: 0.3125rem;
  outline: none;
  border: 0;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const WriteDaiaryInputbody = styled.input`
  height: 9.375rem;
  outline: none;
  border-radius: 12px;
  border: 0;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const ModifyDiaryBox = styled(WriteDiary)``;

export const ModifyDiaryTitle = styled(WriteDaiaryInputText)`
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const ModifyDiarybody = styled(WriteDaiaryInputbody)`
  border: 1px solid ${(props) => props.theme.borderColor};
`;

export const DetailBox = styled(display)`
  height: 98vh;
`;

export const DetailText = styled.div`
  color: ${(props) => props.theme.textColor};
  width: 50%;
  max-width: 31.25rem;
`;

export const DetailTitle = styled.h1``;

export const DetailBody = styled.h2``;

export const DetailTitleBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DetailIdDateBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const LoginFormDiv = styled(display)`
  //border: 0.0625rem solid black;
  height: 90vh;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoginFormText = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
export const LoginIDInput = styled(WriteDaiaryInputText)``;

export const LoginPasswdInput = styled(WriteDaiaryInputText)`
  margin-top: 1.25rem;
`;

export const RegistorFormDiv = styled(display)`
  //border: 0.0625rem solid black;
  height: 90vh;
  flex-direction: column;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const RegistorFormText = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
export const RegistorIDInput = styled(WriteDaiaryInputText)``;

export const RegistorPasswdInput = styled(WriteDaiaryInputText)`
  margin-top: 1.25rem;
`;
