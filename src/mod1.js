import mod2 from './mod2'

const m = Math.random()

class Mod {
  method () {
    console.log(`hey! a method from a module 1!${m}`)
    mod2.method()
  }
}

export default new Mod()
