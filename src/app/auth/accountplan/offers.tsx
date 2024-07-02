import { FaCheck } from "react-icons/fa"

interface PropsOffers {
  offers: string[]
}

export default function Offers({ offers }: PropsOffers) {
  return (
    <ul className="flex flex-col gap-2 p-2">
      {offers.map((offer, index) => {
        return (
          <li key={index} className="flex items-center">
            <FaCheck className="me-2 w-1/5" color="green" size={20} />
            <p className="w-4/5">{offer}</p>
          </li>
        )
      })}
    </ul>
  )
}
