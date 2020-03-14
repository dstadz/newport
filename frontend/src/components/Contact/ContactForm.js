
import React, {useState} from "react";
import * as x from './styles'

const ContactForm = () => {
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
    console.log(status, data)
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xknjlwwa"
      method="POST"
    >
      <x.Slot>
        <x.Label>Name:</x.Label>
        <x.Input type="name" name="name" placeholder="Who are you?"/>

        <x.Label>Email:</x.Label>
        <x.Input type="email" name="email" placeholder="How can I reach you? (email prefered)" />

        <x.Label>Message:</x.Label>
        <x.MSGBox type="textarea" name="message" placeholder="What do you want to tell me?"/>
      </x.Slot>

      {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
}
export default ContactForm