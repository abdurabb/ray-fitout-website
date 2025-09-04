import React from 'react'

function CardWithTitle({ title, image }) {
  console.log(title)
  return (
    <div
      className="relative w-full aspect-[4/3] md:aspect-[1/1] bg-cover bg-center overflow-hidden  flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-white text-xl px-4 py-2 font-semibold  bg-opacity-50 rounded text-center">
        {title}
      </div>
    </div>



  )
}

export default CardWithTitle