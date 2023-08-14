import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import GetSimilarMovies from "./GetSimilarMovies"

test ("GetSimlarMovies", () =>{
  render(<BrowserRouter>
           <GetSimilarMovies />
         </BrowserRouter>) 
  const div = screen.getByTestId("Movies")
  expect (div).toBeInTheDocument()
})
