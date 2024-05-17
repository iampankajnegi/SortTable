
import React, { useState } from 'react'

const DateAndViewsTable = () => {

    const initialData = [
        { date: '2024-05-14', views: 120 },
        { date: '2024-04-20', views: 95 },
        { date: '2024-05-10', views: 130 },
        { date: '2024-03-22', views: 150 },
      ];


      const [data , setData] = useState(initialData)


      const SortByDate =()=>{

       const sortData = [...data].sort((a,b)=> new Date(a.date) - new Date(b.date))

         setData(sortData);
      }

      const SortByViews = ()=>{

          const sortData = [...data].sort((a,b)=> a.views - b.views)

          setData(sortData)
      }

  return (
    <div>
             <h1>Date and Views Table</h1>
             <button onClick={SortByDate}>Sort by Date</button>
             <button onClick={SortByViews}>Sort by View</button>

             <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Views</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item,index)=>(
                  
                  <tr key={index}>
                     
                    <td>{item.date}</td>
                    <td>{item.views}</td>

                  </tr>
                   
                ))}
              </tbody>
             </table>
              
    </div>
  )
}

export default DateAndViewsTable