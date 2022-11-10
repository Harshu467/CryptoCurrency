import React from 'react'

const Table = () => {
  return (
    <>
    <div
    className='flex flex-col mt-9 border border-gray-100 rounded'>
        <table className='w-full table-fixed'>
            <thead className='capitalize text-base text-gray-100 font-medium border-b border-gray-100 ' >
                <tr>
                    <th className="py-1">Assets</th>
                    <th className="py-1">Name</th>
                    <th className="py-1">Price</th>
                    <th className="py-1">Total Volume</th>
                    <th className="py-1">Market Cap Change</th>
                    <th className="py-1 lg:table-cell hidden">1H</th>
                    <th className="py-1 lg:table-cell hidden">24H</th>
                    <th className="py-1 lg:table-cell hidden">7D</th>
                </tr>
            </thead>
            <tbody>
            <tr className='text-center border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                    <td className="py-4">Assets</td>
                    <td className="py-4">Name</td>
                    <td className="py-4">Price</td>
                    <td className="py-4">Total Volume</td>
                    <td className="py-4">Market Cap Change</td>
                    <td className="py-4">1H</td>
                    <td className="py-4">24H</td>
                    <td className="py-4">7D</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Table