import './App.css';
function DisplayMovie({posterURL, title, genre, story}){
    return(
        <div className="DisplayMovie">          
            <img src = {posterURL} alt="film poster"/>
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{story}</p>
        </div>
    )
}
export default DisplayMovie
/*
 {
          "title": "Romeo + Juliet (1996)",
          "genre": "Drama, Romance",
          "rating": "6.7",
          "country": "USA, Mexico, Australia",
          "duration": "120 min.",
          "story": "In director Baz Luhrmann's contemporary take on William Shakespeare's classic tragedy, the Montagues and Capulets have moved their ongoing feud to the sweltering suburb of Verona Beach, where Romeo and Juliet fall in love and secretly wed. ...",
          "style": "                                        romantic, stylized, emotional, atmospheric, tense ...                                        ",
          "audience": "                                        teens, chick flick, date night, girls' night, kids                                        ",
          "plot": "                                        romance, forbidden love, tragic love, shakespeare, love story, shakespeare's romeo and juliet, young lovers, star crossed lovers, teen romance, true love, love, love and romance ...                                        ",
          "id": "21565-romeo-juliet",
          "img": "https://bestsimilar.com/img/movie/thumb/c5/21565.jpg"
        },
*/