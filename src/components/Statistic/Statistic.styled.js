import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 250px;
  margin: 0 auto 30px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const StatList = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 40px;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span`
  font-size: 14px;
  color: #fff;
`;

export const Persentage = styled.span`
  color: #fff;
`;
