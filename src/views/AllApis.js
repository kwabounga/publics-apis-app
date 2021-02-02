/**
 * Affichage de toutes les apis disponibles
 */

import React, { useEffect, useState } from "react";
import { ApiLoader } from "services/PublicApisLoader.js";
import GridContainer from "components/Grid/GridContainer.js";
import MainStructure from "views/Components/MainStructure.js";
import { useLoading, Oval } from "@agney/react-loading";
import ApiOverview from "views/Components/ApiOverview.js";

function AllApis(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [allApis, setAllApis] = useState([]);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });

  useEffect(() => {
    ApiLoader.AllApis()
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setAllApis(result.entries);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);
        }
      );
  });

  return (
    <MainStructure>
      {isLoading ? (
        <div className={"container"}>
          <section
            {...containerProps}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "50px",
              height: "15em",
              paddingTop: "3em",
            }}>
            {indicatorEl} {/* renders only while loading */}
          </section>
        </div>
      ) : (
        <GridContainer>
          {allApis.map((cat, i) => {
            return <ApiOverview  key={cat.Category + "-" + i} cat={cat} />;
          })}
        </GridContainer>
      )}
    </MainStructure>
  );
}

export default AllApis;
