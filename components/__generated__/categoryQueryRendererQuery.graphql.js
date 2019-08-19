/**
 * @flow
 * @relayHash 30ef2ab59d3eac6fd96b85940fbfd75b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type categoryQueryRendererQueryVariables = {|
  categoryId: string
|};
export type categoryQueryRendererQueryResponse = {|
  +node: ?{|
    +menuItems?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +name: ?string
        |}
      |}>
    |},
    +subCategories?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +name: ?string
        |}
      |}>
    |},
  |}
|};
export type categoryQueryRendererQuery = {|
  variables: categoryQueryRendererQueryVariables,
  response: categoryQueryRendererQueryResponse,
|};
*/


/*
query categoryQueryRendererQuery(
  $categoryId: ID!
) {
  node(id: $categoryId) {
    __typename
    ... on Category {
      menuItems {
        edges {
          node {
            name
            id
          }
        }
      }
      subCategories {
        edges {
          node {
            name
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
    "kind": "LocalArgument",
    "name": "categoryId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "categoryId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  (v4/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "categoryQueryRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Category",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "menuItems",
                "storageKey": null,
                "args": null,
                "concreteType": "MenuItemonnectionTypeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MenuItemonnectionTypeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MenuItem",
                        "plural": false,
                        "selections": (v3/*: any*/)
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subCategories",
                "storageKey": null,
                "args": null,
                "concreteType": "SubCategoriesConnectionTypeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubCategoriesConnectionTypeEdge",
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
                        "selections": (v3/*: any*/)
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
    "name": "categoryQueryRendererQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
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
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Category",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "menuItems",
                "storageKey": null,
                "args": null,
                "concreteType": "MenuItemonnectionTypeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MenuItemonnectionTypeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MenuItem",
                        "plural": false,
                        "selections": (v5/*: any*/)
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subCategories",
                "storageKey": null,
                "args": null,
                "concreteType": "SubCategoriesConnectionTypeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubCategoriesConnectionTypeEdge",
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
                        "selections": (v5/*: any*/)
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
    "name": "categoryQueryRendererQuery",
    "id": null,
    "text": "query categoryQueryRendererQuery(\n  $categoryId: ID!\n) {\n  node(id: $categoryId) {\n    __typename\n    ... on Category {\n      menuItems {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n      subCategories {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9ce6596c0e481ec5e9366fba2c55470f';
module.exports = node;
