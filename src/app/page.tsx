import Customers from "../app/components/stratman/Customers";
import Hero from "../app/components/stratman/Hero";
import Trends from "../app/components/stratman/Trends";
import ChartAanalysis from "../app/components/stratman/ChartAanalysis";
import Testinomial from "../app/components/stratman/Testinomial";
import Dashboard from "../app/components/stratman/Dashboard";
import SearchMode from "../app/components/stratman/SearchMode";
import Copilot from "../app/components/stratman/Copilot";

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
    </>
  );
}
