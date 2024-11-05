import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface AdviceFormProps {
  userId: string;
  handleOpenModal: () => void;
}

const AdviceForm = ({ userId, handleOpenModal }: AdviceFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    advice: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 유효성 검사
  const [isFormValid, setIsFormValid] = useState(false);

  // 이메일 유효성 검사 함수
  const validateEmail = (email: any) => {
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  // 데이터 전송 함수
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // 새로고침 방지
    const { email, advice } = formData;

    if (!validateEmail(email)) {
      alert("이메일이 유효하지 않아 알림을 드릴 수가 없습니다.");
      return;
    }

    const data = JSON.stringify({
      id: userId,
      email: email,
      advice: advice,
    });

    try {
      handleOpenModal();
      await axios.get(
        "https://script.google.com/macros/s/AKfycbxHACsdGTYF49EatA8G3DsqeuReiTTZDiFxVJehXhHo_JmZxWKXo_RxR4c3D3_s-kJE/exec" +
          "?action=insert&table=sheet2&data=" +
          data
      );
      setFormData({ email: "", advice: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    const { email, advice } = formData;
    // 모든 필드가 채워졌는지 확인
    if (email && advice) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <Container>
      <TextContainer>
        <MainHeading>
          서비스 런칭 소식을 가장 먼저 받아보세요! <br /> 아래에 이메일을 남겨
          주시면, 런칭과 함께 알림을 보내드리겠습니다.
        </MainHeading>
      </TextContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>더 나은 서비스를 위한 한마디!</FormTitle>
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="알림을 받을 이메일을 입력해 주세요."
          required
        />
        <TextArea
          name="advice"
          value={formData.advice}
          onChange={handleChange}
          placeholder="서비스에 대한 조언을 입력해 주세요."
          required
        />
        <SubmitButton
          type="submit"
          disabled={!isFormValid}
          $isFormValid={isFormValid}
        >
          문의하기
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default AdviceForm;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 100px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MainHeading = styled.p`
  font-size: 35px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 14px;
  color: #2f3236;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 36px;
    overflow-wrap: break-word;
    word-break: keep-all;
  }
`;

const FormContainer = styled.form`
  padding: 90px 60px;
  border-radius: 53px;
  max-width: 750px;
  width: 100%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 30px;
  }
`;

const FormTitle = styled.p`
  font-size: 37px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 50px;
  text-align: center;
  color: #585c61;

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 28px;
    color: #2f3236;
    margin-bottom: 20px;
  }
`;

const FormInput = styled.input`
  padding: 15px 0 15px 19px;
  margin-bottom: 15px;
  border: 1px solid #e0e6ec;
  border-radius: 12px;
  font-size: 18px;
  line-height: 28px;
  color: #2f3236;
  width: 100%;

  &::placeholder {
    color: #bec4cb;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
    padding: 8px 0 8px 11px;
    margin-bottom: 10px;
  }
`;

const TextArea = styled.textarea`
  padding: 15px 19px;
  border: 1px solid #e0e6ec;
  border-radius: 12px;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 15px;
  resize: vertical;
  height: 240px;

  &::placeholder {
    color: #bec4cb;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
    padding: 8px 0 8px 11px;
    height: 140px;
  }
`;

const SubmitButton = styled.button<{ $isFormValid: boolean }>`
  width: 240px;
  background-color: ${({ $isFormValid }) =>
    $isFormValid ? "#fd719f" : "#dee4ea"};
  color: white;
  padding: 16.5px 77.5px;
  border-radius: 38px;
  font-size: 21px;
  line-height: 26px;
  font-weight: 700;
  transition: background-color 0.3s;
  align-self: center;
  margin-top: 30px;

  cursor: ${({ $isFormValid }) => ($isFormValid ? "pointer" : "not-allowed")};

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    padding: 8px 32px;
    width: 120px;
    margin-top: 10px;
  }
`;
