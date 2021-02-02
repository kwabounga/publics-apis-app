/**
 * Page Accueil
 */

import React, { useEffect, useState } from "react";
import { ApiLoader } from "./services/PublicApisLoader.js";
import SectionHome from "views/Components/Sections/SectionHome.js";
import /*Notification,*/ { NotificationLoading } from "views/Components/Notification.js";
import MainStructure from "views/Components/MainStructure.js";

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ApiLoader.Health()
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          // setAlive(result.alive);
          setIsLoading(false);
        },
        (error) => {
          // setAlive(false);
          setIsLoading(false);
        }
      );
  }, []);

  return (
    <MainStructure>
      {isLoading ? <NotificationLoading /> : ""}
      {/*<Notification isAvailable={isAlive}/> */}
      <SectionHome />
    </MainStructure>
  );
}

export default App;
