import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import Row from "../Rows/Row";
import ByLanguage from "../ByLanguage/ByLanguage";
import { requests } from "../../APIS/requests";
import Recommendations from "../RecommendationMovie/RecommendationMovie";
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
    const [wishlist, setWishlist] = useState([]);
    const userId = sessionStorage.getItem('_id');

    useEffect(() => {
        document.title = "Prime Video: Home";

        // Função para buscar a wishlist do usuário
        const fetchWishlist = async () => {
            if (!userId) {
                toast.warning("Usuário não autenticado!", { position: toast.POSITION.TOP_CENTER });
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3709/watchlist/wishlist/${userId}?media=movie`);
                
                if (response.data.wishlist) {
                    setWishlist(response.data.wishlist);
                } else {
                    toast.info("Nenhum filme na sua lista de desejos.", { position: toast.POSITION.TOP_CENTER });
                }
            } catch (error) {
                console.error("Erro ao buscar wishlist:", error);
                toast.error("Erro ao carregar sua lista de desejos.", { position: toast.POSITION.TOP_CENTER });
            }
        };

        fetchWishlist();
    }, [userId]); 

    return (
        <React.Fragment>
            <MainNav />
            <Banner fetchUrl={requests[0].url} />
                {wishlist.length > 0 ? (
                    <Recommendations wishlist={wishlist} />
                    ) : (
                        <p className="no-recommendations">Adicione filmes à sua lista de desejos para ver recomendações!</p>
                    )}

            <div className="Home">
                {requests.map((SingleRow) => (
                    <Row
                        key={SingleRow.title}
                        title={SingleRow.title}
                        fetchUrl={SingleRow.url}
                        mediaType={SingleRow.media}
                    />
                ))}
            </div>

            

            <ByLanguage />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
