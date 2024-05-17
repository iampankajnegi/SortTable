
import React, { useState } from 'react'

const DateAndViewsTable = () => {

    const initialData = [
       
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }
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
                  <th>Article</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item,index)=>(
                  
                  <tr key={index}>
                     
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                    <td>{item.article}</td>

                  </tr>
                   
                ))}
              </tbody>
             </table>
              
    </div>
  )
}

export default DateAndViewsTable