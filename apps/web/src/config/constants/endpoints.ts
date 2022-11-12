import { ChainId } from '@pancakeswap/sdk'

export const GRAPH_API_PROFILE = 'https://api.thegraph.com/subgraphs/name/pancakeswap/profile'
export const GRAPH_API_PREDICTION_BNB = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction-v2'
export const GRAPH_API_PREDICTION_CAKE = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction-cake'

export const SNAPSHOT_BASE_URL = process.env.NEXT_PUBLIC_SNAPSHOT_BASE_URL
export const API_PROFILE = 'https://profile.pancakeswap.com'
export const SNAPSHOT_API = `${SNAPSHOT_BASE_URL}/graphql`
export const SNAPSHOT_HUB_API = `${SNAPSHOT_BASE_URL}/api/message`
/**
 * V1 will be deprecated but is still used to claim old rounds
 */
export const GRAPH_API_PREDICTION_V1 = 'https://api.thegraph.com/subgraphs/name/pancakeswap/prediction'

export const INFO_CLIENT = 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2'
export const INFO_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth'
export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks'
export const BLOCKS_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'

export const TC_MOBOX_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v3'
export const TC_MOD_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/trading-competition-v4'

export const BIT_QUERY = 'https://graphql.bitquery.io'

export const ACCESS_RISK_API = 'https://red.alert.pancakeswap.com/red-api'

export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.BSC]: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
  [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
}

export const BLOCKS_CLIENT_WITH_CHAIN = {
  [ChainId.BSC]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks',
  [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
}
