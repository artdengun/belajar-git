const contributors = [
  { name: 'Hafid Mukhlasin', link: 'https://github.com/hscstudio' },
  // { name: 'namamu', link: 'link_githubmu' }, test
]

const found = (contributor) => {
  const result = contributors.find((item) => {
    return contributor === item.name
  })
  return result ? true : false
}

module.exports = found
