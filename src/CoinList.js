import { useEffect, useState } from "react";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((coin) => {
        setCoins(coin);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>The Coins! : {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin, index) => {
            return (
              <li key={index}>
                {coin.name} {coin.symbol} : $ {coin.quotes.USD.price} (USD)
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CoinList;
