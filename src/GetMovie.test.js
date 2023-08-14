import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import GetMovie from "./GetMovie"

test ("GetMovie", () =>{
  render(<BrowserRouter>
           <GetMovie />
         </BrowserRouter>) 
  const div = screen.getByTestId("GetMovies")
  expect (div).toBeInTheDocument()
})
