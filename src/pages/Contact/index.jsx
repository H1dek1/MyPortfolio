import React from 'react'
import {
  ContactWrapper,
  Title,
  Form,
  FormItem,
  Label,
  Input,
  InputAreaWrapper,
  Textarea,
  ButtonItem,
  SubmitButton,
} from './element'
import { Head } from '../../components'
import { Container } from '../../GlobalStyles'

function Contact() {
  return (
    <ContactWrapper>
      <Head title='Contact' />
      <Container>
        <Title>Contact Form</Title>
        <Form>
          <FormItem>
            <Label htmlFor='name'>NAME</Label>
            <InputAreaWrapper>
              <Input type="text" id='name'></Input>
            </InputAreaWrapper>
          </FormItem>
          <FormItem>
            <Label htmlFor='email'>E-MAIL</Label>
            <InputAreaWrapper>
              <Input type="text" id='email'></Input>
            </InputAreaWrapper>
          </FormItem>
          <FormItem>
            <Label htmlFor='title'>TITLE</Label>
              <InputAreaWrapper>
            <Input type="text" id='title'></Input>
            </InputAreaWrapper>
          </FormItem>
          <FormItem>
            <Label htmlFor='content'>CONTENT</Label>
            <InputAreaWrapper>
              <Textarea id='content'></Textarea>
            </InputAreaWrapper>
          </FormItem>
          <ButtonItem>
           <SubmitButton type='submit'>
              Submit
            </SubmitButton>
          </ButtonItem>
        </Form>
      </Container>
    </ContactWrapper>
  )
}

export default Contact