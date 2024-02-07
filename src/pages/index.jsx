import SEO from "../common/seo";
import HomeOne from "../components/homes/home-2";
import HomeTwo from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"TeQsify"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default Home;
