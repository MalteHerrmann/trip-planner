import React from 'react';
import data from '../data.json';


const TripPlan = () => {
    let tripData = data["Trip 1"]
    tripData.forEach(tripInfo => { 
        if (!tripInfo["end"]) {
            tripInfo["end"] = tripInfo["begin"]
        }
     })

    return (
        <>
            {tripData.map(tripInfo => 
                <Trip 
                    key={tripInfo["id"]} 
                    name={tripInfo["destination"]} 
                    begin={tripInfo["begin"]} 
                    end={tripInfo["end"]} 
                />
            )}
            <AddTripButton />
        </>
    )
}


interface TripProps {
    key:string;
    name:string;
    begin:string;
    end?:string;
}


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


interface DestinationProps {
    // Name of the destination / city / ...
    name:string;
}


const TripDestination: React.FC<DestinationProps> = props => {
    let name = props.name

    return (
        <div className="TripDestinationContainer">
            <h2>{name}</h2>
        </div>
    )      
}


interface DurationProps {
    begin:string;
    end?:string;
}


const TripDuration: React.FC<DurationProps> = props => {
    let durationString = props.end !== "" ? props.begin + " - " + props.end : props.begin

    return (
        <span>{durationString}</span>
    )
}


const AddTripButton: React.FC<{}> = () => {
    return (
        <button className="AddButton" onClick={() => console.log("Hier.")}>
            +
        </button>
    )
}


export default TripPlan;
