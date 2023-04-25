'use client';

import Balancer from "react-wrap-balancer";
import OpTable from "@/components/op-table";
import {useEffect, useState} from "react";
import OpSelect from "@/components/op-select";
import OpLoading from "@/components/op-loading";
import {getMedalBreakdown} from "../api/get-medal-breakdown";

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

const SORT_ITEMS = columns.map((column) => ({  value: column.id, label: column.label }));

const YEARS = [
  { value: 2004, label: '2004' },
  { value: 2008, label: '2008' },
  { value: 2012, label: '2012' },
]

export default function Home() {
  const [medalBreakdown, setMedalBreakdown] = useState([]);

  const [year, setYear] = useState(2012);
  const [sortColumn, setSortColumn] = useState('country');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    getMedalBreakdown(year, sortColumn, sortDirection)
      .then(async (res) => {
        setMedalBreakdown(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [year, sortColumn, sortDirection]);

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

      {!medalBreakdown.length && (
        <div className='z-10 pt-32 w-64'>
          <OpLoading></OpLoading>
        </div>
      )}

      {medalBreakdown.length && (<div className='z-10 pt-10 flex flex-col'>
        <div className='flex-none flex flex-row justify-end pb-5 gap-3'>
          <OpSelect label='Year' defaultValue={2012} items={YEARS} onItemSelected={(event) => setYear((event as any).target?.value)}></OpSelect>
          <OpSelect label='Sort by' defaultValue='population_adjusted_performance' items={SORT_ITEMS} onItemSelected={(event) => setSortColumn((event as any).target?.value)}></OpSelect>
          <OpSelect label='Direction' defaultValue='desc' items={[ { label: 'Ascending', value: 'asc' }, { label: 'Descending', value: 'desc' }]} onItemSelected={(event) => setSortDirection((event as any).target?.value)}></OpSelect>
        </div>
        <OpTable columns={columns} rows={medalBreakdown} />
      </div>)}

    </>
  )
}

