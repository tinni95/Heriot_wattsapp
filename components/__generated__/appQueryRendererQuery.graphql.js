/**
 * @flow
 * @relayHash 3dec72d1560099c199acff3c2db30331
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryRendererQueryVariables = {||};
export type appQueryRendererQueryResponse = {|
  +node: ?{|
    +restaurants?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +categories: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +name: ?string,
                +id: string,
              |}
            |}>
          |}
        |}
      |}>
    |}
  |}
|};
export type appQueryRendererQuery = {|
  variables: appQueryRendererQueryVariables,
  response: appQueryRendererQueryResponse,
|};
*/


/*
query appQueryRendererQuery {
  node(id: "Q2xpZW50OjE=") {
    __typename
    ... on Client {
      restaurants {
        edges {
          node {
            categories {
              edges {
                node {
                  name
                  id
                }
              }
            }
            id
          }
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "Q2xpZW50OjE="
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "categories",
  "storageKey": null,
  "args": null,
  "concreteType": "CategoriesConnectionConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "CategoriesConnectionEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Category",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appQueryRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"Q2xpZW50OjE=\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Client",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "restaurants",
                "storageKey": null,
                "args": null,
                "concreteType": "RestaurantsConnectionConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RestaurantsConnectionEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Restaurant",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQueryRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": "node(id:\"Q2xpZW50OjE=\")",
        "args": (v0/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Client",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "restaurants",
                "storageKey": null,
                "args": null,
                "concreteType": "RestaurantsConnectionConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RestaurantsConnectionEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Restaurant",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v1/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "appQueryRendererQuery",
    "id": null,
    "text": "query appQueryRendererQuery {\n  node(id: \"Q2xpZW50OjE=\") {\n    __typename\n    ... on Client {\n      restaurants {\n        edges {\n          node {\n            categories {\n              edges {\n                node {\n                  name\n                  id\n                }\n              }\n            }\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd37c01bff8cd3e4709db9c929cde091a';
module.exports = node;
