"use client"

import { useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function SurveyForm() {
  const [singleChoice, setSingleChoice] = useState("")
  const [otherSingleChoice, setOtherSingleChoice] = useState("")
  const [multipleChoice, setMultipleChoice] = useState<string[]>([])
  const [textInput, setTextInput] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({
      singleChoice: singleChoice === "other" ? otherSingleChoice : singleChoice,
      multipleChoice,
      textInput,
    })
    // Here you would typically send the data to your backend
  }

  const handleMultipleChoiceChange = (choice: string) => {
    setMultipleChoice((prev) => (prev.includes(choice) ? prev.filter((item) => item !== choice) : [...prev, choice]))
  }

  const handleSingleChoiceChange = (value: string) => {
    setSingleChoice(value)
    if (value !== "other") {
      setOtherSingleChoice("")
    }
  }

  const handleOtherSingleChoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtherSingleChoice(e.target.value)
    setSingleChoice("other")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Survey Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Single Choice Question</h2>
          <RadioGroup value={singleChoice} onValueChange={handleSingleChoiceChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
            {singleChoice === "other" && (
              <div className="mt-2 ml-6">
                <Input
                  value={otherSingleChoice}
                  onChange={handleOtherSingleChoiceChange}
                  placeholder="Please specify"
                  className="max-w-sm"
                />
              </div>
            )}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Multiple Choice Question</h2>
          <div className="space-y-2">
            {["choice1", "choice2", "choice3", "choice4"].map((choice) => (
              <div key={choice} className="flex items-center space-x-2">
                <Checkbox
                  id={choice}
                  checked={multipleChoice.includes(choice)}
                  onCheckedChange={() => handleMultipleChoiceChange(choice)}
                />
                <Label htmlFor={choice}>{`Choice ${choice.slice(-1)}`}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="textInput" className="text-2xl font-semibold">
            Text Input
          </Label>
          <Input
            id="textInput"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter your response here"
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}

