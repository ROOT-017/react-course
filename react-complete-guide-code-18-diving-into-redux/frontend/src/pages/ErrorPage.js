import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();

  let message = "An error occured";
  let title = "Somthing went wrong";

  if ((error.status = "500")) {
    message = error.data.message;
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;
