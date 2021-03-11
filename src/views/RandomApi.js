/**
 * Affichage d'une API Random
 */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ApiLoader } from "services/PublicApisLoader.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import MainStructure from "views/Components/MainStructure.js";
import ApiOverview from "views/Components/ApiOverview.js";
import { useLoading, Oval } from "@agney/react-loading";
import { cst } from "exports/const";

const useStyles = makeStyles(styles);

function AllApis(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [randomApi, setRandomApi] = useState({});
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });
  const [img, setImg] = useState(null);
  useEffect(() => {
    ApiLoader.Random()
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("[OK] Random Entry:", result);
          setRandomApi(result.entries);
          setImg(
            <img
              src={`${cst.urls.api.urlToImg}${result.entries[0].Link}`}
              className={classes.imgRounded + " " + classes.imgFluid}
              alt="screenshot"
            />
          );
          setIsLoading(false);
        },
        (error) => {
          console.log("[ERROR] Random Entry", error);
          setIsLoading(false);
        }
      );
  },[isLoading]);

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
          {randomApi.map((api, i) => {
            return (
              <ApiOverview
                key={api.Category + "-" + i}
                api={api}
                isOverview={false}
              />
            );
          })}
          <GridItem xs={12} sm={12} md={6}>
            {img}
          </GridItem>
        </GridContainer>
      )}
    </MainStructure>
  );
}

export default AllApis;
