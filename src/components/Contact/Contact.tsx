import Link from "next/link";
import { FC, useRef } from "react";
import { Github } from "../Icons/Github";
import { Linkedin } from "../Icons/Linkedin";
import { Resume } from "../Icons/Resume";
import {
  Contact,
  FormContainer,
  FormHeader,
  Input,
  Label,
  LinkContainer,
  LinksContainer,
  LinkText,
  SubmitInput,
  TextArea,
} from "./styles";
import emailjs from "@emailjs/browser";

const ContactPage: FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0jzchk",
        "template_8oy0o3p",
        e.currentTarget,
        "-B53QVHeO174iDawd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <Contact>
      <LinksContainer>
        <Link
          href='https://linkedin.com/in/yasincandev'
          target='_blank'
          style={{
            display: "flex",

            alignItems: "center",
            gap: "0px 1em",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <LinkContainer>
            <Linkedin style={{ width: "2.5rem", height: "2.5rem" }} />
            <LinkText>Connect with me on LinkedIn</LinkText>
          </LinkContainer>
        </Link>
        <Link
          style={{
            display: "flex",

            alignItems: "center",
            gap: "0px 1em",
            width: "100%",
            cursor: "pointer",
          }}
          href='https://github.com/yasincandev'
          target='_blank'
        >
          <LinkContainer>
            <Github style={{ width: "2.5rem", height: "2.5rem" }} />
            <LinkText>Check out my Github</LinkText>
          </LinkContainer>
        </Link>
        <Link
          style={{
            display: "flex",

            alignItems: "center",
            gap: "0px 1em",
            width: "100%",
            cursor: "pointer",
          }}
          href='https://drive.google.com/file/d/1qAf-7f6HPLbHbzNaF6fK-W9xlC2GOjfz/view'
          target='_blank'
        >
          <LinkContainer>
            <Resume style={{ width: "2.5rem", height: "2.5rem" }} />
            <LinkText>Check out my Resume</LinkText>
          </LinkContainer>
        </Link>
      </LinksContainer>
      <FormContainer onSubmit={sendEmail}>
        <FormHeader>Get In Touch</FormHeader>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' name='name' />
        <Label htmlFor='email'>Email</Label>
        <Input type='email' name='email' />
        <Label htmlFor='message'>What is your Message?</Label>
        <TextArea name='message' />
        <SubmitInput type='submit' value='Send' />
      </FormContainer>
    </Contact>
  );
};

export default ContactPage;