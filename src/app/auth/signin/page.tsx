import CardCenter from "@/app/component/cardcenter"
import ButtonComponent from "@/app/component/button"
import Link from "next/link"
import FormComponent from "@/app/component/form"
import { FaGoogle } from "react-icons/fa"
import InputComponent from "@/app/component/input"

export default function SignIn() {
  return (
    <div className="fixed w-full h-full flex justify-center items-center">
      <CardCenter>
        <div
          id="greeting"
          className="hidden w-1/2 lg:flex flex-col justify-center items-center lg:relative overflow-hidden bg-primary p-10"
        >
          <h3 className="font-bold text-3xl text-white">Welcome!</h3>
          <p className="text-white text-center">
            {`If you don't have an account, join us! we are pleased to have you
            with us!`}
          </p>
          <Link href="/auth/signup" className="w-1/2 m-2">
            <ButtonComponent className="border-2 text-white p-2 rounded w-full">
              Sign up
            </ButtonComponent>
          </Link>
        </div>
        <div
          id="signup"
          className="w-full bg-white lg:w-1/2 flex flex-col gap-2 justify-center items-center overflow-y-auto"
        >
          <div id="signup-form" className="md:w-2/3">
            <h3 className="font-bold text-2xl text-center m-1 text-blue-500">
              Create your account,
            </h3>
            <ButtonComponent className="btn flex items-center gap-3 p-2 border-2 w-full rounded hover:bg-gray-200">
              <FaGoogle />
              <p className="text-sm mx-auto">Sign in with google account</p>
            </ButtonComponent>
            <div className="flex items-center justify-between gap-2 w-full">
              <hr className="border-1 w-2/5" />
              <p className="text-gray-400">Or</p>
              <hr className="border-1 w-2/5" />
            </div>
            <FormComponent id="form-signup">
              <InputComponent type="email" placeholder="E-mail" />
              <InputComponent type="password" placeholder="Password" />
              <ButtonComponent>Sign In</ButtonComponent>
              <Link href={"/auth/signup"} className="lg:hidden w-full">
                <ButtonComponent className="bg-blue-600 w-full text-white rounded p-2">Sign up</ButtonComponent>
              </Link>
            </FormComponent>
          </div>
        </div>
      </CardCenter>
    </div>
  )
}
