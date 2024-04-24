import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

const DynamicPage = () => {
  return (
    <div className='m-5 flex w-full'>
      <div className='w-[100%]'>
        <ListBoardComponentHeader />
        <div>
          <div className='bg-yellow-300 h-42 p-3 m-5 rounded-xl'>
            <div className='w-32 h-32 bg-white rounded-xl'>
              <div className='text-center'>
                <p className='text-3xl font-bold pt-2 text-red-600'>MON</p>
              </div>
              <div className='text-center'>
                <p className='text-6xl font-bold'>18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[30vw]'>
        <MonthlyStatisticsComponent />
      </div>
    </div>
  )
}

export default DynamicPage