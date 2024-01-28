import React from 'react'
import { useForm } from "react-hook-form"
 
function HockForm() {

  const {
    register,
    handleSubmit,
    formState:{errors},
    watch
  } = useForm()

  const onSubmit = (data) => {
    const datas = {
      name: data.name , 
      email: data.email , 
      age : data.age, 
      Pass :  data.password
    }
    console.log(datas)
  }

  return (
    <div>
         <div className="flex min-h-full flex-1 flex-col justify-center   lg:px-8">
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-300 p-4 rounded-3xl">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           React Form validation
          </h2>
        </div>

          <form  onSubmit={handleSubmit(onSubmit)}  className="space-y-6"  >
            <div>
            <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                
              </div>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text" 
                  placeholder='Enter Your Name'
                  {...register("name",{required:"Name Is Required", minLength:{value:3,message:"You Must 3 Letter"},maxLength:{value:15,message:" Max 15 Letter"}, pattern: /^[A-Za-z]+$/i   } )}
               
                className={errors.name? "border-rose-600 ring-2 ring-pink-300 ring-inset w-full rounded-md   pl-3 py-1.5 border-2 placeholder:text-gray-40" : "block w-full rounded-md pl-3 py-1.5 border-2  focus:ring-indigo-600 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "}
            
                />
                 {errors.name?.type === 'pattern' && (<p className=' text-red-500 font-bold p-1 '> invalid Name </p>) }
                <p className=' text-red-500 font-bold p-1 '>{errors.name?.message } </p>
              </div>
            </div>

            <div>
            <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                
              </div>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Enter Email ID'
                  autoComplete="email" 
                  {...register("email",{required:"Email Is Required", pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/ })}
                  className="block w-full rounded-md border-0  pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> 
                <p className=' text-red-500 font-bold p-1 '>{errors.email?.message } </p>

                {errors.email?.type === 'pattern' && (<p className=' text-red-500 font-bold p-1 '> invalid Email </p>) }
                
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
                
              </div>
              <div className="mt-1">
                <input
                  id="age"
                  name="age"
                  type="number"  
                  placeholder='Enter Your Age'
                  {...register("age", {required:"Age Is Required", max:{value:50, message:"50+ age is not alow "}, min:{value:18, message:"You Must be 18+"}})}
                  className="block w-full rounded-md border-0 pl-3   py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=' text-red-500 font-bold p-1 '>{errors.age?.message } </p>
              </div>
            </div>

          
             
            

              <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
                </label>
                
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"  
                  placeholder='Enter Password'
                  {...register("password", {required:'Passwoed is Require', pattern:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, minLength:{value:8 , message:"Your Must be 8 Latter"}})}
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.password?.type === 'pattern' && (<p className=' text-red-500 font-bold p-1 '> min 8 letter password, with at least a symbol, upper and lower case letters and a number </p>) }
                       <p className=' text-red-500 font-bold p-1 '>{errors.password?.message } </p>
              </div>
            </div>
             

             
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="Repassword" className="block text-sm font-medium leading-6 text-gray-900">
                Repassword
                </label>
                
              </div>
              <div className="mt-1">
                <input
                  id="Repassword"
                  name="Repassword"
                  type="password"  
                  placeholder='Enter Re-Password'
                  {...register("repassword",{required:"Re-Password id Required", validate:date =>{
                    if(watch('password') !== date){
                      return "Your Password is not Match "
                    }
                  }})}
                  className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=' text-red-500 font-bold p-1 '>{errors.repassword?.message } </p>
              </div>
            </div>

        

            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           
            
          </p>
        </div>
        </div>
    </div>
  )
}

export default HockForm
