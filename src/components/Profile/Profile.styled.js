import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  border: 1px solid #eeeeee;
  width: 250px;
  padding-top: 25px;
  margin: 0 auto 30px;

  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.06em;
`;

export const Tag = styled.p`
  
  text-align: center;
  line-height: 1.87;
  letter-spacing: 0.03em;
`;

export const Location = styled.p`
  
  text-align: center;
  letter-spacing: 0.03em;
`;

export const Stats = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  background-color: rgb(248, 248, 238);
  justify-content: center;
`;

export const StatsItem = styled.li`
  padding: 15px;
  border: 1px solid #eeeeee;
  text-align: center;
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;