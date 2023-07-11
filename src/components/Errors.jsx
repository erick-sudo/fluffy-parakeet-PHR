import React from "react";

function Errors({errors}) {

    return (
        <div>
        {
            errors.map((error, index) => {
                return <div className="text-red-500 text-sm" key={index}>{error}</div>
            })
        }
        </div>
    )
}

export default Errors;