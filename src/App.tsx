import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

interface infoInput{
  firstname: string,
  lastname: string
}

function App() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm<infoInput>({
    defaultValues:{
      firstname: 'Phuc',
      lastname: 'Nguyen'
    }
  })

  const onsubmit = (data: infoInput) => {
    console.log(data);
  }
  return (
    <div className="App">
      <form className='form-wrap' onSubmit={handleSubmit(onsubmit)}>
        <input {...register("firstname", {required: {value: true, message: 'something wrong'}})} placeholder="firstname"/>
        <p>{errors?.firstname?.message}</p>
        <input type="text" {...register("lastname")}  placeholder="lastname"/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
