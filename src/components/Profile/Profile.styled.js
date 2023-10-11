import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 5px;
  padding-top: 20px;
`;

export const DescrWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const Photo = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 102px;
  border: 1px solid grey;
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Quantity = styled.span`
  font-size: 20px;
`
