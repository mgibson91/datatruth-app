export const getMedalBreakdown = async (year: number, sortColumn: string, sortDirection: string): Promise<any> => {
  const result = await fetch(
    // `https://europe-west2-property-insight-ai.cloudfunctions.net/get_medal_breakdown?year=${year}&sort_field=${sortColumn}&sort_direction=${sortDirection}`
    `http://localhost:8080?year=${year}&sort_field=${sortColumn}&sort_direction=${sortDirection}`
  );

  return await result.json();
}