import { useState } from 'react';
import { useForm } from "react-hook-form";
const Input = () => {
    const { register , handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.dir(`
            Full Name: ${data.fullname},
            Email: ${data.email},
            Phone: ${data.phone},
            Subject: ${data.subject},
            Message: ${data.message}
        `);
    }
    return (
        <>
            <form className="main_form_back" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" className="input" placeholder="Your Name *" onChange={e => setfullName(e.target.value)}
                        name="fullname" id="fullname"  {...register('fullname', { required: true })} />
                    {errors.fullname && errors.fullname.type == "required" && <em>Full Name Required</em>}
                </div>
                <div>
                    <input type="email" className="input" placeholder="Your Email *" onChange={e => setEmail(e.target.value)} name="email" id="email" {...register('email', { required: true, pattern: /@[a-z]+./ })} />
                    {errors.email && errors.email.type == 'required' && <em>Email Required</em>}
                    {errors.email && errors.email.type == 'pattern' && <em>@ Required</em>}
                </div>
                <div>
                    <input type="text" className="input" placeholder="Your Phone *" onChange={e => setPhone(e.target.value)} name="phone" id="phone" {...register('phone', { required: true, pattern: /[0-9]/, minLength: 10, maxLength: 10 })} />
                    {errors.phone && errors.phone.type == 'required' && <em>Phone No Required</em>}
                    {errors.phone && errors.phone.type == 'pattern' && <em>Phone No Should be No</em>}
                    {errors.phone && errors.phone.type == 'minLength' && <em>Phone No Should be 10 Digit</em>}
                    {errors.phone && errors.phone.type == 'maxLength' && <em>Phone No dosen't Exit 10 Digit</em>}
                </div>
                <div>
                    <input type="text" className="input" placeholder="Subject *" onChange={e => setSubject(e.target.value)} name="subject" id="subject" {...register('subject', { required: true })} />
                    {errors.subject && errors.subject.type == 'required' && <em>Subject Required</em>}
                </div>

                <div className="textarea">
                    <textarea name="message" className="input" placeholder="Message" onChange={e => setMessage(e.target.value)} id="message" cols="30" rows="10" {...register('message', { required: true, minLength: 100 })}></textarea>
                    {errors.message && errors.message.type == 'required' && <em>Message Will Required</em>}
                    {errors.message && errors.message.type == 'minLength' && <em>Minimum 100 Words Required</em>}
                </div>
                <input type="submit" value="Submit" className="submit" />
            </form>
        </>
    )
}

export default Input;