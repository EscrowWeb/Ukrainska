import React from 'react';
import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="favicons/onpFavicon.png" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Ukrainska Pravda open news - shared via IPFS',
    keywords: 'Ukrainska, open, news, world news',
    description: 'Ukrainska news on the blockchain',
};

export default Meta;
