import { shell } from 'electron'

const testnetUrl = 'https://testnet.smartbit.com.au'
const mainnetUrl = 'https://smartbit.com.au'

const showTransaction = txid =>
  shell.openExternal(`${testnetUrl}/tx/${txid}`)

const showChannelClosing = channel =>
  showTransaction(channel.closing_txid)

const showChannelPoint = channel =>
  showTransaction(channel.channel.channel_point.split(':')[0])

export default {
  testnetUrl,
  mainnetUrl,
  showTransaction,
  showChannelClosing,
  showChannelPoint
}
