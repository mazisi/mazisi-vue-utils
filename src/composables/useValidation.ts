import { ref, reactive } from 'vue';

// Define the structure of a validation rule
type ValidationRule = {
  message: string; // The error message to show
  validate: (value: any) => boolean; // The validation function that returns true/false
};

// Define the structure for form fields
type FormField = {
  value: any; // The input value
  rules: ValidationRule[]; // Array of validation rules
};

// Composable that takes in fields and performs validation
export function useValidation(fields: { [key: string]: FormField }) {
  // Reactive state for errors
  const errors = reactive<{ [key: string]: string | null }>({});

  // Validate a single field
  const validateField = (key: string) => {
    const field = fields[key];
    for (const rule of field.rules) {
      if (!rule.validate(field.value)) {
        errors[key] = rule.message;
        return false; // Stop at the first failing rule
      }
    }
    errors[key] = null; // Clear error if no rule fails
    return true;
  };

  // Validate the entire form
  const validateForm = () => {
    let isValid = true;
    for (const key in fields) {
      if (!validateField(key)) {
        isValid = false;
      }
    }
    return isValid;
  };

  return {
    errors,
    validateField,
    validateForm,
  };
}
