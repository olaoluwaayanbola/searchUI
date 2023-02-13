import './App.css'
import axios from 'axios';
import { Cards } from "./components/Cards"
import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
function App() {
  const [userdata, setData] = useState<[] | any>([])
  const [search, setSearch] = useState<string>("")
  const handle_search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    )()
  }, [search])
  console.log(userdata)
  return (
    <div className="App">
      <div className="SearchContainer">
        <div className="box">
          <div className="Icon">
            <SearchIcon />
          </div>
          <input
            value={search}
            className="Input"
            onChange={handle_search}
            placeholder="Username"
            autoFocus
          />
        </div>
      </div>
      <div className="CardContainer">
        {
          userdata.map(({ id, ...data }: any) => (
            <Cards key={id} />
          ))
        }
      </div>
    </div>
  )
}

export default App