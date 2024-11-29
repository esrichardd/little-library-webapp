// src/services/apiService.js
const BASE_URL = import.meta.env.VITE_BASE_API_URL || 'https://example.com/api'

const buildRequestOptions = (method: string, payload: any): RequestInit => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (payload) {
    options.body = JSON.stringify(payload)
  }

  return options
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json()
    const errorMessages: { [key: number]: string } = {
      400: 'Bad Request: ',
      401: 'Unauthorized: ',
      403: 'Forbidden: ',
      404: 'Not Found: ',
      500: 'Internal Server Error: ',
    }

    const defaultMessage = 'API request failed'
    const errorMessage = errorMessages[response.status] || defaultMessage
    throw new Error(errorMessage + (errorData.message || ''))
  }

  return (await response.json()) as T
}

export const apiRequest = async <T>(
  endpoint: string,
  method: string,
  payload = null
): Promise<T> => {
  try {
    console.log('BASE_URL ->', BASE_URL)
    const options = buildRequestOptions(method, payload)
    const response = await fetch(`${BASE_URL}/${endpoint}`, options)
    return await handleResponse<T>(response)
  } catch (error) {
    console.error(JSON.stringify(error))
    throw error
  }
}
