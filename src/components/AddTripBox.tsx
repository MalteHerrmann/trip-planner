import React from 'react';


/**
 * Component, which contains the box where a new trip can be defined,
 * as well as a button to fold / unfold this box.
 */
const AddTripBox: React.FC<{}> = () => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className="AddTripBoxContainer">
            <button className="AddButton" onClick={() => setVisible(!visible)}>
                +
            </button>
            {visible && <AddTripDialog />}
        </div>
    )
}


/**
 * Component, that contains a fieldset and the respective inputs for 
 * the information about a new trip.
 */
const AddTripDialog: React.FC<{}> = () => {
    const [destination, setDestination] = React.useState("")
    const [beginning, setBeginning] = React.useState("")
    const [end, setEnd] = React.useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setDestination("")
        setBeginning("")
        setEnd("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Destination" value={destination} onChange={event => setDestination(event.target.value)} />
            <input type="text" placeholder="Beginning" value={beginning} onChange={event => setBeginning(event.target.value)} />
            <input type="text" placeholder="End" value={end} onChange={event => setEnd(event.target.value)} />

            <button type="submit">
                Add to trip
            </button>
        </form>
    )
}


export default AddTripBox
