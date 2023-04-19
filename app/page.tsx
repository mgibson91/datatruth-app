import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import { Table } from '@mui/material';
import OpTable from "@/components/op-table";

const data = [
  {
    "country": "Afghanistan",
    "population": 32526562.0,
    "gdp_per_capita": 594.32308122,
    "bronze_count": 1.0,
    "gold_count": 0.0,
    "silver_count": 0.0,
    "total_count": 1.0,
    "population_adjusted_performance": 0.002982,
    "gdp_adjusted_performance": 0.029511
  },
  {
    "country": "Algeria",
    "population": 39666519.0,
    "gdp_per_capita": 4206.0312324496,
    "bronze_count": 0.0,
    "gold_count": 1.0,
    "silver_count": 0.0,
    "total_count": 1.0,
    "population_adjusted_performance": 0.002446,
    "gdp_adjusted_performance": 0.003419
  }
];

const columns = [
  { id: 'country', label: 'Country' },
  { id: 'population', label: 'Population' },
  { id: 'gdp_per_capita', label: 'GDP per capita' },
  { id: 'bronze_count', label: 'Bronze count' },
  { id: 'gold_count', label: 'Gold count' },
  { id: 'silver_count', label: 'Silver count' },
  { id: 'total_count', label: 'Total count' },
  { id: 'population_adjusted_performance', label: 'Population adjusted performance' },
  { id: 'gdp_adjusted_performance', label: 'GDP adjusted performance' },
];

export default async function Home() {
  const medalBreakdown = await fetch(
    'https://us-central1-property-insight-ai.cloudfunctions.net/get_medal_breakdown')
    .then((res) => res.json());

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Discover what makes champions</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Providing high quality insights into Olympic performance
          </Balancer>
        </p>
      </div>

      <div className='z-10 pt-10'>
        <OpTable columns={columns} rows={medalBreakdown} />
      </div>

    </>
  );
}

