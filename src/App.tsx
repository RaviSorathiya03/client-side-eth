import { useAccount, useConnectors, useDisconnect, WagmiProvider } from 'wagmi'
import './App.css'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {


  return (
   <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
    <ConnectWallet />
    </QueryClientProvider>
   </WagmiProvider>
  )
}

function ConnectWallet(){
  const connectors = useConnectors();
  const {address} = useAccount();
  const {disconnect} = useDisconnect();
  if(address){
    return <div>Connected to {address}
    <button onClick={()=>disconnect()}>Disconnect</button>
    </div>
  } else{
  return(
    <div>
      {connectors.map(c=> <button key={c.name} onClick={() => c.connect()}>
        connect via {c.name} 
      </button>)}
    </div>
  );
}
}

export default App
