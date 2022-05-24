import _ from 'lodash';
import React from 'react';

function FillLodash(props) {

    let arrGenshin = [
        { id: 1, name: "Paimon" },
        { id: 2, name: "Barbatos" },
        { id: 3, name: "Morax" },
        { id: 4, name: "Baal" },
    ]

    _.fill(arrGenshin, { id: 5, name: "Kamisato Ayaka" }, 2,4)

    console.log("arr FillLodash: ", arrGenshin)

    return (
        <div>

        </div>
    );
}

export default FillLodash;