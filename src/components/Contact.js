import React, {useState} from "react";
import * as x from '../styles'
import { Section, Form } from  '../styles'



const Contact = () => {
  const [status, setStatus] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault();

    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else setStatus("ERROR");
    };

    xhr.send(data);
  }

  return (
    <Section>
      <Form
      onSubmit={submitForm}
      action="https://formspree.io/xknjlwwa"
      method="POST"
      >
        <label>Name</label>
        <input type="name" name="name" placeholder="Who are you?"/>

        <label>Email</label>
        <input type="email" name="email" placeholder="How can I reply to you?" />

        <label>Message</label>
        <textarea type="textarea" name="message" placeholder="What do you want to tell me?"/>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </Form>

      <br/>

      <p>Also check me out on these cool sites:</p>

      <div>
        <a href="https://www.linkedin.com/in/danstad/" target="_blank">
          <img src="https://img.icons8.com/nolan/64/linkedin.png"/>
        </a>

        <a href="https://github.com/dstadz/" target="_blank">
          <img src="https://img.icons8.com/nolan/64/github.png"/>
        </a>

        <a href='https://docs.google.com/document/d/1jUh-UOutPwEgQLuAgDGplY_aNtly6W5RUd2zIlLJI4E/edit?usp=sharing' target="_blank">
          <img src="https://img.icons8.com/nolan/64/google-docs.png"/>
        </a>
      </div>
    </Section>
  );
}
  export default Contact