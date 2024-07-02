import ButtonComponent from "@/app/component/button"
import AccountPlanComponent from "./accountplan"
import Link from "next/link"
import Offers from "./offers"
import './accountplan.css'

export default function AccountChoose() {
  const offersGoAsYouPay = [
    "50 Ariary per minutes of video/audio",
    "Audio playback",
    "Great security with GDPR compliance",
    "Store all your file on our cloud up to 20Go",
    "Speaker detection",
    "Video/Audio transcriber with high precision",
  ]

  const offersPerMouth = [
    "Video/Audio transcriber with high precision",
    "Speaker detection",
    "Transcribe 180 minutes of video/audio per day over 20 working days each month for 70,000 Ariary then 50 Ariary/minute if that is not enough",
    "Transcribe 60 minutes of video/audio in less than 5 minutes",
    "Cancel at any time",
    "Audio playback",
    "Store up to 30GB of data",
  ]

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white w-4/5 rounded card-accountplan">
        <h2 className="font-bold text-center text-3xl text-blue-500 m-5">
          Choose your way of paying!
        </h2>
        <div className="flex justify-evenly items-start p-5">
          <AccountPlanComponent
            title={
              <h3 className="font-bold text-xl text-blue-500 m-5 text-center">
                Unlimited transcription per day
              </h3>
            }
          >
            <div>
              <Offers offers={offersGoAsYouPay} />
            </div>

            <hr className="w-full" />
            <Link href={"/auth/signup"} className="my-2">
              <ButtonComponent>Sign with this plan</ButtonComponent>
            </Link>
          </AccountPlanComponent>
          <AccountPlanComponent
            title={
              <h3 className="font-bold text-xl text-blue-500 m-5 text-center">
                Professional
              </h3>
            }
          >
            <div>
              <Offers offers={offersPerMouth} />
            </div>

            <hr className="w-full" />
            <Link href={"/auth/signup"} className="my-2">
              <ButtonComponent>Sign with this plan</ButtonComponent>
            </Link>
          </AccountPlanComponent>
        </div>
      </div>
    </div>
  )
}
