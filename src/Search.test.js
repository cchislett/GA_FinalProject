import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Search from "./Search"

test ("Search", () =>{
  render(<BrowserRouter>
           <Search />
         </BrowserRouter>) 
  const movie = screen.getByTestId('SearchForm')
  expect (movie).toBeInTheDocument()
})
