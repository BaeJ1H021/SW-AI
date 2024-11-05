import styled from "styled-components";

const IntroduceSection = () => {
  return (
    <Container>
      <Title>Git 학습 플랫폼 설계</Title>
      <Img src="images/demo.png" alt="데모 예시" />
      <List>
        <ListItem>
          <SectionTitle>Header</SectionTitle>
          <SubList>
            <SubListItem>웹 사이트의 로고를 포함하는 영역</SubListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <SectionTitle>Sidebar</SectionTitle>
          <SubList>
            <SubListItem>네비게이션 메뉴를 배치하는 영역</SubListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <SectionTitle>Main</SectionTitle>
          <SubList>
            <SubListItem>
              Intro: Git의 간단한 가이드를 제공하는 영역
            </SubListItem>
            <SubListItem>
              Quiz: 사용자가 그림과 문제 상황을 보고 CLI를 통해 문제를 풀어볼 수
              있는 영역
            </SubListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <SectionTitle>Chatbot</SectionTitle>
          <SubList>
            <SubListItem>
              사용자가 Git 관련 질문을 하고 답변을 받을 수 있는 영역
            </SubListItem>
          </SubList>
        </ListItem>
      </List>
    </Container>
  );
};

export default IntroduceSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding: 30px 100px;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #f9558b;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 27px;
    line-height: 36px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const List = styled.ul`
  list-style-type: none;
  margin-top: 100px;
  padding: 0px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;
`;

const SectionTitle = styled.span`
  font-weight: 700;
  font-size: 38px;
  display: block;
  margin-bottom: 6px;
  color: #ff7b5a;

  @media (max-width: 768px) {
    font-size: 27px;
  }
`;

const SubList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
`;

const SubListItem = styled.li`
  font-size: 22px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
