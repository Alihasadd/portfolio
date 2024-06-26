import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { countryScales, countryYears, countryPhrase } from "../Data/Countries";

function Worldmap() {
  return (
    <div className="rounded-lg h-full">
      <div className=" bg-blue-500 flex justify-center size-full">
        <VectorMap
          map={worldMill}
          color="red"
          onRegionTipShow={function reginalTip(event, label, code) {
            return label.html(`
                    <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                      <p>
                      <b>
                      ${label.html()}
                      </b>
                      </p>
                      <p>
                      ${countryYears[code] || ""}
                      </p>
                      <p style="padding-top: 5px;">
                      ${countryPhrase[code] ? `Favorite phrase: ${countryPhrase[code]}`: ""}
                      </p>
                      </div>`);
          }}
          series={{
            regions: [
              {
                values: countryScales,
                min: 0,
                max: 5,
                scale: ["#C8EEFF", "#0071A4"],
                //normalizeFunction: 'polynomial',
                legend: {
                  horizontal: true,
                  cssClass: 'jvectormap-legend-icons',
                  title: 'Visits'
                }
              },
              
              
            ],
            
          }}
        />
      </div>
    </div>
  );
}

export default Worldmap;
