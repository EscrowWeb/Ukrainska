const feeds = [
    {
        name: 'pravda',
        type: 'en',
        data: {
            url: 'https://www.pravda.com.ua/eng/rss/view_news/',
            dataMap: {
                id: 'guid',
                pic: 'null',
                headline: 'title',
                summary: 'content',
                date: 'pubDate',
                attribution: 'Ukrainska Pravda News',
                link: 'link',
            },
        },
    },
       
];
export default feeds;
