import { Card, Row, Col, Input } from 'antd';
import millify from 'millify';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //검색 필터링 신기하넹.. 
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coins) => coins.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptosList, searchTerm])
  
  if(isFetching) return 'Loading... ';

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
        <Input placeholder='Search Crypto' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      )}
      <div>
        <Row gutter={[32, 32]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card 
                  title={`${currency.rank}.${currency.name}`} 
                  extra={<img className='crypto-image' src={currency.iconUrl} />}
                  hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Chnage: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Cryptocurrencies