/**
 * Affichage des apis d'une catégorie
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ApiLoader } from "services/PublicApisLoader.js";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import MainStructure from "views/Components/MainStructure.js";
import ApiOverview from "views/Components/ApiOverview.js";
import { useLoading, Oval } from "@agney/react-loading";
const useStyles = makeStyles(styles);
function SelectedCategory(props) {
  const classes = useStyles();
  let { catId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });
  const [allApis, setAllApis] = useState([]);

  useEffect(() => {
    ApiLoader.SelectedCategory(catId)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("[OK] Get all entries of category:", result);
          setAllApis(result.entries);
          setIsLoading(false);
        },
        (error) => {
          console.log("[ERROR] Get all entries of category", error);
          setIsLoading(false);
        }
      );
  },[isLoading]);

  return (
    <MainStructure>
      {isLoading ? (
        <section {...containerProps}>
          {indicatorEl} {/* renders only while loading */}
        </section>
      ) : (
        <div className={classes.section}>
          <div className={classes.container}>
            <div id="explanation">
              <GridContainer>
                <div className={classes.typo}>
                  <h1>{catId}</h1>
                </div>
              </GridContainer>
            </div>
          </div>
          <div className={classes.space50} />
          <div className={classes.container}>
            <div id="categories">
              <GridContainer>
                {allApis.map((api, i) => {
                  return <ApiOverview key={api.Category + "-" + i} api={api} />;
                })}
              </GridContainer>
            </div>
          </div>
        </div>
      )}
    </MainStructure>
  );
}

export default SelectedCategory;
