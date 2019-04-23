import React from 'react';
import Header from './header'
import PageTitle from './pageTitle'
import Content from './content'
import './App.css'

const App = () => {
  return (
    <>
      <Header/>
      <PageTitle />
      <div style={{ minHeight: '75vh', margin: '40px 0', display: 'grid', gridTemplateColumns: 'minmax(24px,auto) minmax(auto,1200px) minmax(24px,auto)', gridTemplateRows: '100px auto', gridRowGap: '26px' }} >
            <div></div>
            <div>
              <Content/>
            </div>
            <div></div>
        </div>
      <div className="footer">
        <a href="https://elinsoftware.com" target="_blank" rel="noopener noreferrer" className="footerLink">Powered by ELIN Software</a>
      </div>
    </>
  )
}

export default App;