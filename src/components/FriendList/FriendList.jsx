import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendsCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 300px;
`;
const Status = styled.span`
  border-radius: 50%;

  display: block;

  width: 30px;
  height: 30px;
`;
const FriendItem = styled.li`
  display: flex;
  align-items: center;

  gap: 20px;

  padding: 5px 10px;

  border: 2px solid black;
  border-radius: 4px;
`;

const FriendIcon = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
`;
const FriendName = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

export const FriendList = ({ friends }) => {
  return (
    <FriendsCards>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <Status
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></Status>
          <FriendIcon src={avatar} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendsCards>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
