import Banner from "./Banner";
import TrendingNow from "./TrendingNow"
import WatchItAgain from "./WatchItAgain"
import NewReleases from "./NewReleases"
import { Container } from "react-bootstrap";

const HomePage = () =>{
    return(
    <>
      <Container fluid className="px-4">
        <Banner />
        <TrendingNow />
        <WatchItAgain />
        <NewReleases />
      </Container>
      </>
    )
}

export default HomePage;