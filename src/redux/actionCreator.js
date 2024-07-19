export function changeFilter(newFilter)
{
  return { type: 'filter/changeFilter', payload: {filter: newFilter} }
}