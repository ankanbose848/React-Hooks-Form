import React from 'react'
import useForm from './useForm'
import validate from './validate'
import InputField from './inputField'

// const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// const phoneRegex = RegExp(/^(\+)?([ 0-9]){10,16}$/g);


// const ContactForm = () => {
//     return (
//         <form noValidate>
//             {/* <input type="text" placeholder="name" name="firstName" value={ this.state.firstName } onChange={this.handleChange} /> */}
//             <InputField type="text" placeholder="First Name" name="firstName" />
//             <InputField type="text" placeholder="Last Name" name="lastName" />
//             <InputField type="email" placeholder="Email" name="email" />
//             <InputField type="tel" placeholder="Phone Number" name="phone" />
//             <div className="input-field">
//                 <textarea name="message" placeholder="Enter your message" ></textarea>
//             </div>

//             <button type="submit" className="btn">Submit</button>
//         </form>
//     )
// }

// export default ContactForm;

// const ContactForm = () => {
//     const { handleChange, handleSubmit, values, errors } = useForm(
//         submit,
//         validate
//     );

//     function submit() {
//         console.log("Submitted Succesfully");
//     }

//     return (
//         <form onSubmit={handleSubmit} noValidate>
//             {/* <input type="text" placeholder="name" name="firstName" value={ this.state.firstName } onChange={this.handleChange} /> */}
// <input type="text" placeholder="First Name" name="firstName" value={values.firstName} onChange={handleChange} />
//             {errors.firstName && <span className="error">{errors.firstName}</span>}

//             <input type="text" placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} />
//             {errors.lastName && <span className="error">{errors.lastName}</span>}

//             <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
//             {errors.email && <span className="error">{errors.email}</span>}

//             <input type="tel" placeholder="Phone Number" name="phone" value={values.phone} onChange={handleChange} />
//             {errors.phone && <span className="error">{errors.phone}</span>}

//             {/* <div className="input-field"> */}
//             <textarea name="message" placeholder="Enter your message" value={values.message} onChange={handleChange} ></textarea>
//             {errors.message && <span className="error">{errors.message}</span>}

//             {/* </div> */}

//             <button type="submit" className="btn">Submit</button>
//         </form>
//     )
// }

// export default ContactForm;

const ContactForm = () => {
    const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(
        submit,
        validate
    );

    function submit(isSubmitting) {
        console.log("Submitted Succesfully");
        Object.keys(values).forEach(key => {
            console.log(key, values[key]);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                {/* <InputField type="text" name="name" placeholder="First Name" value={values.name} onChange={handleChange} /> */}
                <InputField type="text" placeholder="First Name" name="firstName" value={values.firstName} onChange={handleChange} />
                {errors.firstName && <span className="error">{errors.firstName}</span>}

                <InputField type="text" placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} />
                {errors.lastName && <span className="error">{errors.lastName}</span>}

                <InputField type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}

                <InputField type="tel" placeholder="Phone Number" name="phone" value={values.phone} onChange={handleChange} />
                {errors.phone && <span className="error">{errors.phone}</span>}

                <div className="input-field">
                    <textarea name="message" placeholder="Enter your message" value={values.message} onChange={handleChange} ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}

                </div>

                <button type="submit" className="btn">Submit</button>



            </form>
            {isSubmitting && (
                <div className="output">
                    <h3>First Name: {values.firstName}</h3>
                    <h3>Last Name: {values.lastName}</h3>
                    <h3>Email: {values.email}</h3>
                    <h3>Phone: {values.phone}</h3>
                    <h3>Message: {values.message}</h3>
                </div>
            )}

        </div>
    )
}

export default ContactForm;

