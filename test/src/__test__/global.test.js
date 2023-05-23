// let text="Cecilia"
let text="Mundo123"

test('Debe contener un texto en especifico', () => { 
    expect(text).toMatch(/Mundo/)
 })
 const frutas=['🍓','🍊','🥝']
 test('¿Tenemos una fruta 🥝?', () => { 
    expect(frutas).toContain('🥝')
  })
  test('Es un numero mayor?',()=>{
    expect(10).toBeGreaterThan(9)
  })
  test('Verdadero',()=>{
    expect(true).toBeTruthy()
  })
//TODO 
  //hola aloh