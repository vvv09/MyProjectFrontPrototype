export function setKeycloak(state, keycloak) {
  state.keycloak = keycloak
}

export const switchEditMode = (state) => {
  state.editMode = !state.editMode
}
