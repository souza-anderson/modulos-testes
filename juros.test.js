const juros = require('./juros')

test('jurosSimples', () => {
    const C = 100
    const i = 0.1
    const t = 1
    const jurosEsperados = 10

    expect(juros.jurosSimples(C, i, t)).toBe(jurosEsperados)

})


test('montateSimples', () => {
    const C = 100
    const i = 0.1
    const t = 1
    montateEsperado = 110

    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 10)

    const montanteSimples = juros.pure.montanteSimples({ jurosSimples })
    const montante = montanteSimples(C, i, t)
    expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
    expect(montante).toBe(montateEsperado)

})

test('montanteJurosCompostos', () => {
    C = 100
    i = 10
    t = 1
    montanteEsperado = 1100

    expect(juros.montanteJurosCompostos(C, i, t)).toBe(montanteEsperado)
})

test('jurosCompostos', () => {
    C = 1000
    i = 10
    t = 1

    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 100)

    const montanteJuros = juros.pure.jurosCompostos({ montanteJurosCompostos })
    const jurosCompostos = montanteJuros(C, i, t)
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
    expect(jurosCompostos).toBe(900)
})