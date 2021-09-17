import React from "react";
import { Button, Modal } from "semantic-ui-react";

export const FormModal = (props) => {
    return (
        <Modal size="small" dimmer={"blurring"} open={props.isActive}>
            <Modal.Header>{props.header}</Modal.Header>
            <Modal.Content>
                {props.children}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button content={props.saveButton} onClick={props.onSave} primary></Button>
            </Modal.Actions>
        </Modal>
    )
}