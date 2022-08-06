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
    const defaultData: {[key: string]: string} = {destination: "TestDest", beginning: "101", end: ""} // Assign indexing type using {[key: indexType]: storedValueType}
    const [tripData, setTripData] = React.useState(defaultData)

    const insertIntoTripData = (name:string, event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log("New value for " + name + ": " + value)
        let newTripData = tripData
        console.log("Data pre: ", tripData)
        newTripData[name] = value
        console.log("Date neu: ", newTripData)
        setTripData(newTripData)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("handleSubmit with data: ", tripData)
        console.log("Setting data back to default: ", defaultData)
        setTripData(defaultData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Destination" value={tripData["destination"]} onChange={event => insertIntoTripData("destination", event)} />
            <input type="text" placeholder="Beginning" value={tripData["beginning"]} onChange={event => insertIntoTripData("beginning", event)} />
            <input type="text" placeholder="End" value={tripData["end"]} onChange={event => insertIntoTripData("end", event)} />

            <button type="submit">
                Add to trip
            </button>
        </form>
    )
}


export default AddTripBox
