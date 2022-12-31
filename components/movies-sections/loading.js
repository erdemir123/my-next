import React from "react";
import { Skeleton } from "../../components/skeleton";
import styles from "./styles.module.css";

function MoviesLoading() {
  return (
    <div className={styles.moviesSection}>
        <Skeleton width={128} height={36} />
        <div className={styles.movies}>
        {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={172} />
        ))}
        </div>
      
    </div>
  );
}

export { MoviesLoading };