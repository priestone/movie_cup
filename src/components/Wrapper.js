import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | 페이지</title>
    </Helmet>
  );
};

export default PageTitle;
