import React, { Fragmaent } from 'react';

const Loader = ({stylling, loadingMsg}) => {
    return (
       <Fragment>
           <div className="Loader">
               <p style={stylling}>
                   { loadingMsg}
               </p>
           </div>
       </Fragment>
    )
}

export default Loader
