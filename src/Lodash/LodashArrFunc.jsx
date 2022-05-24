import React from 'react';
import _ from 'lodash';

function LodashArrFunc(props) {

    let arr = ['Long', 'Ngân', 'Kamisato Ayaka']

    let arrGenshin = [
        { id: 1, name: "Paimon" },
        { id: 2, name: "Barbatos" },
        { id: 3, name: "Morax" },
        { id: 4, name: "Baal" },
    ]

    //es6
    const resultES6 = arr.join('-!`')

    //lodash
    const resultLodash = _.join(arr, ' Love ')

    const findInforGenshin = _.find(arrGenshin, item => item.name === 'Barbatos')

    console.log(findInforGenshin)
    

    const firstElement =_.first(arrGenshin)
    const lastElement =_.last(arrGenshin)
    const {id,name} =_.last(arrGenshin)

    console.log('firstElement', firstElement)
    console.log('lastElement', lastElement)
    console.log(`id: ${id} --- name: ${name}`)


    return (
        <div>
            <div style={{ color: 'white', backgroundColor: "gray", padding: "20px 0" }}>
                <h2>ES6</h2>
                <p>{resultES6}</p>
            </div>
            <div style={{ color: 'white', backgroundColor: "brown", padding: "20px 0" }}>
                <h2>Lodash</h2>
                <p>{resultLodash}</p>
            </div>
        </div>
    );
}

export default LodashArrFunc;