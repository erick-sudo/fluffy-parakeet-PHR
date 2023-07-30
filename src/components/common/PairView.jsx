import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

const PairView = ({ k, v, classes="", newStyles, h = false}) => {

    const { darkMode } = useContext(AuthContext)

    return (
        <ListGroup className="mb-2" data-bs-theme={`${darkMode && "dark"}`} as="div" horizontal={h} style={{width: "100%", borderRadius: "0"}}>
            <ListGroupItem style={newStyles} className={`${ h ? "w-1/2" : "w-full"}`}><span className={`${classes}`}>{k}</span></ListGroupItem>
            <ListGroupItem style={newStyles} className={`p-0 input_group text-sm ${ h ? "w-1/2" : "w-full"}`}>{v}</ListGroupItem>
        </ListGroup>
    )
}

export default PairView;