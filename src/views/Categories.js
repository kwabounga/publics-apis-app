/**
 * Affichage des Catégories
 */

import React, { useEffect, useState } from "react";
import { ApiLoader } from "services/PublicApisLoader.js";
import SectionCategories from "views/Components/Sections/SectionCategories.js";
import MainStructure from "views/Components/MainStructure.js";
import { useLoading, Oval } from "@agney/react-loading";

function Categories(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [allCats, setAllCats] = useState([]);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="50" />,
  });

  useEffect(() => {
    ApiLoader.Categories()
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("ALL CATs:", result);
          setAllCats(result);
          setIsLoading(false);
        },
        (error) => {
          console.log("FuckOff", error);
          setIsLoading(false);
        }
      );
  },[isLoading]);

  return (
    <MainStructure>
      {isLoading ? (
        <div className={"container"}>
          <section
            {...containerProps}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "50px",
              height: "15em",
              paddingTop: "3em",
            }}>
            {indicatorEl} {/* renders only while loading */}
          </section>
        </div>
      ) : (
        <SectionCategories allCats={allCats} />
      )}
    </MainStructure>
  );
}

export default Categories;
