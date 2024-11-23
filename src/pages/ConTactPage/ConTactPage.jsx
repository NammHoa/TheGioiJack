import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 2em;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 600px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4197ee;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ConTactPage = () => {
  return (
    <Container>
      <Title>Liên hệ với chúng tôi</Title>
      <Form>
        <Label htmlFor="name">Họ Tên</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="phone">Số điện thoại</Label>
        <Input type="phone" id="phone" name="phone" required />

        <Label htmlFor="message">Thông tin liên hệ</Label>
        <Textarea id="message" name="message" rows="5" required></Textarea>

        <Button type="submit">Gửi liên hệ</Button>
      </Form>
    </Container>
  );
};

export default ConTactPage;
