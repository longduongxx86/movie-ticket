import _ from 'lodash';
import React from 'react';

function UniqLodash(props) {

    const arrGenshin = [
        { name: 'Hutao', element: "Pyro" },
        { name: 'Keqing', element: "Electro" },
        { name: 'Raiden Shogun', element: "Electro" },
        { name: 'Kamisato Ayaka', element: "Cryo" },
        { name: 'Sucrose', element: "Anemo" },
        { name: 'Yanfei', element: "Pyro" },
        { name: 'Ganyu', element: "Cryo" },
        { name: 'Yelan', element: "Hydro" },
        { name: 'Zhongli', element: "Geo" },
    ]

    console.log("uniqLodash: ", _.uniqBy(arrGenshin, "element"))

    return (
        <div>

        </div>
    );
}

export default UniqLodash;