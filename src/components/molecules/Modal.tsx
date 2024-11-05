import styled from "styled-components";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CheckIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M26 48.9104L32.4171 42.5463L45.2497 55.2731L67.7079 33L74.125 39.3642L45.2512 68L26 48.9104Z"
              fill="#fd719f"
            />
            <circle cx="50" cy="50" r="46" stroke="#fd719f" strokeWidth="8" />
          </svg>
        </CheckIcon>
        <PopupTitle>감사합니다</PopupTitle>
        <PopupText>
          여러분의 소중한 조언을 통해 더 나은 서비스를 만들어가겠습니다.
        </PopupText>
        <PopupText>
          보내주신 의견은 저희에게 큰 도움이 되며, 서비스 개선에 적극 반영할
          예정입니다.
        </PopupText>
        <PopupText>
          추가로 궁금한 점이나 더 나누고 싶은 의견이 있으시면 언제든지
          연락주세요.
        </PopupText>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </PopupContent>
    </PopupContainer>
  );
};

export default Modal;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 60px;
  border-radius: 80px;
  text-align: center;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    /* 모바일 환경 (좁은 화면) */
    max-width: 300px;
    padding: 22px;
    border-radius: 25px;
  }
`;

const CheckIcon = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  svg {
    width: 100px;
    height: 100px;

    @media (max-width: 768px) {
      /* 모바일 환경 (좁은 화면)에서 크기 줄이기 */
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 768px) {
    /* 모바일 환경 (좁은 화면) */
    margin-bottom: 12px;
  }
`;

const PopupTitle = styled.p`
  font-size: 40px;
  font-weight: 800;
  color: #111;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    /* 모바일 환경 (좁은 화면) */
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const PopupText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;

  strong {
    font-weight: 700; // strong 태그에 굵은 폰트 적용
  }

  @media (max-width: 768px) {
    /* 모바일 환경 (좁은 화면) */
    font-size: 8px;
  }
`;

const CloseButton = styled.button`
  width: 350px;
  margin-top: 60px;
  padding: 10px 0px;
  background-color: #fd719f;
  border: 3px solid #fd719f;
  color: white;
  font-size: 30px;
  font-weight: 600;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: white;
    color: #fd719f;
  }

  @media (max-width: 768px) {
    /* 모바일 환경 (좁은 화면) */
    padding: 5px 0px;
    width: 130px;
    margin-top: 20px;
    font-size: 12px;
  }
`;
