import React, {useEffect} from "react";
import { useForm } from "react-hook-form";



export  default function FileForm(){

    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState


    const onSubmit = async data => {
        //обьект для отправки данных
        const formData = new FormData();
        //Если поле файла существует (заполненое)
        if(data.file[0])
            //ПРисоеденяем данные из файла в форму
            formData.append("file", data.file[0]);
        else {
            // Если обьекта не существует - выводим сообщение об ошибке и уходим из отправки
            //alert("NoFile");
            errors.file = {}
            return;
        }


        const res = await fetch("http://localhost:3333/api" + "/media/file/", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="file" {...register("file", { required: true })} />
            {errors.file && <span><br/>This file is required<br/></span>}


            <input type="submit" />
        </form>
    );

}