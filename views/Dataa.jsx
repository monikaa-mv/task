// import React from "react";
// import { Table } from "./Table";


// export const App = () => {
//     const username = 'monika@optimizory.com';
//     const password = "ATATT3xFfGF08OsYUDHlnPuJArXKeiG8uYA1AhIiHtBElWjiyx-dgScflDLcbaFTGikADiX9OPI1EHKv72m565Xp8faNvagDO6CsksaYtnJFyD0le6z9w4pgZsx7ZhbXdgVtnGGKzCgH62hVcCbQ_YeFdwnX8PhGtLEvG-14I36D9w1sO6GRXqo=C52C5027";
//         // const url = "https://monikavalecha.atlassian.net/rest/api/3/search";
//         // const searchQuery = 'project=P2%20AND%20priority=High'; 
      
//         fetch('https://monikavalecha.atlassian.net/rest/api/3/search?jql=project=P2%20AND%20priority=High', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Basic ${Buffer.from(
//             username + ':' + password
//           ).toString('base64')}`,
//           'Accept': 'application/json'
//         }
//       })
//         .then(response => {
//           console.log(
//             `Response: ${response.status} ${response.statusText}`
//           );
//           return response.json();
//         })
//         .then(jsonData => {
//             //responseData = jsonData;
//             console.log(jsonData)
//         })
//         .catch(err => console.error(err));


//         return(
//             <div>
//                 <Table
//                 data={jsonData}
//                 />
//             </div>
//         )
//     }

import React from 'react';
//import Table from './Table';

const App = () => {
    // a variable that stroes json data
    
  const username = 'monika@optimizory.com';
  const password = "ATATT3xFfGF08OsYUDHlnPuJArXKeiG8uYA1AhIiHtBElWjiyx-dgScflDLcbaFTGikADiX9OPI1EHKv72m565Xp8faNvagDO6CsksaYtnJFyD0le6z9w4pgZsx7ZhbXdgVtnGGKzCgH62hVcCbQ_YeFdwnX8PhGtLEvG-14I36D9w1sO6GRXqo=C52C5027";
  const url = "https://monikavalecha.atlassian.net/rest/api/3/search";
  const searchQuery = 'project=P2%20AND%20priority=High'; 

//   AP.request('/rest/api/3/search?jql=project=P2%20AND%20priority=High&fields=*all', {
//     success: function(responseText){
//       alert(responseText);
//     }
//   });

  fetch('https://monikavalecha.atlassian.net/rest/api/3/search?jql=project=P2%20AND%20priority=High&fields=*all', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      username + ':' + password
    ).toString('base64')}`,
    'Accept': 'application/json'
  },

})
.then(response => response.json())
.then(data => {
    result = data
    console.log(data)
})
.catch(err => console.error(err));


  const jsonData = [
    {
        expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
        id: '10008',
        self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10008',
        key: 'P2-7',
        fields: [Object]
      },
      {
        expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
        id: '10006',
        self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10006',
        key: 'P2-5',
        fields: [Object]
      },
      {
        expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
        id: '10003',
        self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10003',
        key: 'P2-2',
        fields: [Object]
      },
      {
        expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
        id: '10002',
        self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10002',
        key: 'P2-1',
        fields: [Object]
      }
  ];

  return (
    <div>
      {/* Render the Table component and pass the JSON data */}
      <Table data={jsonData} />
    </div>
  );
};

export default App;