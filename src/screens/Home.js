import styled from "styled-components";
import Avatar from "components/Avartar";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { BiBookmark } from "react-icons/bi";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
  max-width: 650px;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Nickname = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedActionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FeedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FeedAction = styled.div`
width: 80px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin 30px;
`;
const FeedMark = styled.div`
  margin: 30px;
`;
const LikeContainer = styled.div`
  margin: 10px;
  margin-left: 30px;
  display: flex;
  font-size: 15px;
`;
const TextContainer = styled.div`
  margin: 10px;
  margin-left: 30px;
  margin-bottom: 50px;
  display: flex;
  font-size: 15px;
`;

function Home() {
  return (
    <div>
      <FeedContainer>
        <FeedHeader>
          <Avatar
            lg
            url="https://cdn.discordapp.com/attachments/1057626057227903036/1076009799117963326/D43C9E92-4290-42DF-8F31-0DB8C0F396D8.jpg"
          />
          <Nickname>Meoa</Nickname>
        </FeedHeader>
        <FeedPhoto src="https://cdn.discordapp.com/attachments/1057626057227903036/1076009799117963326/D43C9E92-4290-42DF-8F31-0DB8C0F396D8.jpg" />
        <FeedActionContainer>
          <FeedItem>
            <FeedAction>
              {true ? <FaHeart /> : <AiOutlineHeart />}
              <FaRegComment />
              <IoMdPaperPlane />
            </FeedAction>
            <FeedMark>
              <BiBookmark />
            </FeedMark>
          </FeedItem>
          <LikeContainer>snsn외에 여러명이 좋아요를 눌렀습니다</LikeContainer>
          <TextContainer>검은 고양이 네로네로</TextContainer>
        </FeedActionContainer>
      </FeedContainer>
    </div>
  );
}

export default Home;
