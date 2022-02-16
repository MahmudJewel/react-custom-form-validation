import React, { useState } from "react";
import '../assets/Design.css';
import EventHandling from "./EventHandling";


export default function Design() {
    const {handleChange, clickOnsubmit, values} = EventHandling();

  return (
    <form onSubmit={clickOnsubmit}>
    <div className="container d-flex justify-content-center form-bg py-5 mt-5">
      <div className="card mt-4 col-md-8 shadow card-style">
        
        <div className="card-title mt-3 ">
          <h2 className="text-success text-center">Login Form </h2>
        </div>
            
        <div className="card-body col-md-8 m-auto">
          <div className="mb-4">
            <h5 className="text-start">Username: </h5>
            <input
              className="form-control text-center"
              type="text"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-center"></p>
          <div className="mb-4">
            <h5 className="text-start">Email: </h5>
            <input
              className="form-control text-center"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-center"></p>
          <div className="mb-4">
            <h5 className="text-start">Password: </h5>
            <input
              className="form-control text-center"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger text-center"></p>
          <div className="text-center">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}
