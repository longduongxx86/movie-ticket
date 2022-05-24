import _ from 'lodash';
import React from 'react';

function FlattenLodash(props) {

    const arr = [[1, [2, [3, [4]]], 5]]

    const resultFlatten = _.flatten(arr)
    const resultFlattenDeep = _.flattenDeep(arr)

    console.log("flatten: ", resultFlatten)
    console.log("flattenDeep: ", resultFlattenDeep)

    return (
        <div>

        </div>
    );
}

export default FlattenLodash;