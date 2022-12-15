import React from 'react'
import Head from "next/head";

const SeoMetaTags = ({story, robots = 'index, follow'}) => {
    const brandName = 'Your Brand'
    const title = `${story.content?.seo?.title ?? story.name} | ${brandName}`

    return (
        <Head>
            <title>{title}</title>
            <meta name="created" content={story.published_at} />
            <meta name="robots" content={robots} />
            <meta property="og:type" content="website" />
            <meta name="twitter:title" property="og:title" content={story.content?.seo?.title ?? story.name} />
            <meta name="twitter:url" property="og:url" content={`https://${process.env.NEXT_PUBLIC_APP_URL}/${story.slug}`} />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:domain" property="og:site_name" content={brandName} />
            <meta name="description" content={story.content?.seo?.description ?? ''} lang={story.lang === 'default'  ? 'de' : story.lang}/>
            <meta name="twitter:description" property="og:description" content={story.content?.seo?.description ?? ''}/>
        </Head>
    )
}

export default SeoMetaTags
