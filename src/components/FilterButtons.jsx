import React from 'react'

const FilterButtons = ({filter, setFilter}) => {
  return (
    <div className='flex justify-around items-center'>
        <button onClick={() => setFilter('All')} className={`${filter == 'All' ? 'bg-teal-600 text-white'  : 'bg-teal-100'} p-2  px-4 rounded-sm mx-2`}>ALL</button>

        <button onClick={() => setFilter('completed')} className={`${filter == 'completed' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm mx-2`}>Completed</button>

        <button onClick={() => setFilter('UnCompeleted')} className={`${filter == 'UnCompeleted' ? 'bg-teal-600 text-white' : 'bg-teal-100'} p-2 px-4 rounded-sm mx-2`}>UnCompeleted</button>
      </div>
  )
}

export default FilterButtons
