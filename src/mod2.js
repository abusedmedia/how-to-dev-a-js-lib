const m = Math.random()

class Mod {
  method () {
    console.log('hey! a method from a module 2!' + m + '--' + Math.random())
  }
}

export default new Mod()
