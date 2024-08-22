import styled from "styled-components";

export const Container = styled.div`
.carousel-item{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 40px;
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
}

 padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #5b3464;
  padding-bottom: 20px;
  position: relative;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
  margin-top: 40px;

  &::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: 56px;
  height: 4px;
  background-color: #5b3464;
  left: calc(50% -28px);
  }
`;

export const ContainerItems = styled.div`
 background: url('${props => props.imageUrl}');
 background-position: center;
 background-size: cover;
 border-radius: 30px;


 display: flex;
 align-items: center;
 padding: 20px 10px;
 width: 100%;
 height:200px;


 p{
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: bold;
  margin-top: 50px;
 }
`;



