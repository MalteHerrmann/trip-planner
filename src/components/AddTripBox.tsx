import React from 'react';

/**
 * AddTripDialogProps defines an interface, containing the
 * necessary information to add a new destination to the
 * current trip.
 */
interface AddTripDialogProps {
    tripData: {destination: string, begin: string, end: string}[];
    setTripData: (tripData: {destination: string, begin: string, end: string}[]) => void;
}


/**
 * Component, which contains the box where a new trip can be defined,
 * as well as a button to fold / unfold this box.
 */
const AddTripBox: React.FC<AddTripDialogProps> = props => {
    const [visible, setVisible] = React.useState(false)

    return (
        <div className="AddTripBoxContainer">
            <button className="AddButton" onClick={() => setVisible(!visible)}>
                +
            </button>
            {visible && <AddTripDialog
                tripData={props.tripData}
                setTripData={props.setTripData}
            />}
        </div>
    )
}


/**
 * Component, that contains a fieldset and the respective inputs for
 * the information about a new trip.
 */
const AddTripDialog: React.FC<AddTripDialogProps> = props => {
    const [destination, setDestination] = React.useState("")
    const [beginning, setBeginning] = React.useState("")
    const [end, setEnd] = React.useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // TODO: Add new trip to the actual trip plan.
        //       This means, that the new data has to be passed
        //       AddTripDialog > AddTripBox > TripPlan
        event.preventDefault()

        props.setTripData([...props.tripData, {
            destination: destination,
            begin: beginning,
            end: end
        }])

        setDestination("")
        setBeginning("")
        setEnd("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Destination"
                type="text"
                value={destination}
                onChange={event => setDestination(event.target.value)}
            />
            <input placeholder="Beginning"
                type="text"
                value={beginning}
                onChange={event => setBeginning(event.target.value)}
            />
            <input placeholder="End"
                type="text"
                value={end}
                onChange={event => setEnd(event.target.value)}
            />

            <button type="submit">
                Add to trip
            </button>
        </form>
    )
}


export default AddTripBox
