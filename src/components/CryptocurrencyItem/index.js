// Write your JS code here
// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDetails

  return (
    <li>
      <div data-testid="loader">
        <img src={currencyLogoUrl} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
