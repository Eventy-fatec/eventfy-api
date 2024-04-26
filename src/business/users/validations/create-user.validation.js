function validateCreateUserMissingFields(data) {
  const missingFields = [];

  if(!data?.email){
    missingFields.push('Email')
  }
  if(!data?.name){
    missingFields.push('Name')
  }
  if(!data?.birthdate){
    missingFields.push('Birthdate')
  }
  if(!data?.cpf){
    missingFields.push('Cpf')
  }

  return missingFields
}

module.exports = { validateCreateUserMissingFields }
