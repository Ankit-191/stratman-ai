import Customers from "../app/components/stratman/Customers";
import Hero from "../app/components/stratman/Hero";
import Trends from "../app/components/stratman/Trends";
import ChartAanalysis from "../app/components/stratman/ChartAanalysis";
import Testinomial from "../app/components/stratman/Testinomial";
import Dashboard from "../app/components/stratman/Dashboard";
import SearchMode from "../app/components/stratman/SearchMode";
import Copilot from "../app/components/stratman/Copilot";
import Pricing from "../app/components/stratman/Pricing";
import NewsInsights from "../app/components/stratman/NewsInsights";
import Discover from "../app/components/stratman/Discover";
import Footer from "../app/components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <Trends />
      <ChartAanalysis />
      <Dashboard />
      <SearchMode />
      <Copilot />
      <Testinomial />
      <Pricing />
      <NewsInsights />
      <Discover />
      <Footer />
    </>
  );
}
