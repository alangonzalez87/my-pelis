const API = "https://api.themoviedb.org/3"


export function get(path) {
    return fetch ( API + path, {
        headers:{
         Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzRjYTgzNTVkNDU5MTQ2NTM5YjJlOTZlZjdmMTY0MCIsInN1YiI6IjYyMWVhYTAwNzdiMWZiMDAxZTE2MjljNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ajDsJLnDBhukAD65tS8ls7WwlR3tNk5sG2e0dx8HGI",
         "Content-Type": "application/json;charset=utf-8",
        }
    })
    .then((result) => result.json())
};