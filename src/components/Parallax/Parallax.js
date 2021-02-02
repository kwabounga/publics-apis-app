import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle.js";
import sample from "assets/vid/free_video_cyber_security_background-720p.mp4";
import 'assets/css/video.css';
const useStyles = makeStyles(styles);

export default function Parallax(props) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    toggleVideo();
    window.addEventListener("resize", toggleVideo);
    
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const toggleVideo = () => {
    if (window.innerWidth >= 1410) {
      document.getElementById('video').classList.add('hidden');
    }else{
      document.getElementById('video').classList.remove('hidden');
    }
  };
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
        paddingTop: 0,
      }}>
      {children}
      <video
        id='video'
        className={parallaxClasses}
        autoPlay
        loop
        muted
        style={{
          ...style,
          height: "100%",
          // width: "100%",
          top: 0,
          // left: 0,
          marginLeft:"auto",
          marginRight:"auto",
          position: "absolute",
          overflow: "hidden",
          zIndex: -5,
          direction: "ltr",
          transform: transform,
        }}>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};
