import React from 'react'

const Agency = () => {
  return (
    <div className="container mx-auto agency_bg p-10 py-28 flex justify-between rounded-lg mt-8">
      <div>
        <h1 className="text-white text-2xl font-semibold">
          Mill maintenance products are from
        </h1>
        <h1 className="text-6xl font-bold text-white mt-5 mb-2">Rn agencies</h1>
        <h1 className="text-white text-2xl font-semibold">
          Trasted factory equipment partner <br />
          for your production
        </h1>

        <div className="flex items-center gap-4 mt-5">
          <div className="border-white border-[3px] rounded-lg px-3 py-2 text-white w-48 flex items-center gap-4">
            <h1 className="text-3xl">⁂</h1>
            <h1 className="text-lg font-bold"> Equipment Maintenance</h1>
          </div>
          <div className="border-white border-[3px] rounded-lg px-3 py-2 text-white w-48 flex items-center gap-4">
            <h1 className="text-3xl">⁂</h1>
            <h1 className="text-lg font-bold"> Equipment Maintenance</h1>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="border-white border-[3px] rounded-lg px-3 py-2 text-white w-48 flex items-center gap-4">
            <h1 className="text-3xl">⁂</h1>
            <h1 className="text-lg font-bold"> Equipment Maintenance</h1>
          </div>
          <div className="border-white border-[3px] rounded-lg px-3 py-2 text-white w-48 flex items-center gap-4">
            <h1 className="text-3xl">⁂</h1>
            <h1 className="text-lg font-bold"> Equipment Maintenance</h1>
          </div>
          <div className="border-white border-[3px] rounded-lg px-3 py-2 text-white w-48 flex items-center gap-4">
            <h1 className="text-3xl">⁂</h1>
            <h1 className="text-lg font-bold"> Equipment Maintenance</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-4xl font-bold text-white mb-8'>
          Suitable for
          <br /> industrial sectors of
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {Array(6)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg px-3 py-2 text-primaryText w-36 flex items-center justify-center flex-col gap-1"
              >
                <h1 className="text-3xl">⁂</h1>
                <h1 className="text-lg font-bold text-center">
                  {' '}
                  Equipment Maintenance
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Agency
