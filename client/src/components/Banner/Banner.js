import React, { useState, useEffect } from "react";
import myaxios from "../../APIS/myaxios";
import "./Banner.scss";

const img_url_start = "https://image.tmdb.org/t/p/original/";

const Banner = ({ fetchUrl }) => {
    const [bannerData, setBannerData] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const request = await myaxios.get(fetchUrl);
                setBannerData(request.data.results || []);
            } catch (error) {
                console.error("Erro ao carregar o banner:", error);
            }
        };

        fetchBannerData();
    }, [fetchUrl]);

    useEffect(() => {
        if (bannerData.length > 0) {
            const interval = setInterval(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [bannerData]);

    return (
        <header className="banner">
            {bannerData.length > 0 && (
                <div className="banner__single-item">
                    <h4 className="banner__single-item__title">
                        {bannerData[slideIndex]?.title || bannerData[slideIndex]?.name}
                    </h4>
                    <img
                        src={`${img_url_start}${bannerData[slideIndex]?.backdrop_path}`}
                        alt={bannerData[slideIndex]?.title}
                        className="banner__single-item__image"
                    />
                </div>
            )}
        </header>
    );
};

export default Banner;
