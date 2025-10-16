import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperLindsay = () => {
  const cityData = {
    city: "Lindsay",
    region: "ON",
    county: "Kawartha Lakes",
    ga4Prefix: "lindsay",
    businessUrl: "https://ironleaftechnology.com/web-developer-lindsay",
    areaServed: ["Lindsay", "Kawartha Lakes", "Ontario"]
  };

  return <LocalSEOPage {...cityData} />;
};

export default WebDeveloperLindsay;