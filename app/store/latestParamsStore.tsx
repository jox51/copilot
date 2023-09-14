import { create } from "zustand"

interface ParamsData {
  username: string
  email: string
  recs: string
  expirationDate: string
  minProfitPercentage: string
  maxProfitPercentage: string
  targetStrikes: string
  maxBudget: string
  tickersCalls: string[]
  tickersPuts: string[]
  // setTickers: (tickers: string) => void
  // setOptionTypes: (optionTypes: string) => void
  // setExpirationDate: (expirationDate: string) => void
  // setMinProfitPercentage: (minProfitPercentage: string) => void
  // setMaxProfitPercentage: (maxProfitPercentage: string) => void
  // setTargetStrikes: (targetStrikes: string) => void
  // setMaxBudget: (maxBudget: string) => void
}

interface ParamsState {
  latestParams: ParamsData
  setLatestParams: (data: Partial<ParamsData>) => void
}

const useLatestParamsStore = create<ParamsState>((set) => ({
  latestParams: {
    username: "",
    email: "",
    recs: "",
    expirationDate: "",
    minProfitPercentage: "",
    maxProfitPercentage: "",
    targetStrikes: "",
    maxBudget: "",
    tickersCalls: [],
    tickersPuts: []
  },
  setLatestParams: (updatedData) =>
    set((state) => ({
      latestParams: { ...state.latestParams, ...updatedData }
    }))
}))

export default useLatestParamsStore
