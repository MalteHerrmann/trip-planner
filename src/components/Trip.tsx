import React from 'react';


const TripPlan = () => {
    return (
        <>
            <Trip name="New York" begin="05-28-2022" end="05-05-2022"/>
            <Trip name="Harvard" begin="06-05-2022"/>
            <Trip name="Boston" begin="06-06-2022" end="06-11-2022" />
            <AddTripButton />
        </>
    )
}


interface TripProps {
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
    console.log("Duration string: ", durationString)
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
