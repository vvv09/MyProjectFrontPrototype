export function getToken ( state ) {
  return state.keycloak.token
}

export function getKeycloak ( state ) {
  return state.keycloak
}

export function getName ( state ) {
  return state.keycloak.tokenParsed.name
}

export function isGHUser ( state ) {
  return state.keycloak.tokenParsed.realm_access.roles.includes("USER")
}

export function isModerator ( state ) {
  return state.keycloak.tokenParsed.realm_access.roles.includes("MODERATOR")
}

export function isAdmin ( state ) {
  return state.keycloak.tokenParsed.realm_access.roles.includes("ADMIN")
}

export function isEditModeEnabled (state) {
  return state.editMode
}
