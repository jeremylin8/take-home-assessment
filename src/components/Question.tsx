import React from 'react'

import NumberField from './fields/NumberField'
import TextField from './fields/TextField'
import ChoiceField from './fields/ChoiceField'
import PercentageField from './fields/PercentageField'
import { QuestionProps } from '../types'
import BooleanField from './fields/BooleanField'

function Question({
  question, onChange, answers,
}: QuestionProps) {
  const questionId = question.id.toString()

  const renderField = (type: string) => {
    switch (type) {
      case 'text':
        return <TextField name={questionId} initialValue={answers[questionId]} onChange={onChange} />
      case 'number':
        return <NumberField name={questionId} initialValue={answers[questionId]} onChange={onChange} />
      case 'boolean':
        return <BooleanField name={questionId} initialValue={answers[questionId]} onChange={onChange} />
      case 'choice':
        return (
          <ChoiceField
            name={question.id.toString()}
            initialValue={answers[questionId]}
            onChange={onChange}
            choices={question.choices as string[]}
          />
        )
      case 'percentage':
        return <PercentageField name={question.id.toString()} initialValue={answers[questionId]} onChange={onChange} />
      // case 'multiple':
      //   return (
      //     <MultipleField
      //       name={question.id.toString()}
      //       onChange={onChange}
      //       multiple={question.multiple as string[]}
      //     />
      //   )
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl">
      <h2 className="mb-10 text-3xl font-bold">{ question.title }</h2>
      { question.type === 'multiple' ? question?.multiple?.map((field) => (
        renderField(field)
      )) : renderField(question.type) }
      { question.description && (
        <>
          <p className="mt-10 text-gray-600">{ question.description }</p>
          <a className="mt-2 block font-medium text-gray-600" href="//atmos.ai" target="_blank" rel="noreferrer">Learn More &rarr;</a>
        </>
      ) }
    </div>
  )
}

export default Question
