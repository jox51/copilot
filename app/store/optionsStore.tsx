import { create } from "zustand"

interface OptionsData {
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

interface OptionsState {
  data: OptionsData
  setData: (data: Partial<OptionsData>) => void
}

const useOptionsStore = create<OptionsState>((set) => ({
  data: {
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
  setData: (updatedData) =>
    set((state) => ({
      data: { ...state.data, ...updatedData }
    }))
}))

export default useOptionsStore
