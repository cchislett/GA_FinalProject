## Similar Movies

This is an app to find movies of similar type to a user provided movie title.
It uses the Similar Movies API provided by rapidapi (https://rapidapi.com/animeslayerquiz/api/similar-movies/)

This API provides 2 services,

1. get id  -  This service takes a generalised movie name and provides a list of movies (with "integer-name" string id's) that match that name.

2. find similar - This service takes a specific name in the integer-name format and provides a list of similar movies which includes details such as title, a URL to a movie posterm, genre etc.

The similarity methodology is not documented by the API provider but appears to be based on genre and acting cast.

This application will use both of these services as follows,

The user will be prompted to enter a movie name which will then be processed and return a list of possible candidates.
The user will then select a movie from this list which will then be used as the input for the similar movies query.
Once that query has been processed, a list of similar movies will be displayed for review.
