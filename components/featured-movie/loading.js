import React from "react";
import  Loading  from "../../components/Loading"
import styles from "./styles.module.css";

function FeatureMovieLoading () {
  return (
    <div style={{ height: 250,width:250 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };