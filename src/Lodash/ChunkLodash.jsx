import _ from 'lodash';
import React from 'react';

function ChunkLodash(props) {
    let arrGenshin = [
        { id: 1, name: "Paimon" },
        { id: 2, name: "Barbatos" },
        { id: 3, name: "Morax" },
        { id: 4, name: "Baal" },
    ]

    const arr2 = arrGenshin?.concat()

    let arr = ['id', 1, 'name', 'Long', 'infor', 'cybersoft']

    let result = _.chunk(arr, 2)
    let resultGenshin = _.chunk(arrGenshin, 2)

    console.log('result', result)
    console.log('resultGenshin', resultGenshin)

    return (
        <div>

        </div>
    );
}

export default ChunkLodash;