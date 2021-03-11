import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { Info, Description, Link as IconLink } from "@material-ui/icons";
import { FaviconUrl } from "services/FaviconUrl.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { Locales } from "exports/texts.js";
import { ApiLoader } from "services/PublicApisLoader.js";
import { v1 as uuid } from 'uuid';

const useStyles = makeStyles(styles);

export default function ApiOverview(props) {
  const { api, isOverview } = props;
  const classes = useStyles();
  const refImg = useRef(null);
  const idImg = (api.API.replace(' ','').toLowerCase().trim()+'-'+uuid()); 
  const favicon = (
    <img
      ref={refImg}
      id={idImg}
      src={FaviconUrl(api.Link)}
      alt={api.API}
      className={classes.imgRoundedCircle + " " + classes.imgFluid}
    />
  );
  const [isLoading, setIsLoading] = useState(false);
  const [colorHeader] = useState("primary");
  const [description, setDescription] = useState(api.Description);
  useEffect(() => {
    ApiLoader.Translate(description)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("Translation OK:", result);
          if (result.translation) {
            setDescription(result.translation);
          }
          setIsLoading(false);
        },
        (error) => {
          console.log("Translation ERROR", error);
          setIsLoading(false);
        }
      );
    
  }, [description,isLoading]);

  return (
    <GridItem xs={12} sm={12} md={6}>
      {isLoading?"Loading Translations":""}
      <h3 style={{ marginLeft: "15px" }}>
        {isOverview ? (
          <Link
            to={{ pathname: "/entry", state: { api: api } }}
            className={classes.dropdownLink}>
            {favicon}
            <small style={{ marginLeft: "10px" }}>
              {api.API} <IconLink style={{ verticalAlign: "sub" }} />
            </small>
          </Link>
        ) : (
          <span>
            {favicon} <small style={{ marginLeft: "10px" }}>{api.API}</small>
          </span>
        )}
      </h3>
      <CustomTabs
        headerColor={colorHeader}
        tabs={[
          {
            tabName: "Description",
            tabIcon: Description,
            tabContent: (
              <p className={classes.textCenter}>
                {Locales.instance.isFR ? api.Description : api.Description}
              </p>
            ),
          },
          {
            tabName: "Infos",
            tabIcon: Info,
            tabContent: (
              <div>
                {isOverview ? (
                  <div>
                    Category: <Badge color="info">{api.Category}</Badge>
                  </div>
                ) : (
                  <span></span>
                )}
                <div>Auth: {api.Auth}</div>
                <div>HTTPS: {api.HTTPS}</div>
                <div>Cors: {api.Cors}</div>
                <div>
                  Link:{" "}
                  <a
                    href={api.Link}
                    target="_blank"
                    className={classes.dropdownLink}
                    rel="noopener noreferrer">                    
                    <IconLink
                      className={classes.icons}
                      style={{ verticalAlign: "bottom" }}
                    />{" "}
                    {api.Link}
                  </a>
                </div>
              </div>
            ),
          },
        ]}
      />
    </GridItem>
  );
}
ApiOverview.defaultProps = {
  isOverview: true,
  api: {
    API: null,
    Description: null,
    Category: null,
    Auth: false,
    HTTPS: false,
    Cors: false,
    Link: null,
  },
};
ApiOverview.propTypes = {
  isOverview: PropTypes.bool,
  api: PropTypes.object,
};
