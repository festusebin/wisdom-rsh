// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
  ;
  const v71 = stdlib.protect(ctc1, await interact.confirmPurchase(v65), {
    at: './index.rsh:28:69:application',
    fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v71],
    evt_cnt: 1,
    funcNum: 1,
    lct: v66,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
      
      ;
      if (v73) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
  ;
  if (v73) {
    return;
    }
  else {
    stdlib.protect(ctc2, await interact.reportCancellation(), {
      at: './index.rsh:32:51:application',
      fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Buyer'
      });
    
    return;
    }
  
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  
  
  const v61 = stdlib.protect(ctc0, interact.price, 'for Seller\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v61],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:24:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v27, from: v64 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.reportReady(v65), {
    at: './index.rsh:25:25:application',
    fs: ['at ./index.rsh:25:25:application call to [unknown function] (defined at: ./index.rsh:25:25:function exp)', 'at ./index.rsh:25:25:application call to "liftedInteract" (defined at: ./index.rsh:25:25:application)'],
    msg: 'reportReady',
    who: 'Seller'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v73], secs: v75, time: v74, didSend: v40, from: v72 } = txn2;
  ;
  if (v73) {
    return;
    }
  else {
    stdlib.protect(ctc1, await interact.reportCancellation(), {
      at: './index.rsh:32:51:application',
      fs: ['at ./index.rsh:32:9:application call to [unknown function] (defined at: ./index.rsh:32:21:function exp)'],
      msg: 'reportCancellation',
      who: 'Seller'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA4yhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADIjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gAQPv8Y0NP8WUQcIULA0/0EAA0IANkIAM0iBoI0GiACYIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v73",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106f43803806106f48339810160408190526100229161017c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100ba565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100b29260029201906100e3565b505050610255565b816100df5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100ef9061021a565b90600052602060002090601f0160209004810192826101115760008555610157565b82601f1061012a57805160ff1916838001178555610157565b82800160010185558215610157579182015b8281111561015757825182559160200191906001019061013c565b50610163929150610167565b5090565b5b808211156101635760008155600101610168565b600081830360408082121561019057600080fd5b80518082016001600160401b0380821183831017156101bf57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d857600080fd5b83519450602085019150848210818311171561020457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022e57607f821691505b6020821081141561024f57634e487b7160e01b600052602260045260246000fd5b50919050565b610490806102646000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d5780639a3e391214610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610329565b6100b8565b3480156100a157600080fd5b506100aa610211565b604051610064929190610341565b6100c860016000541460096102ae565b6100e2813515806100db57506001548235145b600a6102ae565b6000808055600280546100f49061039e565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061039e565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103e1565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516101b8929190610405565b60405180910390a16101cc341560086102ae565b6101dc604083016020840161043d565b156101fb57600080805560018190556101f7906002906102d3565b5050565b600080805560018190556101f7906002906102d3565b6000606060005460028080546102269061039e565b80601f01602080910402602001604051908101604052809291908181526020018280546102529061039e565b801561029f5780601f106102745761010080835404028352916020019161029f565b820191906000526020600020905b81548152906001019060200180831161028257829003601f168201915b50505050509050915091509091565b816101f75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102df9061039e565b6000825580601f106102ef575050565b601f01602090049060005260206000209081019061030d9190610310565b50565b5b808211156103255760008155600101610311565b5090565b60006040828403121561033b57600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561037557858101830151858201606001528201610359565b81811115610387576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103b257607f821691505b6020821081141561033b57634e487b7160e01b600052602260045260246000fd5b801515811461030d57600080fd5b6000602082840312156103f357600080fd5b81516103fe816103d3565b9392505050565b6001600160a01b03831681528135602080830191909152606082019083013561042d816103d3565b8015156040840152509392505050565b60006020828403121561044f57600080fd5b81356103fe816103d356fea26469706673582212207f5690634d103b4efd9f4bfe2f460763525d13b5bb48577437169ffa9c652dca64736f6c634300080c0033`,
  BytecodeLen: 1780,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:35:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:31:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller": Seller
  };
export const _APIs = {
  };
