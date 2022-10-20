import { useForm } from "react-hook-form";
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'


export default function MessageUser() {
    const formSchema = Yup.object().shape({
        textarea: Yup.string()
            .required('Должно быть заполнено')
            .min("15") ,
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
    }
    return (
        <div className="container mt-5">
            <h6>Если у вас есть жалобы или предложения отправте нам</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Message</label>
                    <input
                        name="textarea"
                        type="textarea"
                        {...register('textarea')}
                        className={`form-control ${errors.textarea ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.textarea?.message}</div>
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
