import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import GetSimilarMovies from "./GetSimilarMovies"

// This test is basically a placeholder at this stage
test ("GetSimlarMovies", () =>{
  render(<BrowserRouter>
           <GetSimilarMovies />
         </BrowserRouter>) 
  const div = screen.getByTestId("Movies")
  expect (div).toBeInTheDocument()
})
