import { create } from "zustand"

interface FieldsData {
  recs: string
  expirationDate: string
  minProfitPercentage: string
  maxProfitPercentage: string
  targetStrikes: string
  maxBudget: string
  tickersCalls: string[]
  tickersPuts: string[]
}

interface FieldsState {
  editFields: FieldsData
  setEditFields: (data: Partial<FieldsData>) => void
}

interface PercentageCompleteState {
  percentageComplete: number
  setPercentageComplete: (percentage: number) => void
}

export const useEditParamsFields = create<FieldsState>((set) => ({
  editFields: {
    recs: "",
    expirationDate: "",
    minProfitPercentage: "",
    maxProfitPercentage: "",
    targetStrikes: "",
    maxBudget: "",
    tickersCalls: [],
    tickersPuts: []
  },
  setEditFields: (updatedData) =>
    set((state) => ({
      editFields: { ...state.editFields, ...updatedData }
    }))
}))

export const usePercentageComplete = create<PercentageCompleteState>((set) => ({
  percentageComplete: 0,
  setPercentageComplete: (percentage) =>
    set(() => ({
      percentageComplete: percentage
    }))
}))
