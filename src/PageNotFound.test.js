import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from "./PageNotFound"

test ("PageNotFound", () =>{
  render(<BrowserRouter>
           <PageNotFound/>
         </BrowserRouter>) 
  const text = screen.getByText('Oh no, something went wrong!')
  expect (text).toBeInTheDocument()
})
