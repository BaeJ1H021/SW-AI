import styled from "styled-components";

const IntroduceSection = () => {
  return (
    <Container>
      <Title>Git 학습 플랫폼 설계</Title>
      <Description>
        실무에서 자주 발생하는 Git 상황을 학습할 수 있도록 설계된 플랫폼입니다.
        사용자는 단계별로 문제를 해결하며 Git의 핵심 개념을 습득하고, 실무에
        적용할 수 있는 능력을 기를 수 있습니다.
      </Description>
      <Img src="images/demo.png" alt="데모 예시" />
      <List>
        <ListItem>
          <SectionTitle>Main</SectionTitle>
          <SubList>
            <SubListItem>
              사용자는 Git 히스토리 그래프와 문제 상황을 참고하여, CLI를 통해
              문제를 해결하면서 Git 실력을 향상시킬 수 있습니다.
            </SubListItem>
          </SubList>
        </ListItem>
        <ListItem>
          <SectionTitle>Chatbot</SectionTitle>
          <SubList>
            <SubListItem>
              Chatbot을 통해 Git 관련 질문에 대한 실시간 도움을 받을 수 있어,
              학습 중 어려운 부분을 즉시 해결할 수 있습니다.
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

const Description = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 2rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 14px;
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
