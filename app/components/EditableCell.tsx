import React, { useState } from "react"
import { Input, Box, Button, Textarea } from "@chakra-ui/react"

const EditableCell = ({
  value,
  onChange,
  cell
}: {
  value: string
  onChange: (value: string) => void
  cell?: string
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleSave = () => {
    setIsEditing(false)
    onChange(inputValue)
  }

  if (cell === "tickersCalls" || cell === "tickersPuts") {
    return isEditing ? (
      <Box>
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size="md"
          resize={"horizontal"}
        />
        <Button size="xs" onClick={handleSave}>
          Save
        </Button>
      </Box>
    ) : (
      <span onClick={() => setIsEditing(true)}>{value}</span>
    )
  }

  return isEditing ? (
    <Box>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        size="sm"
      />
      <Button size="xs" onClick={handleSave}>
        Save
      </Button>
    </Box>
  ) : (
    <span onClick={() => setIsEditing(true)}>{value}</span>
  )
}

export default EditableCell
