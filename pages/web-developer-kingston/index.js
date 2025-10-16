import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperKingston = () => {
  const cityData = {
    city: "Kingston",
    region: "ON",
    county: "Frontenac County",
    ga4Prefix: "kingston",
    businessUrl: "https://ironleaftechnology.com/web-developer-kingston",
    areaServed: ["Kingston", "Frontenac County", "Ontario"]
  };

  return <LocalSEOPage {...cityData} />;
};

export default WebDeveloperKingston;