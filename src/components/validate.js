export default function validateLogin(values) {
    let errors = {};
    if (!values.firstName) {
        errors.firstName = "First Name is required";
    } else if (values.firstName.length < 3) {
        errors.firstName = "First Name needs to be more than 10 characters";
    }
    if (!values.lastName) {
        errors.lastName = "Last Name is required";
    } else if (values.lastName.length < 3) {
        errors.lastName = "Last Name needs to be more than 10 characters";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    if (!values.phone) {
        errors.phone = "Phone number is required";
    } else if (values.phone.length < 10) {
        errors.phone = "Phone number needs to be more than 10 characters";
    }
    if (!values.message) {
        errors.message = "Message is required";
    } else if (values.message.length < 3) {
        errors.message = "Message needs to be more than 10 characters";
    }
    return errors;
}
