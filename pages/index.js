import Header from "../Component/Header/Header";
import SubHeader from "../Component/SubHeader/SubHeader";
import PageHome from "../Component/Home/PageHome";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/Home/Banner";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <SubHeader></SubHeader>
      <Banner></Banner>
      <PageHome></PageHome>
      <Footer></Footer>
    </div>
  );
}
