import React from "react";
import PropTypes from "prop-types";
import {Card, CardContent, CardDescription, Icon } from "semantic-ui-react";

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
            <Icon name='thumbs up outline' /> {props.upvote}
            </Card.Content>
        </Card>
    )
}

Card.propTypes = {
    name:PropTypes.string,
    description:PropTypes.string,
    upvote:PropTypes.number
}

Card.defaultProps = {
    name:"Default Title",
    description: "Default Description",
    upvote:0
}
