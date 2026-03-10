import React from 'react'

const CustomerDetails = ({customer}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-6">
        <div className="">
          <h2>{customer.fullName}</h2>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails