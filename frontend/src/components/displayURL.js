import React from 'react'

function DisplayURL(props) {
    const isNewURL = props.newURL.length >0;
    if(isNewURL){
    return (
        <div>
            <p className="subtitle">Your new URL is:</p> 
            <a href={props.newURL}>{props.newURL}</a>
        </div>
    )
}else{
    return (
        <div>
        <p className="subtitle">
            Please enter a URL to shorten
        </p>       
        </div>
    )
}
}

export default DisplayURL
