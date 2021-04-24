import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Buddha Park",
    imageUrl:
      "https://images.unsplash.com/photo-1573398643424-3c49652d7756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    address: "ravangla, sikkim",
    description:
      "Lush gardens with mountain views, plus broad steps up to a bronze Buddha statue dating from 2006.",
    location: {
      lat: 27.3143623,
      lng: 88.3632705,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Buddha Park",
    imageUrl:
      "https://images.unsplash.com/photo-1573398643424-3c49652d7756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    address: "ravangla, sikkim",
    description:
      "Lush gardens with mountain views, plus broad steps up to a bronze Buddha statue dating from 2006.",
    location: {
      lat: 27.3143623,
      lng: 88.3632705,
    },
    creatorId: "u2",
  },
];
function UserPlaces() {
  return <PlaceList items={DUMMY_DATA} />;
}

export default UserPlaces;
