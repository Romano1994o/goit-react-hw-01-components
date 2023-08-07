import { styled } from 'styled-components';
import { StatListItem } from 'components/common/ListItem/ListItem';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsSection = styled.section`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 5px;
  width: 400px;
`;

export const Title = styled.h2`
font-size: 24px;
font-weight: 600;
text-transform: uppercase;
color: gray;
text-align: center;
`;

export const StatisticsLi = styled(StatListItem)`
  flex: 25% 0 1;
  gap: 5px;
  background-color: ${getRandomHexColor};
  
  span.label {
    font-weight: 700;
    font-size: 20px;
    color: #eee;
    
  }
  span.info {
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    color: #eee;
  }
`;
