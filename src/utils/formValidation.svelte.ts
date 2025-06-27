export enum ValidationState {
  Blank,
  Valid,
  Error
}

type ValidationObj = { [key: string]: ValidationState };

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateNotBlank(validationState: ValidationObj, key: keyof typeof validationState, setValidData: (value: string) => void) {
  return (value: string) => {
    if (value) {
      validationState[key] = ValidationState.Valid;
      setValidData(value);
    } else {
      validationState[key] = ValidationState.Blank;
    }
  }
}

export function validateEmail(validationState: ValidationObj, key: keyof typeof validationState, setValidData: (value: string) => void) {
  return(email:string) => {
    if (!email) {
      validationState[key] = ValidationState.Blank;
      return;
    }
    if (emailRegex.test(email)) {
      validationState[key] = ValidationState.Valid;
      setValidData(email);
    } else {
      validationState[key] = ValidationState.Error;
    }
  }
}

export function areAllFieldsValid(validationState: ValidationObj) {
  return Object.values(validationState).every((v) => v === ValidationState.Valid);
}

export function getEmailError(emailState: ValidationState) {
  return emailState === ValidationState.Error
			? 'That email address doesn’t seem to be valid.'
			: undefined
}
