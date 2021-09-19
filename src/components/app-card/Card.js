import React from "react";
import PropTypes from "prop-types";
import {Card } from "semantic-ui-react";

export const CommonCard = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                <Card.Meta>{props.tags}</Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {props.extraContent}
            </Card.Content>
        </Card>
    )
}

CommonCard.propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
    upvote:PropTypes.number,
    tags:PropTypes.string
}

CommonCard.defaultProps = {
    title:"Default Title",
    description: "Default Description",
    upvote:0
}
