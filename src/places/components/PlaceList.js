import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>You don't have it. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.id}
          image={place.imageUrl}
          address={place.address}
          description={place.description}
          creatorId={place.creator}
          coordinates={place.location}
        />
        // place is created by a user and that user has an ID, thats why creatorId
      ))}
    </ul>
  );
}

export default PlaceList;
