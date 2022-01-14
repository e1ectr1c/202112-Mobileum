import React from 'react';


const Cell = ({value,onCellClick,id}) => {

    let handleCellClick=() => onCellClick(id);

    let style={};

    if(value!=='_'){
        style.cursor='not-allowed';
        handleCellClick=null; //no event will be triggered.
    };

    //console.log('style: ',id, style);
    return (
        <button className='cell' style={style}
            onClick={handleCellClick}>
            {value}
        </button>
    );

}


export default Cell;