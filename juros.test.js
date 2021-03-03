const juros = require('./juros')

test('jurosSimples', () => {
    const C = 100
    const i = 0.1
    const t = 1
    const jurosEsperados = 10
    const jurosCalculado = juros.jurosSimples(C, i, t)

    expect(jurosCalculado).toBe(jurosEsperados)

})

test('jurosSimples', () => {
    const C = 100
    const i = 0.1
    const t = 0
    const jurosEsperados = 0
    const jurosCalculado = juros.jurosSimples(C, i, t)

    expect(jurosCalculado).toBe(jurosEsperados)

})

test('jurosSimples', () => {
    const C = 100
    const i = 0.1
    const t = 10
    const jurosEsperados = 100
    const jurosCalculado = juros.jurosSimples(C, i, t)

    expect(jurosCalculado).toBe(jurosEsperados)

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
    const C = 100
    const i = 10
    const t = 1
    const jurosEsperados = 1100
    const jurosCalculado = juros.montanteJurosCompostos(C, i, t)

    expect(jurosCalculado).toBe(jurosEsperados)
})

test('jurosCompostos', () => {
    const C = 1000
    const i = 10
    const t = 1
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 1100)

    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
    const jurosCalculado = jurosCompostos(C, i, t)
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
    expect(jurosCalculado).toBe(100)
})