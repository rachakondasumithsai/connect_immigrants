import React, { Component } from "react";
import "./BookAppointment.css"
import { Link } from 'react-router-dom';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (
    email,
    appointmentDate,
    myTime
) => {
    let valid = true;
    if (
        email === null ||
        appointmentDate == null ||
        myTime == null
    ) {
        valid = false;
    }
    return valid;
};

class BookAppointment extends Component {
    constructor(props) {
        super(props);


        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            redirect: false,
            appointmentDate: null,
            myTime: null,
            formErrors: {
                email: "",
                myTime: "",
                appointmentDate: "",
            },
        };
    }

    onKeyPress(event) {
        if (event.charCode >= 48 && event.charCode <= 57) {
            alert("Only alphabets are allowed");
            event.preventDefault();
        }
    }

    noSpace(event) {
        if (event.charCode === 32) {
            alert("Cannot insert spaces");
            event.preventDefault();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (
            formValid(
                this.state.formErrors,
                this.state.email,
                this.state.appointmentDate,
                this.state.myTime
            )
        ) {
            alert("Appointment application submitted successfully");
            this.props.history.push('/home');
        } else {
            alert("Enter valid details. Appointment schedule failed");
            console.error(` Form Invalid `);
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "Invalid email address. Enter valid email like: pavan@gmail.com";
                break;
            case "appointmentDate":
                var today = new Date();
                formErrors.appointmentDate =
                    value.split("-")[0] < today.getFullYear() ||
                        value.split("-")[1] < today.getMonth() ||
                        value.split("-")[2] < today.getDate()
                        ? "Please input a valid date"
                        : "";
                break;
            case "myTime":
                formErrors.myTime =
                    value.split(":")[0] < 9 || value.split(":")[0] > 17
                        ? "Please note that working hours are 9:00 am to 6:00 pm"
                        : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1 style={{ fontWeight: 'lighter' }}>Appointment Form</h1>
                        <form className="book-form"
                            id="registration-form"
                            onSubmit={this.handleSubmit}
                            noValidate
                        >
                            <div className="firstName">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    onKeyPress={(event) => this.onKeyPress(event)}
                                />
                            </div>
                            <div className="lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    onKeyPress={(event) => this.onKeyPress(event)}
                                />
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input
                                    className={formErrors.email.length > 0 ? "error" : null}
                                    placeholder="Email"
                                    type="email"
                                    onKeyPress={(event) => this.noSpace(event)}
                                    name="email"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                            </div>
                            <div className="date">
                                <label htmlFor="date">Appointment Date</label>
                                <input
                                    placeholder="Date"
                                    type="date"
                                    name="appointmentDate"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.appointmentDate.length > 0 && (
                                    <span className="errorMessage">
                                        {formErrors.appointmentDate}
                                    </span>
                                )}
                            </div>
                            <div className="myTime">
                                <label htmlFor="myTime">Preferred Time</label>
                                <input
                                    className={formErrors.myTime.length > 0 ? "error" : null}
                                    placeholder="myTime"
                                    type="time"
                                    name="myTime"
                                    multiple
                                    noValidate
                                    onChange={this.handleChange}
                                />
                                {formErrors.myTime.length > 0 && (
                                    <span className="errorMessage">{formErrors.myTime}</span>
                                )}
                            </div>
                            <div className="submitApplication">
                                <button type="submit">Submit Application</button>
                                <Link to="/home/professionalconsultants">
                                    <button
                                    >Cancel</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookAppointment;
