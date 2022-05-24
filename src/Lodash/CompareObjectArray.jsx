import _ from 'lodash';
import React from 'react';

function CompareObjectArray(props) {

    const arrA = [1, 2]
    const arrB = [2, 1]

    const result = _.isEqual(arrA.sort(), arrB.sort())  //so sánh không quan tâm số thứ tự vị trí thì .sort()

    const arrObj1 = [{ id: 1, name: "Long" }, { id: 2, name: "Ngân" }]
    const arrObj2 = [{ id: 1, name: "Long" }, { id: 2, name: "Ngân" }]

    const resultObj = _.differenceWith(arrObj1, arrObj2, _.isEqual)

    console.log(resultObj)

    return (
        <div>

        </div>
    );
}

export default CompareObjectArray;