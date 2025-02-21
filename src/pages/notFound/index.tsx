import { JSX } from "react";
import Layout from "../../layout";
import styles from "./notFound.module.scss";

export const NotFoundPage = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <img className={styles.notFound} src="404.png" />
        <h5>The requested page is not available.</h5>
        <div>
          Unfortunately, an error occurred while transferring your request.
        </div>
        <div>
          <a href="/">First Pge</a>
        </div>
      </div>
    </Layout>
  );
};
