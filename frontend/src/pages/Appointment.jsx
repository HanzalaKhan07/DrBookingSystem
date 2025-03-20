import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const [docInfo, setDocInfo] = useState(null)

  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    // console.log(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    // getting current date
    let today = new Date()
    // console.log(today)

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        //add slots to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        //increament current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots])
  return docInfo && (
    <div>
      {/* -------------- Doctors Details -------------- */}
       <div className='flex flex-col sm:flex-row gap-4'>
        {/* ------------ Image --------------- */}
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
        </div>
        <div>
          {/* ----------------- Doc Info : name, Degree, experience ---------------- */}
          <p className='text-2xl font-medium flex gap-2 items-center text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} />
          </p>
          <div className='items-center text-sm flex gap-2 mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='border rounded-full text-xs py-0.5 px-2'>{docInfo.experience}</button>
          </div>
          {/* ------------------ Doctor About --------------- */}
          <div>
            <p className='flex gap-1 text-sm font-medium items-center text-gray-900 mt-3'>
              About <img className='w-3.5' src={assets.info_icon} alt='' />
            </p>
            <p className=' text-gray-500 text-sm mt-1 max-w-[700px]'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>


      {/* ------------- Booking slots ----------------- */}
       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" :"border border-gray-200"}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p>
              {item.time.toLoverCase()}
            </p>
          ))

          }
        </div>
       </div>
    </div>
  )
}

export default Appointment
