import React from 'react'
import Cards from '../organisms/Card/Cards'

function Top10({ categoria }) {
    return (
        <div>
            <Cards
                category={categoria}
            />
        </div>
    )
}

export default Top10
