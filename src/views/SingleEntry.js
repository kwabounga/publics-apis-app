/**
 * Affichage d'une API
 */
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import MainStructure from "views/Components/MainStructure.js";
import ApiOverview from "views/Components/ApiOverview.js";
import { cst } from "exports/const";

const useStyles = makeStyles(styles);

function SingleEntry(props) {
  const classes = useStyles();
  const [img, setImg] = useState(null);  
  const { location } = props;
  const api = location.state.api || null;

  // verification de la présence de l'objet api
  useEffect(() => {
    console.log("[TEST] api Exist?");
    if (!api) {
      console.log("[ERROR] NOT EXIST");
    } else {
      setImg(
        <img
          src={`${cst.urls.api.urlToImg}${api.Link}`}
          className={classes.imgRounded + " " + classes.imgFluid}
          alt='screenshot'
        />
      );
      console.log("[OK] EXIST");
    }
  }, [api,classes.imgRounded,classes.imgFluid]);
  if (api) {
    return (
      <MainStructure>
        <GridContainer>
          <ApiOverview api={api} isOverview={false} />
          <GridItem xs={12} sm={12} md={6}>
            {img}
          </GridItem>
        </GridContainer>
      </MainStructure>
    );
  } else {
    return <Redirect to="categories" />;
  }
}

export default SingleEntry;
