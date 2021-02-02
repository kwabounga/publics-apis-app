/**
 * Lien de la navigation
 */
import React from "react";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { Apps, GitHub, Shuffle, AllInclusive, Category,Home } from "@material-ui/icons";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { Locales, useLocale } from "exports/texts.js";
import { cst } from "exports/const";
import { v1 as uuid } from 'uuid';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [isFr, setIsFr] = React.useState(Locales.instance.isFR);
  const locales = useLocale();
  // set une key unique pour forcer le rechargement de la page random
  const randomLink = {
    pathname: "/random",
    key: uuid(), 
    state: {
      applied: true
    }
  };
  return (
    <List className={classes.list}>
      {/* dropdown principal */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={locales.nav.main.label}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <Home className={classes.icons} style={{verticalAlign: 'sub'}}/> {locales.nav.main.sub.hom}
          </Link>,
          <Link to="/categories" className={classes.dropdownLink}>
          <Category className={classes.icons} style={{verticalAlign: 'sub'}}/> {locales.nav.main.sub.cat}
        </Link>,
            <Link to="/all" className={classes.dropdownLink}>
              <AllInclusive className={classes.icons} style={{verticalAlign: 'sub'}}/> {locales.nav.main.sub.all}
            </Link>,
            
            <Link to={randomLink} className={classes.dropdownLink}>
              <Shuffle className={classes.icons} style={{verticalAlign: 'sub'}}/> {locales.nav.main.sub.ran}
            </Link>,
            <a
              href={cst.urls.api.publicApisRef}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.dropdownLink}
            >
              <GitHub className={classes.icons} style={{verticalAlign: 'sub'}}/> {locales.nav.references.label}
            </a>,

          
          ]}
        />
      </ListItem>
      {/* github link */}      
      <ListItem className={classes.listItem}>
        <Button
          href={cst.urls.me.github}
          color="transparent"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
        >
          <GitHub className={classes.icons} /> {locales.nav.github.label}
        </Button>
      </ListItem>
      {/* twitter */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={locales.nav.twitter.toolTip}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href={cst.urls.me.twitter}
            target="_blank"
            rel="noopener noreferrer"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " " + locales.nav.twitter.icon} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* facebook */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title={locales.nav.facebook.toolTip}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href={cst.urls.me.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " " + locales.nav.facebook.icon} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* mail */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title={locales.nav.mail.toolTip}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href={cst.urls.me.mail}
            target="_blank"
            className={classes.navLink}
            rel="noopener noreferrer"
          >
            <i className={classes.socialIcons + " " + locales.nav.mail.icon} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* languages */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="language-tooltip"
          title={locales.nav.toggleLanguage.toolTip}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <span className={classes.navLink} style={{padding:'0.45em'}}>
          <Switch
            checked={isFr}
            onChange={event => {
              if(isFr){
                Locales.instance.setEN();
              }else{
                Locales.instance.setFR();
              }
              setIsFr(Locales.instance.isFR)
            }}
            value="isFr"
            classes={{
              switchBase: classes.switchBase,
              checked: classes.switchChecked,
              thumb: classes.switchIcon,
              track: classes.switchBar,
            }}
          /> <span style={{alignSelf: 'center'}}>{isFr?'FR':'EN'}</span></span>
        </Tooltip>
      </ListItem>
    </List>
  );
}
