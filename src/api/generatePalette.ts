const generationSpecifications = {
  mode: 'transformer',
  num_colors: 4,
  temperature: 1.2,
  num_results: 1,
  adjacency: [
    '0',
    '65',
    '45',
    '35',
    '65',
    '0',
    '35',
    '65',
    '45',
    '35',
    '0',
    '35',
    '35',
    '65',
    '35',
    '0'
  ],
  palette: ['-', '-', '-', '-']
}

export const generatePalette = async (signal?: AbortSignal) => {
  const response = await fetch('https://api.huemint.com/color', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(generationSpecifications),
    signal
  })
  if (!response.ok) throw new Error('Ocurrio un error al llamar la api')
  const { results } = await response.json()

  return results
}
