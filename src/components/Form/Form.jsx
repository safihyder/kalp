import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form">
          <span className="heading">Message</span>

          <div className="form-group">
            <input className="form-input" required type="email" />
            <label>Email</label>
          </div>

          <div className="form-group">
            <textarea className="form-input" required />
            <label>Message</label>
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
  background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(120deg, transparent 25%, #1cb0ff, #1cb0ff) border-box;
  border: 2px solid transparent;
  padding: 70px 50px;
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.heading {
  font-size: 35px;
  font-weight: 600;
}

.form-input {
  color: white;
  background: transparent;
  border: 1px solid #414141;
  border-radius: 5px;
  outline: none;
}
  input{
  padding: 12px;
  
  }
textarea{
  padding: 20px;
  
}

button {
  border-radius: 5px;
  padding: 6px;
  background: #ffffff14;
  color: #c7c5c5;
  border: 1px solid #414141;
}

button:hover {
  background: #212121;
  cursor: pointer;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #414141;
  position: relative;
}

.form-group label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  pointer-events: none;
  transition: 0.5s;
}

.form-group input:focus ~ label,
.form-group input:valid ~ label ,
.form-group textarea:focus ~ label,
.form-group textarea:valid ~ label {
  top: -16px;
  left: 0;
  background: #212121 padding-box;
  padding: 10px 0 0 0;
  color: #bdb8b8;
  font-size: 12px;
}

`;

export default Form;
