import React from 'react';

const APIFail = ({ error }) => (
  <div style={{ fontSize: '12px', marginTop: '17px' }}>
    Oh no... {error?.message} <br />
    Looks like GraphQL call failed. Please run below proxy in CMD/Terminal (Req: Node.js) <br />
    <textarea readOnly style={{ color: 'red', width: '100%', height: '32px', marginTop: '5px' }}>
      npx local-cors-proxy --proxyUrl https://venia.magento.com/ --port 4000 --proxyPartial ""
    </textarea>
  </div>
);

export default APIFail;
