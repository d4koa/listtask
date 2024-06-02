import React from "react"
import Button from "./Button"
import "../styles/EditModal.css"

class EditModal extends React.Component {
  render() {
    const { edit, close, data, setField, update } = this.props;
    if (edit) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Task</h3>
            <div className="input">
              <input
                type="text"
                defaultValue={data.title}
                onChange={(e) => setField('title', e.target.value)}
              />
              <input
                type="text"
                defaultValue={data.description}
                onChange={(e) => setField('description', e.target.value)}
              />
              <input
                type="date"
                defaultValue={data.date}
                onChange={(e) => setField('date', e.target.value)}
              />
            </div>
            <div className="btn-group">
              <Button text="ok" variant="success" action={update} />
              <Button text="cancel" variant="warning" action={close} />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default EditModal;
