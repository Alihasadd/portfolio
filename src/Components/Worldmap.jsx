import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { countryScales, countryYears, countryPhrase } from "../Data/Countries";

function Worldmap() {
  return (
    <div className="rounded-lg p-10">
      <div className=" bg-blue-500 flex justify-center h-96 size-full ">
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
                max: 100,
                scale: ["#C8EEFF", "#0071A4"],
                //normalizeFunction: 'polynomial'
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Worldmap;
