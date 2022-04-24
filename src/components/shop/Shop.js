import React from 'react';
import FixedBottomNavigation from '../BottomNavigation';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import SelectionBar from './SelectionBar';

export default function Shop() {
  return (
    <div>
        <PrimarySearchAppBar/>
        <SelectionBar/>
        {/* <FixedBottomNavigation/> */}
    </div>
  )
}
