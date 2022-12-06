import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  gap: 1em;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  color: ${(props) => props.theme.helloColor};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 1.5em;
    flex-direction: row;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1em;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  color: ${(props) => props.theme.helloColor};
  padding: 1em;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    border-right: 1px solid ${(props) => props.theme.helloColor};
    width: 50%;
    height: 100%;
    font-size: 1.5em;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px 1em;
  width: 100%;
  height: 100%;
  gap: 10px;
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
`;

export const FormHeader = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  color: ${(props) => props.theme.helloColor};
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 1em;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
  cursor: pointer;
`;

export const LinkText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.helloColor};
`;

export const Input = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.helloColor};
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.helloColor};
`;

export const TextArea = styled.textarea`
  margin: 15px 0;
  font-size: 16px;
  height: 5em;
  padding: 10px;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.helloColor};
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
`;

export const SubmitInput = styled.input`
  border: 1px solid ${(props) => props.theme.helloColor};
  background: rgba(20, 20, 20, 0.6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: rgba(20, 20, 20, 0.8);
    padding: 10px 80px;
  }
`;