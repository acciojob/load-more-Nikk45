
import React, { useState } from "react";
import './../styles/App.css';

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];

const App = () => {

  const itemPerPage = 10
  const [showItems, setShowItems] = useState(0)

  const displayItems = items.slice(0,showItems)

  function loadMore(){
    setShowItems(prevValue => prevValue + itemPerPage)
    if(showItems>=30){
      setShowItems(0)
    }
  }

  console.log(showItems)


  return (
    <div>
        {/* Do not remove the main div */}
        {
          <ul>
            { showItems>0 &&
                displayItems.map((item,index)=>
                  <li key={index+1}>{item}</li>
                )
            }
          </ul>
        }
        {
          showItems < items.length && 
          <button onClick={loadMore}>Load More</button>
        }
    </div>
  )
}

export default App
