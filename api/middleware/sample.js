module.exports = function(app) {
  
  const index = (req, res, next) => {
    res.send('sample')
  }

  return { 
    index 
  }

}
