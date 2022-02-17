import React, { useState } from "react";
import "../assets/Design.css";
import EventHandling from "./EventHandling";


const Design = ({submitForm}) => {
  const { handleChange, clickOnsubmit, values, errors } = EventHandling(
    submitForm,
  );

  return (
    <form onSubmit={clickOnsubmit}>
      <div className="container d-flex justify-content-center py-5">
        <div className="card mt-4 col-md-8 shadow card-style">
          <div className="card-title mt-3 ">
            <h2 className="text-success text-center">Sign-up Form </h2>
          </div>

          <div className="card-body col-md-8 m-auto">

          <div className="mb-4">
              <h5 className="text-start">First name: </h5>
              <input
                className="form-control text-center"
                type="text"
                placeholder="First name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <p className="text-danger text-center">{errors.first_name}</p>
              )}
            </div>

            <div className="mb-4">
              <h5 className="text-start">Last name: </h5>
              <input
                className="form-control text-center"
                type="text"
                placeholder="last_name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <p className="text-danger text-center">{errors.last_name}</p>
              )}
            </div>

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
              {errors.username && (
                <p className="text-danger text-center">{errors.username}</p>
              )}
            </div>

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
              {errors.email && (
                <p className="text-danger text-center">{errors.email}</p>
              )}
            </div>

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
              {errors.password && (
                <p className="text-danger text-center">{errors.password}</p>
              )}
            </div>

            <div className="mb-4">
              <h5 className="text-start">Password confirmation: </h5>
              <input
                className="form-control text-center"
                type="password"
                placeholder="Re-type password"
                name="password2"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && (
                <p className="text-danger text-center">{errors.password2}</p>
              )}
            </div>
            
            <div className="text-center">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Design;
