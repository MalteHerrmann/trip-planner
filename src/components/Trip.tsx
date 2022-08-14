import React from 'react';
import data from '../data.json';
import AddTripBox from './AddTripBox'

/**
 * TripPlan build the component to display the information
 * for a given trip plan, which contains several distinct trips.
 * It also contains a button to add a new destination for the current trip.
 */
const TripPlan = () => {
    let initialTripData = data["Trip 1"]
    let [tripData, setTripData] = React.useState(initialTripData)

    return (
        <>
            {tripData.map(tripInfo =>
                <Trip 
                    name={tripInfo["destination"]}
                    begin={tripInfo["begin"]} 
                    end={tripInfo["end"]} 
                />
            )}
            <AddTripBox tripData={tripData} setTripData={setTripData}/>
        </>
    )
}


/**
 * TripProps defines an interface, containing all relevant
 * information for a trip.
 */
interface TripProps {
    name:string;
    begin:string;
    end?:string;
}


/**
 * The Trip component combines the TripDestination and TripDuration
 * components.
 */
const Trip: React.FC<TripProps> = props => {
    let begin = props.begin;
    let end = props.end ? props.end : begin;

    return (
        <div className="TripContainer">
            <TripDestination name={props.name} />
            <TripDuration begin={begin} end={end} />
        </div>
    )
}


/**
 * DestinationProps is an interface, to define the
 * attributes for the destination.
 */
interface DestinationProps {
    // Name of the destination / city / ...
    name:string;
}


/**
 * TripDestination contains the information about the destination of the
 * given trip.
 */
const TripDestination: React.FC<DestinationProps> = props => {
    let name = props.name

    return (
        <div className="TripDestinationContainer">
            <h2>{name}</h2>
        </div>
    )      
}


/**
 * DurationProps is an interface, to define the
 * attributes for the duration of a trip.
 */
interface DurationProps {
    begin:string;
    end?:string;
}


/**
 * TripDuration contains the information about the duration of the
 * given trip.
 */
const TripDuration: React.FC<DurationProps> = props => {
    let durationString = props.end !== "" ? props.begin + " - " + props.end : props.begin

    return (
        <span>{durationString}</span>
    )
}


export default TripPlan;
