/**
 * Composant notifications
 */
import React from "react";
import PropTypes from "prop-types";
import { useLocale } from "exports/texts.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

// Notification sur la validité de l'app
const Notification = React.forwardRef((props, ref) => {
  const { isAvailable } = props;
  const locales = useLocale();

  return (
    <SnackbarContent
      message={
        <span>
          <b>ALERT:</b>{" "}
          {isAvailable
            ? locales.notifications.available
            : locales.notifications.unavailable}
        </span>
      }
      close
      color={isAvailable ? "success" : "danger"}
      icon={isAvailable ? Check : "info_outline"}
    />
  );
});

Notification.propTypes = {
  isAvailable: PropTypes.bool,
};

export default Notification;

// Notification sur le chargement
export function NotificationLoading(props) {
  const locales = useLocale();
  return (
    <SnackbarContent
      message={
        <span>
          <b>INFO:</b> {locales.notifications.loading}
        </span>
      }
      close
      color="info"
      icon="info_outline"
    />
  );
}
