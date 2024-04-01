import React from 'react';

const APIFail = ({ error }) => (
  <div>
    <p>Looks like GraphQL call failed. Please run this in your CMD/Terminal (Req: Node.js)</p>
    <p>
      <textarea readOnly>
        npx local-cors-proxy --proxyUrl https://venia.magento.com/ --port 4000 --proxyPartial ""
      </textarea>
    </p>

    <p>Oh no... {error?.message}</p>
  </div>
);

export default APIFail;
