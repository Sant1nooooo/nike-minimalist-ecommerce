export function convertNumber(price)
{
  const fixedPrice = parseFloat(price).toFixed(2);
  
  const formattedPrice = parseFloat(fixedPrice).toLocaleString();

  return formattedPrice;
}