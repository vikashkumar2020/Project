import { useForm } from "react-hook-form";
import React from "react";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Gender:</label>
              <select className={`form-control ${errors.gender && "invalid"}`}
              {...register("gender", {
                required: "gender is Required",})}
              onKeyUp={() => {
                trigger("gender");
              }}>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
                {errors.gender && (
                <small className="text-danger">{errors.gender.message}</small>
              )}
              </select>
            </div>
            <div className="form-group">
              <label className="col-form-label">Date of Birth:</label>
              <input
                type="date"
                className={`form-control ${errors.date && "invalid"}`}
                {...register("date", {
                  required: "Date of Birth is Required",
                })}
                onKeyUp={() => {
                  trigger("date");
                }}
              />
              {errors.date && (
                <small className="text-danger">{errors.date.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Address:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", {
                  required: "Address is Required",
                  minLength: {
                    value: 5,
                    message: "Minimum Required length is 5",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum allowed length is 50 ",
                  },
                })}
                onKeyUp={() => {
                  trigger("message");
                }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Signup"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
