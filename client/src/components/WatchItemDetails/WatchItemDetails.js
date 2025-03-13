import React from 'react'
import myLanguageMap from '../../APIS/myLanguageMapping'
import './WatchItemDetails.scss'

const WatchItemDetails=(props)=>{

    const {director,starring,genres,language} = props
    
    return (
        <dl className='watch-item__details'>
        <div>
            <dt  className='watch-item__details__title'>Direção</dt>
            <dd className='watch-item__details__info'>
                {
                   director.length >0  ? director.join(" , ") : "N/A"
                }
            </dd>
        </div>
        <div>
            <dt className='watch-item__details__title'>Elenco</dt>
            <dd className='watch-item__details__info'>
                {
                    starring.length >0  ? starring.join(" , ") : "N/A"
                }
            </dd>
        </div>
        <div>
            <dt className='watch-item__details__title'>Gêneros</dt>
            <dd className='watch-item__details__info'>
                {
                    genres.length >0  ? genres.join(" , ") : "N/A"
                }
            </dd>
        </div>
        <div>
            <dt className='watch-item__details__title'>Idiomas</dt>
            <dd className='watch-item__details__info'>
                {
                    myLanguageMap.get(language)
                }
            </dd>
        </div>
    </dl>
    )
}

export default WatchItemDetails
