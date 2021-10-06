import React from 'react'
import TrailIndexItem from './trail_index_item'

const TrailIndex = ({park, trails}) => {
    console.log(trails)
    return (
        <div>
            {/* {park.park_name} */}
            <ul>
                {trails.map((trail, idx) => {
                    return <TrailIndexItem key={trail.id} trail={trail} idx={idx} park={park} />
                })}
            </ul>
        </div>
    )
}

export default TrailIndex
