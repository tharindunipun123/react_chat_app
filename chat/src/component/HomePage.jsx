import React from "react"

function MainHome(props){

    var name= props.name;
     return(
        <>
        <p>Hello world</p>
        {name}
        </>
     )
}

export default MainHome;