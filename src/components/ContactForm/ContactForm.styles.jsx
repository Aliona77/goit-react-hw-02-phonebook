import styled from '@emotion/styled/macro';

export const Label = styled.label`
display: flex;
`
// export const ContactForm = styled.form`
// backhround-color: #fff;
// padding: 24 px;

// & input{
//     display: block;
//     margin-bottom: 12px;
// }
// `
export const Input = styled.input`

  width: 300px;
  font-size: 22px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:focus{
        border: 2px solid #eee;
        outline: none;
    }
`
export const ButtonSubmit = styled.button`
  background-color: #ff6b0a;
  border: none;
  outline: none;
  padding: 8px 16px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
   &:hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
    background: #a4dada;
  }
  `
export const Span = styled.span`
 font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;`;