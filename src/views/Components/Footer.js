/**
 * Composant footer
 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { useLocale } from "exports/texts.js";
import { cst } from "exports/const";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const locales = useLocale();

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href={cst.urls.me.website}
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                JY Chaillou
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={cst.urls.me.cv}
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locales.footer.about}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={cst.urls.me.github}
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href={cst.urls.me.mail}
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , {locales.footer.madeWith}{" "}
          <Favorite className={classes.icon} /> {locales.footer.by}{" "}
          <a
            href={cst.urls.me.website}
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {locales.footer.who}
          </a>{" "}
          {locales.footer.for}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
