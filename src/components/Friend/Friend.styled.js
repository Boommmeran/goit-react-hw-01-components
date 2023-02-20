import styled from '@emotion/styled';

export const FriendWrap = styled.li`
  list-style: none;
  width: 250px;
  display: inline-flex;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 0;
  gap: 8px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.online) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#000';
    }
  }};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-weight: 700;
`;
