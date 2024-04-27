import {
  FaCalendarAlt,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import jose from '../../Img/jose.png'
import H1 from '../UIComponents/h1/h1'

export default function SideBar() {
  return (
    <div className="bg-blue-200 flex flex-col items-center p-8 text-center lg:w-1/3">
      <img
        alt="José Erisvaldo"
        className="h-48 w-48 rounded-full object-cover"
        height="192"
        src={jose}
        style={{
          aspectRatio: '192/192',
          objectFit: 'contain'
        }}
        width="192"
      />
      <H1 h1={'José Erisvaldo dos Santos'} />

      <p className="text-sm text-gray-600">Desenvolvedor Font-End</p>
      <div className="flex mt-4 space-x-2">
        <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-800 flex items-center justify-center rounded-full">
          <FaInstagramSquare className="text-white w-6 h-6 cursor-pointer" />
        </div>
        <FaLinkedin className="h-6 w-6 text-blue-700 cursor-pointer" />
      </div>
      <div className="mt-8 space-y-2 text-left">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="h-5 w-5 text-gray-600" />
          <span>+55 11 9 5879-0531</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail className="h-5 w-5 text-gray-600" />
          <span>joseerisvaldopg@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkedAlt className="h-5 w-5 text-gray-600" />
          <span>SP, Louveira</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="h-5 w-5 text-gray-600" />
          <span>04/06/1998</span>
        </div>
      </div>
      <button className="mt-6 bg-blue-600 p-3 rounded text-white">
        Download CV
      </button>
    </div>
  )
}
