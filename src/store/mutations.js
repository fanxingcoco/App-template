export default {
  setUser (state, user) {
    const reg = /([_][^/]+)$/
    user = user.replace(reg, '')
    this.state.user = user
    // console.log(user)
  },
  setPassword (state, password) {
    const reg = /([_][^/]+)$/
    password = password.replace(reg, '')
    this.state.password = password
    // console.log(password)
  },
  setUnit (state, unit) {
    const reg = /([_][^/]+)$/
    unit = unit.replace(reg, '')
    this.state.unit = unit
    // console.log(unit)
  },
  setRule (state, rule) {
    this.state.rule = rule
    // console.log(rule)
  }
}
