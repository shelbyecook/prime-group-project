import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class NodeMailer extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: '/api/nodemailer/mail',
      data: {
        subject: subject,
        toEmail: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NodeMailer);
