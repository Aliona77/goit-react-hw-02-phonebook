import styled from '@emotion/styled/macro';

export const Label = styled.label`
font-size:18px;
font-weight:500;
justify-content:center;
padding-bottom: 10px;
margin:0;
`

export const Input = styled.input`
  display: flex;
  padding: 6px;
  margin-bottom: 20px;
  border-radius:5px;
  min-width: 350px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:focus{
        border: 2px solid #eee;
        outline: none;
    }
`
export const ButtonSubmit = styled.button`
  background-color: #fff;
  outline: none;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
   border-radius:5px;
   border: 2px solid #eee;
   &:hover {
    box-shadow: 0 0 20px rgba(50, 50, 93, 0.25);
    background: blue;
  }
  `
export const Span = styled.span`
 font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;`;