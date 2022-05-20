import styled from "styled-components";
import { Wrapper } from "../../GlobalStyles";
import { customMedia } from "../../GlobalStyles";

export const ContactWrapper = styled(Wrapper)`
  background-color: ${({theme}) => theme.colors.Background};
  padding: 80px 0;
  min-height: calc(100vh - ${({ theme }) => theme.heights.Footer} - ${({ theme }) => theme.heights.Header});
  `
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.Headline};
  border-bottom: solid 1px ${({ theme }) => theme.colors.Headline};
  display: block;
  width: fit-content;
  margin: 0 auto;
  `
export const Form = styled.form`
  /* border: solid yellow; */
  margin-top: 20px;
  font-size: 1.0rem;
`
export const FormItem = styled.div`
  /* border: solid yellow; */
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;

  ${customMedia.lessThan('large')`
    flex-direction: column;
  `}
`
export const Label = styled.label`
  /* border: solid yellow; */
  font-size: 1.2rem;
  padding-top: 10px;

  ${customMedia.between('medium', 'large')`
    padding-bottom: 10px;
    width: 60%;
    margin: 0 auto;
  `}
  ${customMedia.lessThan('medium')`
    padding-bottom: 10px;
    width: 80%;
    margin: 0 auto;
  `}
`
export const InputAreaWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.SubBackground};
  padding: 9px;
  width: 60%;

  ${customMedia.between('medium', 'large')`
    width: 60%;
    margin: 0 auto;
  `}
  ${customMedia.lessThan('medium')`
    width: 80%;
    margin: 0 auto;
  `}
`
export const Input = styled.input`
  /* border: solid yellow; */
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Headline};
  border: none;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`
export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.Headline};
  border: none;
  font-size: 1.5rem;
  resize: none;
  &:focus {
    outline: none;
  }
`
export const ButtonItem = styled.div`
  /* border: solid yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SubmitButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 12px 50px;
  font-size: 1.5rem;
  border: solid 1px ${({ theme }) => theme.colors.SubBackground};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.SubBackground};
  color: ${({ theme }) => theme.colors.Headline};
  &:hover {
    transition: 0.1s ease-in;
    background-color: ${({ theme }) => theme.colors.Primary};
    color: ${({ theme }) => theme.colors.Headline};
  }
`