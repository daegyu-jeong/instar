import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";i

import styled from "styled-components";


const Card_list = () => {

    return (
        <div>
            <Card>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Writer>작성자</Card.Writer>
                    <Card.Text>
                        내용
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">7초전</small>
                </Card.Footer>
            </Card>

            <Link to="/AddCard">
                <ADDBUTTON>+</ADDBUTTON>
            </Link>
        </div>
    )
}

const ADDBUTTON = styled.button`
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: 50px;
    height: 50px;
    border-radius: 50px;
`

export default Card_list