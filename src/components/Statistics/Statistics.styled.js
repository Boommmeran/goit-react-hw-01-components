import styled from '@emotion/styled';
import { getRandomColor } from 'helpers/getRandomBgColor'

export const StatSection = styled.section`
  width: 400px;
  text-align: center;
  margin-top: 20px;
`;

export const StatTitle = styled.h2`
  font-size: 35px;
  padding: 30px 0;
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: flex;
`

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  font-size: medium;
  padding: 10px;
  font-size: 30px;
  width: 65px;
  color: #fff;
  gap: 8px;
  background-color: ${() => { return `#${getRandomColor()}`}};
`
export const Label = styled.span`
  font-size: 16px;
`;

export const Persent = styled.span`
  font-size: 24px;
`
