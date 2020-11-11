import React, { FC, useState } from "react";
import { FormContainer } from  './styles'

const externals = [
  {
    link:'https://www.linkedin.com/in/danstad/',
    img:'linkedin.png'
  },{
    link:'https://github.com/dstadz/',
    img:'github.png'
  },{
    link:'https://docs.google.com/document/d/1jUh-UOutPwEgQLuAgDGplY_aNtly6W5RUd2zIlLJI4E/edit?usp=sharing',
    img:'google-docs.png'
  },
]

const Contact = () => {
  const [status, setStatus] = useState('')

  const submitForm = (e) => {
    e.preventDefault();

    const form = e.target;
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
    <FormContainer>
      <h1> Say Hi to me!</h1>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/xknjlwwa"
        method="POST"
      >
        <label>Name</label>
        <input
          type="name"
          name="name"
          placeholder="Who are you?"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="How can I reply to you?"
        />
        <label>Message</label>
        <textarea
          type="textarea"
          name="message"
          placeholder="What do you want to tell me?"
        />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Send</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>

      <br/>

      <p>Also check me out on these cool sites:</p>

      <div>
        {externals.map( e => (
          <a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt={`${e.img} logo`} src={`https://img.icons8.com/nolan/64/${e.img}`}/>
          </a>
        ))}
      </div>
    </FormContainer>
  );
}
export default Contact
