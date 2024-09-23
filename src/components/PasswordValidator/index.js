// Write your code here
import {useState} from 'react'
import {
  CompleteValidatorContainer,
  InsideValidateContainer,
  ValidateHeading,
  ValidatorParagraph,
  InputPasswordContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setInput] = useState('')
  const [isValid, errorUpdate] = useState(true)

  const onChangeInput = event => {
    const inputLength = userInput.length

    if (inputLength < 8) {
      errorUpdate(true)
      setInput(event.target.value)
    } else {
      errorUpdate(false)
      setInput(event.target.value)
    }
  }

  return (
    <CompleteValidatorContainer>
      <InsideValidateContainer>
        <ValidateHeading>Password Validator</ValidateHeading>
        <ValidatorParagraph>
          Check how strong and secure is your password
        </ValidatorParagraph>
        <InputPasswordContainer
          type="password"
          value={userInput}
          onChange={onChangeInput}
        />
        {isValid && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>
        )}
      </InsideValidateContainer>
    </CompleteValidatorContainer>
  )
}

export default PasswordValidator
