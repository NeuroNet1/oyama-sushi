import React from 'react';

// Helper para crear componentes SVG en React
export function createSvgComponent(svgString: string) {
  return function SvgComponent(props) {
    return (
      <span 
        {...props}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    );  
  };
}

const addModerator_raw = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Zm180 334h40v-100h100v-40H700v-100h-40v100H560v40h100v100Z"/></svg>`;
const add_raw = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;
import chefPortrait from "./chef-portrait.jpg";
import dishNigiri from "./dish-nigiri.jpg";
import dishRamen from "./dish-ramen.jpg";
import dishRoll from "./dish-roll.jpg";
import heroChef from "./hero-chef.jpg";
import oyama from "./oyama.png";
import restaurantInterior from "./restaurant-interior.jpg";
import whatapp from "./whatapp.png";

export default {
  addModerator: createSvgComponent(addModerator_raw),
  add: createSvgComponent(add_raw),
  chefPortrait,
  dishNigiri,
  dishRamen,
  dishRoll,
  heroChef,
  oyama,
  restaurantInterior,
  whatapp,
};
