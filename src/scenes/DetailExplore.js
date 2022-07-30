import React from 'react'

import Detail from '../parts/DetailExplore'

import DataExplore from '../json/DesignExploration.json'

export default function DetailExplore() {
    return (
        <>
            <Detail data={DataExplore.explore}></Detail>
        </>
        
    )
}