import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../utils/htttpClients";
import { useState } from "react";
import { Spinner } from "../conponents/Spinner";


export function MovieDetails(){
    const { movieId}= useParams();
    const [isLoading, setIsLoading]= useState(true);
    const [movie,setMovie] =  useState (null);
  
    
    useEffect(() =>{
        setIsLoading (true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
            
        })
    },[movieId]);

    if (isLoading){
        return <Spinner/>;
    }

  
    const imageUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path;

    return   <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p><strong>Genre:</strong>{" "}
                {movie.genres.map(genre=> genre.name).join(", ")}
            </p>
            <p> 
                <strong>Description:</strong>{" "} {movie.overview}
            </p>
                
                
        </div>
    </div>;
    
      
}
   