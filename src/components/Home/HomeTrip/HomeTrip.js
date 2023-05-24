import React from 'react'
import Trip from '../../Trip/Trip/Trip'

const HomeTrip = () => {
  return (
    <section className="container mx-auto px-6 lg:px-32 my-12">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4">
        <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[610px]">
          <span className="font-semibold text-lg text-primary mb-2 block capitalize">
            Our featured trips
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 custom-leading capitalize">
            Trips
          </h2>
          <p className="text-slate-500 text-body-color text-md md:text-lg">
            Let us plan your amazing gateway today!
            
          </p>
        </div>
      </div>
    </div>

    <div>
      <Trip/>
    </div>
  </section>
  )
}

export default HomeTrip