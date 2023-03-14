import React from 'react'
import Footer from './General/Footer';
import Header from './General/Header';
import Head from 'next/head'

export default function Layout({title, children}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            <main className='bg-primary container'>
                {children}
            </main>
            <Footer/>
        </>
    )
}
