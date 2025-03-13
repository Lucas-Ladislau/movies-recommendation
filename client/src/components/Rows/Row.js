import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Row.scss';
import img_not_found from '../../../src/assets/images/img_not_found.png';
import myaxios from '../../APIS/myaxios';

const img_url_start = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
    const { title, fetchUrl, mediaType, movies } = props;
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            if (fetchUrl) {
                const request = await myaxios.get(fetchUrl);
                if (request.data) {
                    setData(request.data.results);
                }
            } else if (movies) {
                setData(movies); // Agora aceita filmes passados diretamente via props
            }
        }
        fetchData();
    }, [fetchUrl, movies]); // Adicionamos movies como dependência

    const history = useHistory();
    const gotToWatchHandler = (id) => {
        if (mediaType === 'tv') {
            history.push(`/watchtv/${id}`);
        } else if (mediaType === 'movie') {
            history.push(`/watchmovie/${id}`);
        } else {
            history.push('/pagenotfound');
        }
    };

    const handleNext = () => {
        if (startIndex + 6 < data.length) {
            setStartIndex(startIndex + 6);
        }
    };

    const handlePrev = () => {
        if (startIndex - 6 >= 0) {
            setStartIndex(startIndex - 6);
        }
    };

    return (
        <div className='row'>
            <h4 className='row__title'>{title}</h4>
            
            <div className="row__container">
                {/* Setas de navegação que só aparecem no hover */}
                {startIndex > 0 && (
                    <button className="leftarrow" onClick={handlePrev}>&lt;</button>
                )}

                <div className='row__posters'>
                    {data.slice(startIndex, startIndex + 7).map((singleItem, index) => (
                        <img
                            onClick={() => gotToWatchHandler(singleItem.id)}
                            key={singleItem.id}
                            title={singleItem.title || singleItem.name}
                            className={`row__poster img-${index + 1}`}
                            src={
                                singleItem.backdrop_path 
                                    ? `${img_url_start}${singleItem.backdrop_path}` 
                                    : singleItem.poster_path 
                                    ? `${img_url_start}${singleItem.poster_path}` 
                                    : img_not_found
                            }
                        />
                    ))}
                </div>

                {startIndex + 7 < data.length && (
                    <button className="rightarrow" onClick={handleNext}>&gt;</button>
                )}
            </div>
        </div>
    );
};

export default Row;
