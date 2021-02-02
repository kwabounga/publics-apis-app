/** 
 * Structure globale des pages
 */

import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "views/Components/Header/HeaderLinks.js";
import Footer from "views/Components/Footer.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import assets from "exports/assets.js";
import { useLocale } from "exports/texts.js";

const useStyles = makeStyles(styles);

function MainStructure(props) {  
  const classes = useStyles();
  const { children, ...rest } = props;
  const locales = useLocale();

  return (
    <div>
      <Header
        brand={locales.header.title}
        rightLinks={<HeaderLinks/> }
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />    
      <Parallax image={assets.imgs.bg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{locales.header.title}</h1>
                <h3 className={classes.subtitle}>
                {locales.header.description}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>  
      <div className={classNames(classes.main, classes.mainRaised)}>
      {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainStructure;
