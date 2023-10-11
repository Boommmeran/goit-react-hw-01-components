import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 15px;
  background-color: white;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
