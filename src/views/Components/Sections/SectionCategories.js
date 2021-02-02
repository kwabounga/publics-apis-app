/**
 * Composant Catégories
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { useLocale } from "exports/texts.js";
const useStyles = makeStyles(styles);

export default function SectionCategories(props) {
  const { allCats } = props;
  const classes = useStyles();
  const locales = useLocale();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="explanation">
          <div className={classes.typo}>
            <h1>{locales.nav.main.sub.cat}</h1>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              {allCats.map((value, i) => {
                return (
                  <Link
                    key={value + "-" + i}
                    to={`/categories/${value}`}
                    className={classes.dropdownLink}>
                    <Button color="info" size="lg">
                      {value}
                    </Button>
                  </Link>
                );
              })}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.space50} />
    </div>
  );
}
