/**
 * Composant home
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import Header from "components/Header/Header.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { cst } from "exports/const";

import {
  GitHub,
  Shuffle,
  AllInclusive,
  Category,
} from "@material-ui/icons";

import { useLocale } from "exports/texts.js";
const useStyles = makeStyles(styles);

export default function SectionHome() {
  const classes = useStyles();
  const locales = useLocale();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="explanation">
          <GridContainer>
            <div className={classes.typo}>
              <h1>{locales.header.title}</h1>
            </div>
            <div className={classes.typo}>
              <p>{locales.app.description}</p>
            </div>
          </GridContainer>
        </div>
      </div>
      <div className={classes.space50} />

      <div className={classes.container}>
        <div id="apis">
          <div className={classes.typo}>
            <h1>Sections</h1>
          </div>
          <GridContainer>
            
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>{locales.nav.main.sub.cat}</h3>
              </div>
              <Header
                brand="Go"
                color="info"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Link to="/categories" className={classes.dropdownLink}>
                        <Category className={classes.icons} />{" "}
                        {locales.nav.main.sub.cat}
                      </Link>
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>{locales.nav.main.sub.all}</h3>
              </div>
              <Header
                brand="Go"
                color="warning"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Link to="/all" className={classes.dropdownLink}>
                        <AllInclusive className={classes.icons} />{" "}
                        {locales.nav.main.sub.all}
                      </Link>
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>{locales.nav.main.sub.ran}</h3>
              </div>
              <Header
                brand="Go"
                color="rose"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Link to="/random" className={classes.dropdownLink}>
                        <Shuffle className={classes.icons} />{" "}
                        {locales.nav.main.sub.ran}
                      </Link>
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>{locales.nav.references.label}</h3>
              </div>
              <Header
                brand="Go"
                color="dark"
                leftLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                    <a
              href={cst.urls.api.publicApisRef}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.dropdownLink}
            >
              <GitHub className={classes.icons} /> {locales.nav.references.label}
            </a>
                    </ListItem>
                  </List>
                }
              />
            </GridItem>
          </GridContainer>
          <div className={classes.space50} />
        </div>
      </div>
    </div>
  );
}
