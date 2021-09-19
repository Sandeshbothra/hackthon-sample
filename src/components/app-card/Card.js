import React from "react";
import PropTypes from "prop-types";
import {Card, Icon } from "semantic-ui-react";

export const CommonCard = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
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
    name:PropTypes.string,
    description:PropTypes.string,
    upvote:PropTypes.number,
    tags:PropTypes.string
}

CommonCard.defaultProps = {
    name:"Default Title",
    description: "Default Description",
    upvote:0
}
