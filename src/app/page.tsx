import Customers from "../app/components/stratman/Customers";
import Hero from "../app/components/stratman/Hero";
import Trends from "../app/components/stratman/Trends";
import ChartAanalysis from "../app/components/stratman/ChartAanalysis";
import Dashboard from "../app/components/stratman/Dashboard";
export default function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <Trends />
      <ChartAanalysis />
      <Dashboard />
    </>
  );
}
