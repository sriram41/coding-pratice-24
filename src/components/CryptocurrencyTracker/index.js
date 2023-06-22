// Write your code here
// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchData = await response.json()

    this.setstate({
      cryptocurrenciesData: fetchData.map(eachCryptocurrency => ({
        id: eachCryptocurrency.id,
        currencyLogoUrl: eachCryptocurrency.currency_logo,
        currencyName: eachCryptocurrency.current_name,
        usdValue: eachCryptocurrency.usd_value,
        euroValue: eachCryptocurrency.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
