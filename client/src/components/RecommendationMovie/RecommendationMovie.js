import React, { useEffect, useState } from "react";
import instance from "../../APIS/myaxios";
import { getRecommendationsUrl } from "../../APIS/requests";
import Row from "../Rows/Row"; // Agora pode receber `movies`

const Recommendations = ({ wishlist }) => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const requests = wishlist.map((movieId) =>
                    instance.get(getRecommendationsUrl(movieId))
                        .then(response => response.data.results.slice(0, 3)) // Pega os 3 primeiros
                        .catch(error => {
                            console.error(`Erro ao buscar recomendações para ${movieId}:`, error);
                            return []; 
                        })
                );

                const results = await Promise.all(requests);
                setRecommendedMovies(results.flat()); // Junta todas as recomendações
            } catch (error) {
                console.error("Erro ao buscar recomendações:", error);
            }
        };

        if (wishlist.length > 0) {
            fetchRecommendations();
        }
    }, [wishlist]);

    return (
        <div>
            {recommendedMovies.length > 0 && (
                <Row title="Recomendações para Você" mediaType="movie" movies={recommendedMovies} />
            )}
        </div>
    );
};

export default Recommendations;
