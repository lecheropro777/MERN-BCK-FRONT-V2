import {Formik, Form, Field, ErrorMessage} from 'formik'
import {usePosts} from '../context/postContext'
import {useNavigate, useParams} from 'react-router-dom'
import * as yup from 'yup'
import { useEffect, useState } from "react";

export function PostForm() {

  const {createPost, getPost}=usePosts()
  const navigate= useNavigate()
    const params= useParams()
    
    const [post, setPost]=useState({
      title:'',
      description:''
    })
    
    useEffect(()=>{
        (async()=>{
          if(params.id){
            const post = await getPost(params.id)
            setPost(post)
          }
        })();
    },[])


  return (
    <div >
      <Formik
      initialValues={post}
      onSubmit={async(values,actions)=>{
        await createPost(values)
        navigate('/')
      }}
      enableReinitialize

      validationSchema={yup.object({
        title:yup.string().required("titulo requerido"),
        description:yup.string().required("Descripcion requerido")
      })}
      >
      {({handleSubmit})=>(
        <Form className='border rounded px-10 py-5 bg-blue-100' onSubmit={handleSubmit}>

        <Field className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' name='title' placeholder="title"/>

        <ErrorMessage component='p' className='text-red-400 text-sm' name='title'/>

        <Field className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' name='description' placeholder="Description"/>

        <ErrorMessage component='p' className='text-red-400 text-sm' name='description'/>


        <button className="text-white border rounded bg-blue-400" type='submit'>Guardar</button>
      </Form>
      )}

      </Formik>

    </div>
  )
}
