import { render, screen } from "@testing-library/react"
import DisplayMovie from "./DisplayMovie"

test ("DisplayMovie", () =>{
  const testData = {
    "title": "Romeo + Juliet (1996)",
    "genre": "Drama, Romance",
    "duration": "120 min.",
    "story": "In director Baz Luhrmann's...",
    "style": "romantic, stylized, emotional, atmospheric, tense...",
    "img": "https://bestsimilar.com/img/movie/thumb/c5/21565.jpg"
  }
  render(<DisplayMovie 
          posterURL={testData.img}
          title={testData.title}/>) 
  
  const poster = screen.getByTestId("poster")
  expect(poster).toHaveAttribute("src","https://bestsimilar.com/img/movie/thumb/c5/21565.jpg")
  
  const title = screen.getByText("Romeo + Juliet (1996)")
  expect(title).toBeInTheDocument()

})
