import React from 'react'
import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'
import Heading from '../partials/Heading'
import ItemsTable from './ItemsTable'



const Items = () => {
  return (
    <section className="flex  min-h-screen bg-secondary">
    <a className="bg-primary text-dark basis-[200px] border-r border-line">
      <Navigation menu = "items" />
    </a>
    <main className="basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
      <Heading title='ITEMS' subtitle='Manage Items List' />
      <ItemsTable/>
      <div></div>
      
      <Footer />
    </main>
  </section>
  )
}

export default Items