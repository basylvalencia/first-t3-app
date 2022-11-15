const GQL = async () => {
    const endpoint = 'https://acidgreen-reporting.myshopify.com/api/2022-10/graphql';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Shopify-Storefront-Access-Token': 'f84174565e26a46d0b160eb9e3eabc5d'
    });
    const query = () => 
    `{
      products(first: 10, reverse: true) {
        edges {
          node {
            id
            title
            description
            handle
            variants(first: 10) {
              edges {
                node {
                  price {
										amount
									}
                  title
                }
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    }`;
    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({query: query()}),
    }
    const [response] = await Promise.all([fetch(endpoint, options)]);

    return response;
};

export default GQL;