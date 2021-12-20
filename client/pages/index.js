import React, {useEffect, useState} from 'react';
import { EyeIcon, LockClosedIcon, TableIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Logo from '../assets/images/logo.png'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const API_URL = "http://localhost:4000/api"


export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  }
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center items-center">
            <Image className="mx-auto h-12 w-auto" src={Logo} />  
          </div>
          <h4 className="mt-6 text-center text-2xl font-medium text-gitHub">Sign in to your account</h4>

          {/* This is where Formim Starts */}

          <Formik
              initialValues={{
                  username: '',
                  password: '',
              }}
              validationSchema={Yup.object().shape({
                  username: Yup.string()
                      .required('Username is required'),
                  password: Yup.string()
                      .required('Password is required'),
              })}
              onSubmit={data => {
                // console.log(JSON.stringify(data))
                axios.post(`${API_URL}/user/login`, data).then((response) => {
                  if (response) {
                    console.log(response.data)
                  } else {
                    console.log("error")
                  }
                })
            }}
            render={({ errors, status, touched }) => (
                <Form className="mt-8 space-y-6">
                    <div className="rounded-md  -space-y-px">

                      {/* Username */}
                      <label htmlFor="username" className="sr-only">
                        Username
                      </label>
                      <Field
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-lightgray rounded-none rounded-t-md  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                        placeholder="Username"
                      />
                      <ErrorMessage name="username" component="div" className="text-xs px-2 py-1 text-tomato " />

                      {/* Password */}
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <Field name="password" type="password" placeholder="Password" className={'appearance-none rounded-none rounded-b-md relative block w-full px-3 py-2 border border-lightgray placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm' + (errors.password && touched.password ? ' is-invalid' : '')} />
                      <ErrorMessage name="password" component="div" className="text-xs px-2 py-1 text-tomato " />
                    </div>

                    <div >
                      <button type="submit"                
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-secondary to-primary  hover:brightess-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >Sign In</button>
                    </div>
                </Form>
            )}
          >

         
   


         
{/* 
          <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-lightgray placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div className='flex flex-row justify-between items-center'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                type={passwordShown ? "text" : "password"}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-lightgray placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                { passwordShown && 
                  (
                    <EyeIcon className='w-8 h-8' onClick={togglePassword}/>
                  )
                }
                
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-secondary focus:ring-primary border-gray rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-secondary to-primary  hover:brightess-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-green-500 group-hover:text-primary" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div> */}



          </Formik>
          
  
        </div>
      </div>
      
    </>
  )
}
