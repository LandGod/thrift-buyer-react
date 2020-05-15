import React, { useMemo } from "react";
import "./styles.css";

interface RatingBoxProps {
    type?: 'stars' | 'price'; // Default 'stars'
    intialScore?: number;  // Default undefined
    userCanEdit?: boolean;  // Default undefined (false)
}



export default function RatingBox ( { type='stars' }:RatingBoxProps ) {
    
}