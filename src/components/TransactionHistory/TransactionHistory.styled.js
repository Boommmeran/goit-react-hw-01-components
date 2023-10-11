import styled from '@emotion/styled';

export const Table = styled.table`
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
  width: 400px;
  margin-bottom: 20px;
	border-collapse: collapse; 
`;

export const Title = styled.th`
  font-weight: bold;
	padding: 5px;
  color: white;
	background-color: #00bcd5;
	border: 1px solid #dddddd;
`;

export const TableRow = styled.tr`
  background-color: white;
  :nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`

export const TableData = styled.td`
  padding: 5px 10px;
	border: 1px solid #eee;
`;