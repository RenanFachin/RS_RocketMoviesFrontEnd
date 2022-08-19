import styled from "styled-components";
import backgroundIMG from '../../assets/BackgroundImg.png'

export const Container = styled.form`
    height: 100vh;
    align-items: stretch;
    display: flex;
`;

export const Form = styled.form`
padding: 0 136px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
text-align: left;
>h1{
  font-size: 48px;
  color: ${({ theme }) => theme.COLORS.PINK};
}
>h2{
  font-size: 24px;
  margin: 48px 0;
  
}
>p{
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
}
>a{
  margin-top: 42px;
  color: ${({ theme }) => theme.COLORS.PINK};
  justify-content: center;
  align-items: center;
  display: flex;
};
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundIMG}) no-repeat center center;
    background-size: cover;
`;