"use client"
import { FaGoogle } from "react-icons/fa"
import ButtonComponent from "../../component/button"
import InputComponent from "../../component/input"
import FormComponent from "../../component/form"
import Link from "next/link"
import CardCenter from "@/app/component/cardcenter"

export default function SignUp() {
  return (
    <div className="fixed w-full h-full flex justify-center items-center">
      <CardCenter>
        <div
          id="greeting"
          className="hidden w-1/2 lg:flex flex-col justify-center items-center lg:relative overflow-hidden bg-primary"
        >
          <h3 className="font-bold text-3xl text-white">Welcome back!</h3>
          <p className="text-white text-justify">
            If you already have an account, you can log in
          </p>
          <Link href={"/auth/signin"} className="w-1/2 m-2">
            <ButtonComponent className="border-2 text-white p-2 rounded w-full">
              Sign in
            </ButtonComponent>
          </Link>
          <Link href={"/auth/accountplan"} className="w-1/2 m-2">
            <ButtonComponent className="border-2 text-white p-2 rounded w-full">
              Change plan
            </ButtonComponent>
          </Link>
        </div>
        <div
          id="signup"
          className="w-full bg-white lg:w-1/2 flex flex-col gap-2 justify-center items-center overflow-y-auto pt-20 lg:pt-0"
        >
          <div id="signup-form" className="md:w-2/3">
            <h3 className="font-bold text-2xl text-center m-1 text-blue-500">
              Create your account
            </h3>
            <ButtonComponent className="btn flex items-center gap-3 p-2 border-2 w-full rounded hover:bg-gray-200">
              <FaGoogle />
              <p className="text-sm mx-auto">Sign up with google account</p>
            </ButtonComponent>
            <div className="flex items-center justify-between gap-2 w-full">
              <hr className="border-1 w-2/5" />
              <p className="text-gray-400">Or</p>
              <hr className="border-1 w-2/5" />
            </div>
            <FormComponent id="form-signup">
              <InputComponent type="text" placeholder="Lastname" />
              <InputComponent type="text" placeholder="Firstname" />
              <InputComponent type="number" placeholder="Phone number" />
              <InputComponent type="email" placeholder="E-mail" />
              <InputComponent type="password" placeholder="Password" />
              <InputComponent type="password" placeholder="Confirm password" />
              <ButtonComponent>Sign Up</ButtonComponent>
               <Link href={"/auth/signin"} className="lg:hidden w-full mb-5">
                <ButtonComponent className="bg-blue-600 w-full text-white rounded p-2">Sign in</ButtonComponent>
              </Link>
            </FormComponent>
          </div>
        </div>
      </CardCenter>
    </div>
  )
}
