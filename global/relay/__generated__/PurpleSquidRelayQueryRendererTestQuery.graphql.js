/**
 * @flow
 * @relayHash 5fd5803fe211f71b1bf53a8f5a9a147b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PurpleSquidRelayQueryRendererTestQueryVariables = {||};
export type PurpleSquidRelayQueryRendererTestQueryResponse = {|
  +clients: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name: ?string
      |}
    |}>
  |}
|};
export type PurpleSquidRelayQueryRendererTestQuery = {|
  variables: PurpleSquidRelayQueryRendererTestQueryVariables,
  response: PurpleSquidRelayQueryRendererTestQueryResponse,
|};
*/


/*
query PurpleSquidRelayQueryRendererTestQuery {
  clients {
    edges {
      node {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PurpleSquidRelayQueryRendererTestQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clients",
        "storageKey": null,
        "args": null,
        "concreteType": "ClientsConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
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
    "name": "PurpleSquidRelayQueryRendererTestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clients",
        "storageKey": null,
        "args": null,
        "concreteType": "ClientsConnectionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ClientsConnectionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
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
    "name": "PurpleSquidRelayQueryRendererTestQuery",
    "id": null,
    "text": "query PurpleSquidRelayQueryRendererTestQuery {\n  clients {\n    edges {\n      node {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7c6950b0cebf118362952eeb02515b45';
module.exports = node;
