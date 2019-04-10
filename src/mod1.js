import mod2 from './mod2'

class Mod {
  method () {
    console.log('hey! a method from a module 1!')
    mod2.method()
  }
}

export default new Mod()
