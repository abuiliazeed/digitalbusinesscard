import React from 'react'

function List() {
  return (
    <> 
    <div className="bg-gray-50 text-4xl flex flex-col p-10 items-center">
        Getting Started
      </div>
      <div>
        <ul className="flex flex-row p-5">
          <li className="p-5 shadow-sm rounded-sm m-2 w-full text-center text-xl font-bold">First Card</li>
          <li className="p-5 shadow-sm rounded-sm m-2 w-full text-center text-xl font-bold">Second Card</li>
          <li className="p-5 shadow-sm rounded-sm m-2 w-full text-center text-xl font-bold">Third Card</li>
          <li className="p-5 shadow-sm rounded-sm m-2 w-full text-center text-xl font-bold">Fourth Card</li>
          <li className="p-5 shadow-sm rounded-sm m-2 w-full text-center text-xl font-bold">Fifth Card</li>

        </ul>
      </div>
    </>
  )
}

export default List