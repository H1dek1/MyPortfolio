import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const CardWrapper = styled.div`
  /* border: solid yellow; */
  width: 300px;
  height: 300px;
  margin: 20px 20px;
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.SubBackground};
  padding-bottom: 20px;
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    object-position: center top;
  }
  `
export const TextArea = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
`
export const Title = styled.h3`
  /* border: solid yellow; */
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.Headline};
`
export const LinkArea = styled.div`
  /* border: solid yellow; */
  /* padding: 0 20px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.Paragraph};
`
export const ViewButton = styled.a`
  /* border: solid yellow; */
  text-decoration: none;
  display: flex;
  height: 42px;
  width: 80px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.colors.Primary}; */
  color: ${({ theme }) => theme.colors.Paragraph};
  border: solid 2px ${({ theme }) => theme.colors.Paragraph};
  p {
    display: block;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.Primary};
    border: solid 2px ${({ theme }) => theme.colors.Primary};
    transition: all 0.3s ease;
  }
`
export const LinkWrapper = styled.a`
  text-decoration: none;
  display: block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.Paragraph};
  &:hover {
    color: ${({ theme }) => theme.colors.Primary};
    transition: all 0.3s ease;
  }
`
export const GithubLink = styled(FaGithub)`
  display: block;
`